'use strict';

/**
 * @ngdoc function
 * @name projetobrasil.dados.modules.controller:temasCtrl
 * @description
 * # temasCtrl
 * Controller of the projetobrasil.dados.temas
 */
angular.module('projetobrasil.dados.temas.controllers', [])
  .controller('TemasCtrl', ['$scope', 'temasServ', function ($scope, temasServ) {
    $scope.temas = temasServ.temas;
  }]);
