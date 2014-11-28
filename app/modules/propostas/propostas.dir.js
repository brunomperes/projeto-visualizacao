'use strict';

angular.module('projetobrasil.dados.propostas.directives', [])
  .directive('propostasDirective', [function() {
    return {
      restrict: 'E',
      controller: 'PropostasDirCtrl',
      templateUrl: 'modules/propostas/propostas.html'
    };
  }]);
