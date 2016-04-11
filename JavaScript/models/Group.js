"use strict";

module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("group", {
    topic: DataTypes.STRING,
    owner: DataTypes.STRING,
    coverPhoto: {
        type: DataTypes.STRING,
        validate:{
          isUrl: true
        }
    },
    titleBody: DataTypes.TEXT,
    uuid: {
        type: DataTypes.INTEGER,
        validate: {
          isUuid: true
        }
    }
  }, {
    classMethods: { 
      associate: function(models) {
        Group.hasMany(models.role, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        Group.hasMany(models.issue, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
        }
      }
    });
  return Group;
};