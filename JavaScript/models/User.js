"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nickName: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        isEmail: true,
        notEmpty: true
    },
      //hashed pass. needs further upgrades
    hashedPassword: DataTypes.STRING,
    language: DataTypes.STRING,
    fbID: DataTypes.STRING,
    fbToken: DataTypes.STRING,
    fbProfileImageURL: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
    },
    joinDate: {
        type: DataTypes.DATE,
        validate: {
           isDate: true
        }
    }
    }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.role, {
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