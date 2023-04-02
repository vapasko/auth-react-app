const UUID = require('uuid')
const users = require('../models/users.model')

const userId = UUID.v4()

class UserController {
    async setUser(req, res) {

        const {name, surname} = req.body;
        const user = await users.create({ id: userId, name: name, surname: surname })
        //const user = await db.query(`INSERT INTO users (id, name, surname) values($1, $2, $3) RETURNING *`, [userId, name, surname])

        if (!name || !surname) {
            res.status(400).json({status: "error", message: "Bad request"})
        }

        res.status(200).json(user)
    }


    async getAllUsers(req, res) {

        const foundAllUsers = await users.findAll()
        //const users = await db.query(`SELECT * FROM users`)

        if (foundAllUsers.length === 0) {
            res.status(200).json({message: "In database not found users"})
        }

        res.status(200).json(foundAllUsers)

    }

    async getOneUser(req, res) {
        const reqId = req.params.id
        const user = await users.findOne({ where: { id: reqId } })

        //const user = await db.query(`SELECT * FROM users WHERE id = $1`, [id])

        res.status(200).json(user)
    }

    async putAllUsers(req, res) {
        const {id, name, surname} = req.body
        await users.update({ name: name, surname: surname }, {
            where: {
                id: id
            }
        })

        //const users = await db.query(`UPDATE users SET name = $1, surname = $2 WHERE id = $3 RETURNING *`, [name, surname, id])

        res.status(200).json({ message: "user is updated" })
    }

    async deleteUser(req, res) {
        const reqId = req.params.id

        await users.destroy({ where: { id: reqId }})

        //const user = await db.query(`DELETE FROM users WHERE id = $1`, [id])

        res.status(200).json({message: "user has been delete"})
    }
}

module.exports = new UserController()