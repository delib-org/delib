"use strict";

module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("vote", {
    Uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      validate: {
        isUUID: true
      }
    },
    entityUuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: true
      }
    },
    entity: DataTypes.TEXT,
    value: DataTypes.FLOAT
  });
  // , {
  //   classMethods: {
  //     associate: function(models) {
  //       Vote.hasMany(models.tag2any, {
  //         onDelete: "CASCADE",
  //         foreignKey: {
  //           allowNull: false
  //         }
  //       });
  //     }
  //   }
  // });
  // !!! FOR LATER USE !!!

  return Vote;
};