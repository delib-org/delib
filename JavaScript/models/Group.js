"use strict";

module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("group", {
    groupUuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      validate: {
        isUUID: true
      }
    },
    owner: DataTypes.STRING,
    topic: DataTypes.STRING,
    titleBody: DataTypes.TEXT,
    coverPhoto: {
      type: DataTypes.STRING,
      validate:{
        isUrl: true
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

        Group.hasMany(models.tag2any, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
        
        Group.hasMany(models.role, {
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