'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progress extends Model {
    static associate(models) {
      // not sure if this should be 'hasOne' instead of 'belongsTo'
      Progress.belongsTo(models.Profile, { foreignKey: 'profile' })
      Progress.belongsTo(models.Level, { foreignKey: 'level' })
    }
  }
  Progress.init({
    profile: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    levelCompleted: DataTypes.BOOLEAN,
    exercisesCompleted: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Progress',
  });
  return Progress;
};