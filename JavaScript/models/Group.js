"use strict";

module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define("group", {
    Uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      validate: {
        isUUID: true
      }
    },
    owner: DataTypes.STRING,
    title: DataTypes.STRING,
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