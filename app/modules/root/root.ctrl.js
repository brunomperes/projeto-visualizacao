'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('projetobrasil.dados.root.controllers', [])
  .controller('NavbarCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.abaAtiva = function (viewLocation) {
      return viewLocation === $location.path();
    };

  }]);
