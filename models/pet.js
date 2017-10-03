'use strict'

module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING(20),
    MasterId: DataTypes.INTEGER
  })

  Pet.associate = models => {
    Pet.belongsTo(models.Master)
  }

  return Pet
}
