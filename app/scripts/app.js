(function () {

'use strict';

/**
 * @ngdoc overview
 * @name victorAurelioApp
 * @description
 * # victorAurelioApp
 *
 * Main module of the application.
 */

angular.module('victorAurelioApp', [
  'ngRoute'
]).config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/', {
        templateUrl: 'views/main.html', controller: 'MainCtrl'
    }).when('/login', {
        templateUrl: 'views/login.html', controller: 'LoginCtrl'
    }).otherwise({
        redirectTo: '/'
    });
}]);

}());