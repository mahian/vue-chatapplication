const db = require('../utils/db');

class User {
  async createUser(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING id;
    `;
    const values = [username, email, hashedPassword];
    const result = await db.query(query, values);
    return result.rows[0].id;
  }

  async getUserByEmail(email) {
    const query = `SELECT * FROM users WHERE email = $1;`;
    const result = await db.query(query, [email]);
    return result.rows[0];
  }

  async getUserById(id) {
    const query = `SELECT * FROM users WHERE id = $1;`;
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
}

module.exports = new User();
