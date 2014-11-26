'use strict';

/**
 * @ngdoc function
 * @name projetobrasil.dados.modules.controller:GenericCtrl
 * @description
 * # GenericCtrl
 * Controller of the projetobrasil.dados.generic
 */
angular.module('projetobrasil.dados.generic.controllers', [])
  .controller('GenericCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
