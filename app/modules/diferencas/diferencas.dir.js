'use strict';

angular.module('projetobrasil.dados.generic.directives', [])
  .directive('genericDirective', [function() {
    return {
      restrict: 'E',
      controller: 'GenericDirCtrl',
      templateUrl: 'modules/generic/generic.html'
    };
  }]);
