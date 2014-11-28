'use strict';

/**
 * @ngdoc function
 * @name projetobrasil.dados.modules.controller:diferencasCtrl
 * @description
 * # diferencasCtrl
 * Controller of the projetobrasil.dados.diferencas
 */
angular.module('projetobrasil.dados.diferencas.controllers', [])
  .controller('DiferencasCtrl', ['$scope', 'diferencasServ', function ($scope, diferencasServ) {
  	
  	$scope.nomeCandidato = 'eduardo';
    $scope.candidato = diferencasServ.eduardo;

    $scope.temas = diferencasServ.temas;
    $scope.nomes = diferencasServ.nomesCandidatos;
  }]);
