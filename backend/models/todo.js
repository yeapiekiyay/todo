const mongoose = require('mongoose')

const modelName = 'Todo';

// Define the schema for the model
const TodoSchema = new mongoose.Schema(
  {
    description: { type: String },
    done: { type: Boolean }
  },
  { timestamps: true }
)

// Define the model and assign its schema
const Todo = mongoose.model(modelName, TodoSchema)

module.exports = mongoose.model(modelName)