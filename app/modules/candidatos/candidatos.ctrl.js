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

    $scope.candidatos = candidatosServ.medias;
    $scope.comparativo = candidatosServ.comparativo;
    $scope.testeCego = candidatosServ.testeCego;

    $scope.$watch('candidatos', function (newVal) {
      candidatosServ.extraiDadosPorAvaliacao();
    }, true);

  }]);
