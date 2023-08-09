const jwt = require('jsonwebtoken');
const secret = 'your_secret_key';

const generateToken = (user) => {
  const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded.id;
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
