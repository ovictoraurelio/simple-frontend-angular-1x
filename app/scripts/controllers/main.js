
(function () {

    'use strict';

    /**
     * @ngdoc function
     * @author Victor Aurélio     
     * @name victorAurelioApp.controller:MainCtrl
     * @description
     * # MainCtrl
     *
     * Controller
     *
     */
    angular.module('victorAurelioApp').controller('MainCtrl', ['$scope', '$window', function($scope, $window){
        $scope.hgt = $window.innerHeight - 24;

    }]);
}());