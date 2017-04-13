const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');
const models = require('./models');

const schema = buildSchema(`
  type Todo {
    text: String
  }

  input TodoInput {
    text: String
  }

  type Query {
    createTodo(text: String): Todo
    getTodos: [Todo]
  }
`);

class Todo {
  constructor(text) {
    this.name = text;
  }
}

const root = {
  createTodo: (text) => {
    return models.todo.create({}).then((todo) => {
      console.log(todo , 'todo');
      return todo;
    })
  },
  getTodos: () => {
    return models.todo.findAll().then((todos) => {
      console.log(todos , 'todos');
      return todos;
    })
  },
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
