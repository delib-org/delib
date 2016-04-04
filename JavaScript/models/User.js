"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    nickName: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        isEmail: true,
        notEmpty: true
    },
      //hashed pass. needs further upgrades
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
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Role, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return User;
};