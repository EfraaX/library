'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = Schema({

  name: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  desc: String,
  publisher: String,
  publicDate: Date,
  language: String,
  code: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
},
{
  toJSON: {
    transform: (doc, book) => {
      delete book.__v;
      delete book._id;
    }
  }
});

module.exports = mongoose.model('Book', BookSchema);