"use strict";

module.exports = function(sequelize, DataTypes) {
  var Option = sequelize.define("option", {
    Uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      validate: {
        isUUID: true
      }
    },
    title: DataTypes.STRING,
    body: DataTypes.TEXT
}, {
    classMethods: {
      associate: function(models) {
        Option.belongsTo(models.question, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
        
        Option.hasMany(models.paragraph, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });

        Option.hasMany(models.tag2any, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Option;
};