"use strict";

module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("vote", {
    voteUuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      validate: {
        isUUID: true
      }
    },
    entityUuid: {
      type: DataTypes.UUID,
      validate: {
        isUUID: true
      }
    },
    entity: DataTypes.TEXT,
    value: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        Vote.hasMany(models.tag2any, {
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