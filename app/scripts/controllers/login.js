
(function () {

    'use strict';

    /**
     * @ngdoc function
     * @author Victor Aurélio
     * @name victorAurelioApp.controller:LoginCtrl
     * @description
     * # LoginCtrl
     *
     * Controller
     *
     */
    angular.module('victorAurelioApp').controller('LoginCtrl', ['$scope', '$window', function($scope, $window){
        $scope.hgt = $window.innerHeight - 24;

    }]);
}());