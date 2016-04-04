/**
 * Created by kido on 03/04/16.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("role", {
        roleUuid: {
            type: Sequelize.UUID,
            primaryKey: true,
            validate: {
                isUUID: true
            },
            autoIncrement: true
        },
        roleType:{
            type: Sequelize.STRING,
            validate: {
            isIn: [[editor, owner]]
            // insert further roles when needed}
        }
    }
    }, {
        classMethods: {
            associate: function(models) {
                Role.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });

                Role.belongsTo(models.Group, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Permission;
}