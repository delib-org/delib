"use strict";

module.exports = function(sequelize, DataTypes) {
  var Paragraph = sequelize.define("paragraph", {
    Uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      validate: {
        isUUID: true
      }
    },
    bodyHtml: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Paragraph.belongsTo(models.option, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Paragraph;
};