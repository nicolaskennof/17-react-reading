var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },

  authors: {
    type: String,
    required: false
  },

  description: {
    type: String,
    required: false
  },

  image: {
    type: String,
    required: false
  },

  link: {
    type: String,
    required: false
  },
});

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;