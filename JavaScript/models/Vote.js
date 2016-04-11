"use strict";

module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("vote", {
    VoteID: {
      type: DataTypes.UUID,
      primaryKey: true,
      validate: {
        isUUID: true
      }
    },git
    entityID: DataTypes.INTEGER,
    entity: DataTypes.TEXT,
    value: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        Vote.hasMany(models.tag2vote, {
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