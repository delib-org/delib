"use strict";

module.exports = function(sequelize, DataTypes) {
  var Issue = sequelize.define("issue", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nickName: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        },
        notEmpty: true
    },
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
        Issue.belongsTo(models.group, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        Issue.hasMany(models.question, {
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