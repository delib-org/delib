/**
 * Created by kido on 03/04/16.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("role", {
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            validate: {
                isUUID: true
            }
        },
        roleType:{
            type: DataTypes.STRING,
            validate: {
            isIn: [['editor', 'owner']]
            // insert further roles when needed
        }
    }
    }, {
        classMethods: {
            associate: function(models) {
                Role.belongsTo(models.user, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });

                Role.belongsTo(models.group, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Role;
}