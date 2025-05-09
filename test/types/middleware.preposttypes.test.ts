import { Schema, model, Model, Document, SaveOptions, Query, Aggregate, HydratedDocument, PreSaveMiddlewareFunction } from 'mongoose';
import { expectError, expectType, expectNotType } from 'tsd';

interface IDocument extends Document {
  name?: string;
}

const preMiddlewareFn: PreSaveMiddlewareFunction<Document> = function(next, opts) {
  this.$markValid('name');
  if (opts.session) {
    next();
  } else {
    next(new Error('Operation must be in Session.'));
  }
};

const schema: Schema<IDocument> = new Schema<IDocument>({ name: { type: 'String' } });

/* The following tests were generated by test/model.middleware.preposttypes.test.js (with GEN_TSD hardcoded set to true) */

schema.pre('save', function() {
  expectType<HydratedDocument<IDocument>>(this);
});

schema.post('save', function(res) {
  expectType<HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('save', { document: true, query: false }, function() {
  expectType<HydratedDocument<IDocument>>(this);
});

schema.post('save', { document: true, query: false }, function(res) {
  expectType<HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('save', { document: true, query: true }, function() {
  expectType<HydratedDocument<IDocument>>(this);
});

schema.post('save', { document: true, query: true }, function(res) {
  expectType<HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('save', { document: false, query: true }, function() {
  expectType<never>(this);
});

schema.post('save', { document: false, query: true }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('save', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('save', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('init', function() {
  expectType<HydratedDocument<IDocument>>(this);
});

schema.pre('estimatedDocumentCount', function() {
  expectType<Query<any, any>>(this);
});

schema.post('estimatedDocumentCount', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('estimatedDocumentCount', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('estimatedDocumentCount', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('estimatedDocumentCount', { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('estimatedDocumentCount', { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('estimatedDocumentCount', { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post('estimatedDocumentCount', { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('estimatedDocumentCount', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('estimatedDocumentCount', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('countDocuments', function() {
  expectType<Query<any, any>>(this);
});

schema.post('countDocuments', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('countDocuments', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('countDocuments', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('countDocuments', { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('countDocuments', { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('countDocuments', { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post('countDocuments', { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('countDocuments', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('countDocuments', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('deleteMany', function() {
  expectType<Query<any, any>>(this);
});

schema.post('deleteMany', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('deleteMany', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('deleteMany', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('deleteMany', { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('deleteMany', { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('deleteMany', { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post('deleteMany', { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('deleteMany', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('deleteMany', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('distinct', function() {
  expectType<Query<any, any>>(this);
});

schema.post('distinct', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('distinct', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('distinct', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('distinct', { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('distinct', { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('distinct', { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post('distinct', { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('distinct', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('distinct', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('find', function() {
  expectType<Query<any, any>>(this);
});

schema.post('find', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('find', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('find', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('find', { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('find', { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('find', { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post('find', { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('find', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('find', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOne', function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOne', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOne', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOne', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOne', { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOne', { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOne', { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post('findOne', { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOne', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('findOne', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndDelete', function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOneAndDelete', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndDelete', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOneAndDelete', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndDelete', { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOneAndDelete', { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndDelete', { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post('findOneAndDelete', { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndDelete', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('findOneAndDelete', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndReplace', function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOneAndReplace', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndReplace', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOneAndReplace', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndReplace', { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOneAndReplace', { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndReplace', { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post('findOneAndReplace', { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndReplace', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('findOneAndReplace', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndUpdate', function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOneAndUpdate', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndUpdate', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOneAndUpdate', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndUpdate', { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('findOneAndUpdate', { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndUpdate', { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post('findOneAndUpdate', { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('findOneAndUpdate', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('findOneAndUpdate', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('replaceOne', function() {
  expectType<Query<any, any>>(this);
});

schema.post('replaceOne', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('replaceOne', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('replaceOne', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('replaceOne', { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('replaceOne', { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('replaceOne', { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post('replaceOne', { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('replaceOne', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('replaceOne', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('updateMany', function() {
  expectType<Query<any, any>>(this);
});

schema.post('updateMany', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('updateMany', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('updateMany', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('updateMany', { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('updateMany', { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('updateMany', { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post('updateMany', { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('updateMany', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('updateMany', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('updateOne', function() {
  expectType<Query<any, any>>(this);
});

schema.post('updateOne', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('updateOne', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('updateOne', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('updateOne', { document: true, query: false }, function() {
  expectType<HydratedDocument<IDocument>>(this);
});

schema.post('updateOne', { document: true, query: false }, function(res) {
  expectType<HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('updateOne', { document: true, query: true }, function() {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
});

schema.post('updateOne', { document: true, query: true }, function(res) {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('updateOne', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('updateOne', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('deleteOne', function() {
  expectType<Query<any, any>>(this);
});

schema.post('deleteOne', function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('deleteOne', { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post('deleteOne', { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('deleteOne', { document: true, query: false }, function() {
  expectType<HydratedDocument<IDocument>>(this);
});

schema.post('deleteOne', { document: true, query: false }, function(res) {
  expectType<HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('deleteOne', { document: true, query: true }, function() {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
});

schema.post('deleteOne', { document: true, query: true }, function(res) {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre('deleteOne', { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post('deleteOne', { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany'], function() {
  expectType<Query<any, any>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany'], function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany'], { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany'], { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany'], { document: true, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany'], { document: true, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany'], { document: true, query: false }, function() {
  expectType<never>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany'], { document: true, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany'], { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany'], { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne'], function() {
  expectType<Query<any, any>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne'], function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne'], { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne'], { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne'], { document: true, query: false }, function() {
  expectType<HydratedDocument<IDocument>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne'], { document: true, query: false }, function(res) {
  expectType<HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne'], { document: true, query: true }, function() {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne'], { document: true, query: true }, function(res) {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne'], { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne'], { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne', 'validate'], function() {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne', 'validate'], function(res) {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne', 'validate'], { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne', 'validate'], { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne', 'validate'], { document: true, query: false }, function() {
  expectType<HydratedDocument<IDocument>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne', 'validate'], { document: true, query: false }, function(res) {
  expectType<HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne', 'validate'], { document: true, query: true }, function() {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne', 'validate'], { document: true, query: true }, function(res) {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne', 'validate'], { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'deleteOne', 'validate'], { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'save', 'updateOne', 'deleteOne', 'validate'], function() {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'save', 'updateOne', 'deleteOne', 'validate'], function(res) {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'save', 'updateOne', 'deleteOne', 'validate'], { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'save', 'updateOne', 'deleteOne', 'validate'], { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'save', 'updateOne', 'deleteOne', 'validate'], { document: true, query: false }, function() {
  expectType<HydratedDocument<IDocument>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'save', 'updateOne', 'deleteOne', 'validate'], { document: true, query: false }, function(res) {
  expectType<HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'save', 'updateOne', 'deleteOne', 'validate'], { document: true, query: true }, function() {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'save', 'updateOne', 'deleteOne', 'validate'], { document: true, query: true }, function(res) {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'save', 'updateOne', 'deleteOne', 'validate'], { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post(['estimatedDocumentCount', 'countDocuments', 'deleteMany', 'distinct', 'find', 'findOne', 'findOneAndDelete', 'findOneAndReplace', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'save', 'updateOne', 'deleteOne', 'validate'], { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['save', 'updateOne', 'deleteOne', 'validate'], function() {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
});

schema.post(['save', 'updateOne', 'deleteOne', 'validate'], function(res) {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['save', 'updateOne', 'deleteOne', 'validate'], { document: false, query: true }, function() {
  expectType<Query<any, any>>(this);
});

schema.post(['save', 'updateOne', 'deleteOne', 'validate'], { document: false, query: true }, function(res) {
  expectType<Query<any, any>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['save', 'updateOne', 'deleteOne', 'validate'], { document: true, query: false }, function() {
  expectType<HydratedDocument<IDocument>>(this);
});

schema.post(['save', 'updateOne', 'deleteOne', 'validate'], { document: true, query: false }, function(res) {
  expectType<HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['save', 'updateOne', 'deleteOne', 'validate'], { document: true, query: true }, function() {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
});

schema.post(['save', 'updateOne', 'deleteOne', 'validate'], { document: true, query: true }, function(res) {
  expectType<Query<any, any>|HydratedDocument<IDocument>>(this);
  expectNotType<Query<any, any>>(res);
});

schema.pre(['save', 'updateOne', 'deleteOne', 'validate'], { document: false, query: false }, function() {
  expectType<never>(this);
});

schema.post(['save', 'updateOne', 'deleteOne', 'validate'], { document: false, query: false }, function(res) {
  expectType<never>(this);
  expectNotType<Query<any, any>>(res);
});

/* end of generated tests */
