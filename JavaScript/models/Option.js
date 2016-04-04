"use strict";

module.exports = function(sequelize, DataTypes) {
  var Option = sequelize.define("option", {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
    questionID: Sequelize.INTEGER
}, {
    classMethods: {
      associate: function(models) {
        Option.belongsTo(models.Question, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          });
        Option.hasMany(models.Paragraph, {
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