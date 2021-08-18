const Sequelize = require('sequelize')
const db = require('../db')

const Pose = db.define('pose', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  positions: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Pose
