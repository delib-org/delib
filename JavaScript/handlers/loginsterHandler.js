"use strict";

module.exports =
{
    postReg: function (req, res, models, jwt) {
        models.User.create({
            //firstName: req.body.<<input_DOM_ID>>
            hashedPassword:     
        }).then(function () {
            req.session.user = req.body.username;
            res.alert("you have created a session-token and a user");
        });
    },
    getReg: function (req, res, models) {
        models.User.destroy({
            where: {
                id: req.params.user_id
            }
        }).then(function() {
            res.redirect('/');
        });
    }
};
