const express = require('express')
const app = express()
const mongoose = require("./config/db")
const Todos = require("./model/todos")

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("db connected succesfully ")
});

app.listen(5000, () => {
    console.log("server connected to localhost")
})
app.use(express.json())

app.post("/add", (req, res) => {
    console.log("This is add request");
    console.log("request.body", req.body)
    const todo = new Todos(req.body)

    todo.save()
    .then(() => res.send("todo inserted succesdully"))
    .catch(e => res.send("e", e.message))

})

app.use("/fetchTodos", (req, res) => {
    console.log("this is fetchtodos request")
    Todos.find({})
    .then(result => res.send(result))
    .catch(e => res.send(e.message))
})

app.delete("/deleteTodo", (req, res) => {
    console.log("this is delete Todo request")
    Todos.deleteOne({_id : req.body.id})
    .then(() => res.send("todo deleted successfully"))
    .catch(e => res.send(e.message))
})

app.put("/updateTodo", (req, res) => {
    console.log("this is update Todo request")
    Todos.updateOne({_id : req.body.id}, { $set : { todo : req.body.updatedTodo } })
    .then(() => res.send("todo updated successfully"))
    .catch(e => res.send(e.message))
})

