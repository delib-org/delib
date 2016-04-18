
     "use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("tag", {
    Name: DataTypes.STRING,
    tagUuid: {
        type: DataTypes.UUID,
        primaryKey: true,
        validate: {
            isUUID: true
        }
    }
}, {
    classMethods: {
      associate: function(models) {
        Tag.hasMany(models.tag2any, {
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