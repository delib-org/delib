
     "use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("tag", {
      Name: Sequelize.STRING,
    TagID: Sequelize.INTEGER
}, {
    classMethods: {
      associate: function(models) {
        Tag.belongsTo(models.Tag, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Tag;
};  