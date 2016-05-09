"use strict";

module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("question", {
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
        
        Question.hasMany(models.tag2any, {
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