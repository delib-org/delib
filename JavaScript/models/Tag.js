
     "use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("tag", {
      Name: DataTypes.STRING,
    TagID: DataTypes.INTEGER
}, {
    classMethods: {
      associate: function(models) {
        Tag.hasMany(models.tag2vote, {
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