'use strict';

/**
 * @ngdoc function
 * @name projetobrasil.dados.modules.controller:GenericCtrl
 * @description
 * # GenericCtrl
 * Controller of the projetobrasil.dados.candidatos
 */
angular.module('projetobrasil.dados.candidatos.controllers', [])
  .controller('CandidatosCtrl', ['$scope', 'candidatosServ', function ($scope, candidatosServ) {

    // $scope.candidatos = {};
    // candidatosServ.carregaDados(function(dados){
      // console.log(dados);
      $scope.candidatos = candidatosServ.medias;
      $scope.comparativo = candidatosServ.comparativo;
    // });

  }]);
