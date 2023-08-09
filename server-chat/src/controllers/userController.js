const User = require('../models/User');
const { generateToken } = require('../utils/auth');

const userController = {
  createUser: async ({ input }) => {
    const { username, email, password } = input;
    const userId = await User.createUser(username, email, password);
    const user = await User.getUserById(userId);
    const token = generateToken(user);
    return { token, user };
  },

  login: async ({ email, password }) => {
    const user = await User.getUserByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }
    const token = generateToken(user);
    return { token, user };
  },

  getUserById: async ({ id }) => {
    return await User.getUserById(id);
  },
};

module.exports = userController;
