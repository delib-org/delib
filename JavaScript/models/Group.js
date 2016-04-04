"use strict";

module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("group", {
    topic: Sequelize.STRING,
    owner: Sequelize.STRING,
    coverPhoto: {
        type: Sequelize.STRING,
        validate:{
          isUrl: true
        }
    },
    titleBody: Sequelize.TEXT,
    uuid: {
        type: Sequelize.INTEGER,
        validate: {
          isUuid: true
        }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Group.hasMany(models.Role, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        Group.hasMany(models.Issue, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
        }
      }
    });
  return Group;
}