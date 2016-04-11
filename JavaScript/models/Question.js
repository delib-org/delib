"use strict";

module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("question", {
     title: DataTypes.STRING,
    body: DataTypes.TEXT,
    discussionID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      validate: {
        isUUID: true
      }
    }
    // Uncomm. and fill in <<type>> when defined
    //stateofVisual: DataTypes.<<type>>
  }, {
    classMethods: {
      associate: function(models) {
        Question.belongsTo(models.issue, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
          Question.hasMany(models.option, {
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