"use strict";

module.exports = function(sequelize, DataTypes) {
  var Paragraph = sequelize.define("paragraph", {
    paragraphUuid: {
      type: DataTypes.UUID,
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