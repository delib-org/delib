//
//
//
// NOTE: this router has its Handler Functions APART of its HTTP-METHODS definitions,
// all handler function is being stored inside "/JavaScript/handlers".
// Each router has its own Handler Functions .JS file, and each .JS file
// exports (module.exports) a JSON contains all the relevant Handler Functions as properties.
//
// Out of modulation considerations:
// Though each handler function is USUALLY correlating with a *specific* HTTP-METHOD definition,
// each handler function can be re-used (with care) and re-arranged at any fashion if needed.
//
//              PLEASE COPY THIS SECTION TO ANY NEW ROUTER FILE CREATED.

"use strict";

var express = require('express');
var groupsRouter  = express.Router();
var groupsHandlers = require('../handlers/groupsHandlers');


groupsRouter.get('/public', groupsHandlers.get_public_groups_list);

groupsRouter.get('/member', groupsHandlers.get_groups_list_i_belong_to);

groupsRouter.get('/manage', groupsHandlers.get_groups_list_i_manage);

module.exports = {
    actualRouter: groupsRouter,
    routerPath: '/groups',
    Name: "groupRouter"
};