"use strict";

var models  = require('../models/index');

module.exports =
{
    get_public_groups_list: function (req, res) {
        var groupsArr= [];
        
        models.group.findAll({
            attributes:['groupUuid','title','description', 'image'] })
            .then(function (result) {
                result.forEach(function(group, index) {
                    groupsArr[index] = group;
                });
            });

        res.send(groupsArr);
},
    get_groups_list_i_belong_to: function (req, res) {
        var userOfGroupsArr= [];

        models.role
            .findAll({
                attributes:['groupUuid','title','description', 'image'],
            where: {
                userUuid: req.params.userUid,
                roleType: 'user'
            },
            limit: 100 })
            .then(function (result) {
                result.forEach(function(group, index) {
                    userOfGroupsArr[index] = group;
                });
            });

        res.send(userOfGroupsArr);
    },
    get_groups_list_i_manage: function(req, res){
        var ownerOfGroupsArr= [];

        models.role
            .findAll({
                attributes:['groupUuid','title','description', 'image'],
                where: {
                    userUuid: req.params.userUid,
                    roleType: 'owner'
                },
                limit: 100 })
            .then(function (result) {
                result.forEach(function(group, index) {
                    ownerOfGroupsArr[index] = group;
                });
            });

        res.send(ownerOfGroupsArr);
    }
};