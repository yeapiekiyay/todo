const Todo = require('../models/todo')

/**
 * Fetches all Todos from the db and return as payload
 * @param {*} ctx 
 */
async function findAll(ctx) {
  const todos = await Todo.find({})
  ctx.body = todos
}

/**
 * Creates a new Todo from request payload and save to db
 * @param {*} ctx 
 */
async function create(ctx) {
  const newTodo = new Todo(ctx.request.body)
  const savedTodo = await newTodo.save()
  ctx.body = savedTodo
}

/**
 * Destroys the requested Todo
 * @param {*} ctx 
 */
async function destroy(ctx) {
  // Get id from url params and find Todo in db
  const id = ctx.params.id
  const deletedTodo = await Todo.findByIdAndDelete(id)
  ctx.body = deletedTodo
}

/**
 * Toggles done field for the requested Todo
 * @param {*} ctx 
 */
async function update(ctx) {
  // Find Todo and toggle done
  const id = ctx.params.id
  const todo = await Todo.findById(id)
  todo.done = !todo.done

  // Save the updated Todo and return it
  const updatedTodo = await todo.save()
  ctx.body = updatedTodo
}

module.exports = {
  findAll,
  create,
  destroy,
  update
}