const {Sequelize, DataTypes} = require("sequelize")
const sequelize = new Sequelize(process.env.DB_URI)


const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    },
    surname: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'users',
    createdAt: false,
    updatedAt: false
})

module.exports = User