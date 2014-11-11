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

    $scope.eduardoJorge = candidatosServ.eduardo;
    $scope.eduardoJorge2 = candidatosServ.eduardoComTesteCego;

  }]);
