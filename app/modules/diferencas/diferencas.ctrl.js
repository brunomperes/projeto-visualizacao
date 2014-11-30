'use strict';

/**
 * @ngdoc function
 * @name projetobrasil.dados.modules.controller:diferencasCtrl
 * @description
 * # diferencasCtrl
 * Controller of the projetobrasil.dados.diferencas
 */
angular.module('projetobrasil.dados.diferencas.controllers', [])
  .controller('DiferencasCtrl', ['$stateParams', '$scope', 'diferencasServ', function ($stateParams, $scope, diferencasServ) {

    var abrevCandidato = 'dilma';
    if ($stateParams.candidato){
      abrevCandidato = $stateParams.candidato;
    }
  	$scope.nomeCandidato = abrevCandidato;
    $scope.candidato = diferencasServ[abrevCandidato];

    $scope.temas = diferencasServ.temas;
    $scope.nomes = diferencasServ.nomesCandidatos;
  }]);
