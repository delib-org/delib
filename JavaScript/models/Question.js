"use strict";

module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("question", {
     title: Sequelize.STRING,
    body: Sequelize.TEXT,
    discussionID: Sequelize.INTEGER,
    userID: Sequelize.INTEGER,
    uuid: {
        type: Sequelize.INTEGER,
      validate: {
        isUuid: true
      }
    }
    // Uncomm. and fill in <<type>> when defined
    //stateofVisual: Sequelize.<<type>>
  }, {
    classMethods: {
      associate: function(models) {
        Question.belongsTo(models.Issue, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        }
          Question.hasMany(models.Option, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Question;
};