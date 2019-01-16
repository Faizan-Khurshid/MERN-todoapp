
const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
    todo : String
  });

const Todos = mongoose.model('Todos', TodoSchema)
// Users k naam ki collenction banegi

module.exports = Todos;
