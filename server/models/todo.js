module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todo', {
    text: DataTypes.STRING,
  });
  Todo.sync();
  return Todo;
}
