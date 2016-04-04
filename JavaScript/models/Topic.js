"use strict";

module.exports = function(sequelize, DataTypes) {
  var Issue = sequelize.define("topic", {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    nickName: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        },
        notEmpty: true
    },
    hashedPassword: Sequelize.STRING,
    language: Sequelize.STRING,
    fbID: Sequelize.STRING,
    fbToken: Sequelize.STRING,
    fbProfileImageURL: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true
        }
    },
    joinDate: {
        type: Sequelize.DATE,
        validate: {
            isDate: true
        }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Issue.belongsTo(models.Group, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          });
        Issue.hasMany(models.Question, {
            onDelete: "CASCADE",
            foreignKey: {
            allowNull: false
            }
          });
        }    
    }
  });

  return Issue;
};