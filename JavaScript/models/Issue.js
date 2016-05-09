"use strict";

module.exports = function(sequelize, DataTypes) {
  var Issue = sequelize.define("issue", {
      Uuid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          validate: {
              isUUID: true
          }
      },
      title: DataTypes.STRING,
      coverPhoto: {
          type: DataTypes.STRING,
          validate: {
              isUrl: true
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

          Issue.hasMany(models.tag2any, {
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