define([
     'angular',
     'ngRoute',
     'resource',
     './controllers/index'/*,
     './constants/index',
     './directives/index',
     './filters/index',
     './services/index'*/
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ngRoute',
        'app.controllers'/*,
        'app.constants',
        'app.directives',
        'app.filters',
         'app.services'*/
    ]);
});


