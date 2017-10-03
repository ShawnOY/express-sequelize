'use strict';

module.exports = (sequelize, DataTypes) => {
  const Master = sequelize.define('Master', {
    name: DataTypes.STRING(20)
  })

  Master.associate = models => {
    Master.hasMany(models.Pet)
  }

  return Master;
}
