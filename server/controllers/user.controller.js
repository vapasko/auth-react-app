const UUID = require('uuid')
const db = require('../database/db')

const userId = UUID.v4()

class UserController {
  async setUser(req, res) {

    const {name, surname} = req.body;
    const user = await db.query(`INSERT INTO users (id, name, surname) values($1, $2, $3) RETURNING *`, [userId, name, surname])

    if(!name || !surname) {
      res.status(400).json({ status: "error", message: "Bad request" })
    }

    res.status(200).json(user.rows[0])
  }

  async getAllUsers(req, res) {

    const users = await db.query(`SELECT * FROM users`)

    if(users.rows.length == 0) {
      res.status(200).json({ message: "In database not found users" })
    }

    res.status(200).json(users.rows)

  }

  async getOneUser(req, res) {
    const id = req.params.id
    const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id])

    res.status(200).json(user.rows[0])
  }

  async putAllUsers(req, res) {
    const { id, name, surname } = req.body
    const users = await db.query(`UPDATE users SET name = $1, surname = $2 WHERE id = $3 RETURNING *`, [name, surname, id])

    res.status(200).json(users.rows[0])
  }

  async deleteUser(req, res) {
    const id = req.params.id
    const user = await db.query(`DELETE FROM users WHERE id = $1`, [id])

    res.status(200).json({ message: "user has been delete" })
  }
}

module.exports = new UserController()