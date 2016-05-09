
     "use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("tag", {
    Name: DataTypes.STRING,
    Uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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