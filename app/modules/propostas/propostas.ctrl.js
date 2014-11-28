'use strict';

/**
 * @ngdoc function
 * @name projetobrasil.dados.modules.controller:propostasCtrl
 * @description
 * # propostasCtrl
 * Controller of the projetobrasil.dados.propostas
 */
angular.module('projetobrasil.dados.propostas.controllers', [])
  .controller('PropostasCtrl', ['$scope', 'propostasServ', function ($scope, propostasServ) {
    $scope.propostas = propostasServ.propostas;
  }]);
