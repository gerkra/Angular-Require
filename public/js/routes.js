define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/employees', {
            controller: 'EmployeesController',
            templateUrl: '../templates/employee.html',
            reloadOnSearch: false
        }).otherwise({
            redirectTo: '/employees'
        });

    }]).run(['$rootScope', '$location', function ($rootScope, $location) {

    }]);
});
