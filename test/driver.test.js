'use strict';

const { EventEmitter } = require('events');
const assert = require('assert');
const start = require('./common');

const mongoose = start.mongoose;
const Schema = mongoose.Schema;

describe('driver', function() {
  it('can set custom driver (gh-11900)', async function() {
    const m = new mongoose.Mongoose();

    class Collection {
      findOne(filter, options) { // eslint-disable-line no-unused-vars
        return Promise.resolve({ answer: 42, date: '2023-10-01' });
      }
    }
    class Connection extends EventEmitter {
      constructor(base) {
        super();
        this.base = base;
        this.models = {};
      }

      collection() {
        return new Collection();
      }

      async openUri() {
        this.readyState = mongoose.ConnectionStates.connected;
        return this;
      }
    }
    const driver = {
      Collection,
      Connection,
      plugins: [foo],
      SchemaTypes: {
        DateString: class DateString extends mongoose.SchemaType {
          constructor(key, options) {
            super(key, options, 'DateString');
          }

          cast(val) {
            if (typeof val !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(val)) {
              throw new Error('DateString must be in format yyyy-mm-dd');
            }
            return val;
          }
        }
      }
    };

    m.setDriver(driver);
    assert.deepStrictEqual(m.plugins.slice(mongoose.plugins.length), [[foo, undefined]]);

    await m.connect();

    const Test = m.model('Test', m.Schema({ answer: Number, date: 'DateString' }));

    const res = await Test.findOne();
    assert.deepEqual(res.toObject(), { answer: 42, date: '2023-10-01' });

    await assert.rejects(Test.create({ answer: 12, date: '2025-01' }), /path "date"/);

    function foo() {}
  });

  it('multiple drivers (gh-12638)', async function() {
    const m1 = new mongoose.Mongoose();
    const m2 = new mongoose.Mongoose();

    class Connection1 extends EventEmitter {
      constructor(base) {
        super();
        this.base = base;
        this.models = {};
        this.collections = {};
      }

      collection() {
        return new Collection();
      }

      async openUri() {
        this.readyState = mongoose.ConnectionStates.connected;
        return this;
      }
    }
    class Collection {
      insertOne(doc, options) { // eslint-disable-line no-unused-vars
        this.doc = doc;
        return Promise.resolve();
      }

      findOne(filter, options) { // eslint-disable-line no-unused-vars
        return Promise.resolve(this.doc);
      }
    }
    class Connection2 extends Connection1 {}

    const driver1 = {
      Collection,
      Connection: Connection1
    };
    const driver2 = {
      Collection,
      Connection: Connection2
    };

    m1.setDriver(driver1);
    m2.setDriver(driver2);

    await m1.connect('fake.com');
    const Test = m1.model('Test', new Schema({ answer: Number }, { versionKey: false }));
    await Test.create({ answer: 42 });
    let doc = await Test.findOne();
    /* eslint-disable no-unused-vars */
    assert.deepEqual((({ _id, ...doc }) => doc)(doc.toObject()), { answer: 42 });

    await m2.connect('fake.com');
    const Test2 = m2.model('Test', new Schema({ question: String }, { versionKey: false }));
    await Test2.create({ question: 'Calculating...' });
    doc = await Test2.findOne();
    assert.deepEqual((({ _id, ...doc }) => doc)(doc.toObject()), { question: 'Calculating...' });

    doc = await Test.findOne();
    assert.deepEqual((({ _id, ...doc }) => doc)(doc.toObject()), { answer: 42 });
  });
});
