"use strict";

module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("vote", {
    VoteID: DataTypes.INTEGER,
    entityID: DataTypes.INTEGER,
    entity: DataTypes.TEXT,
    value: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        Vote.belongsTo(models.Vote, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Vote;
};