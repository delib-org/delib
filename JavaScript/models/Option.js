"use strict";

module.exports = function(sequelize, DataTypes) {
  var Option = sequelize.define("option", {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    questionID: DataTypes.INTEGER
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
      }
    }
  });

  return Option;
};