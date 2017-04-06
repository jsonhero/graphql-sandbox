const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

const schema = buildSchema(`
  type User {
    name: String
    sayGreeting(name: String): String
  }

  type Query {
    hello: String
    getUser: User
  }
`);

class User {
  constructor(name) {
    this.name = name;
  }

  sayGreeting({ name }) {
    return `${this.name} says hello to ${name}`;
  }
}

const root = { 
  hello: () => 'Hello world!',
  getUser: () => new User('jason'),
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
