
     "use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("tag", {
      Name: DataTypes.STRING,
    TagID: DataTypes.INTEGER
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