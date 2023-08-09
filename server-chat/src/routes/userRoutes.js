const { graphqlHTTP } = require('express-graphql');
const userSchema = require('../schemas/userSchema');
const userController = require('../controllers/userController');

const root = {
  createUser: userController.createUser,
  login: userController.login,
  getUserById: userController.getUserById,
};

module.exports = (app) => {
  app.use('/graphql', graphqlHTTP({ schema: userSchema, rootValue: root, graphiql: true }));
};
