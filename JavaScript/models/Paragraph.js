"use strict";

module.exports = function(sequelize, DataTypes) {
  var Paragraph = sequelize.define("paragraph", {
    bodyHtml: DataTypes.TEXT,
    ParagraphID: DataTypes.INTEGER
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