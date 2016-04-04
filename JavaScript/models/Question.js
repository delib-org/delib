"use strict";

module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("question", {
     title: DataTypes.STRING,
    body: DataTypes.TEXT,
    discussionID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    uuid: {
        type: DataTypes.INTEGER,
      validate: {
        isUuid: true
      }
    }
    // Uncomm. and fill in <<type>> when defined
    //stateofVisual: DataTypes.<<type>>
  }, {
    classMethods: {
      associate: function(models) {
        Question.belongsTo(models.Issue, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
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