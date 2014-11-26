'use strict';

angular
  .module('projetobrasil.dados.generic', [
    'projetobrasil.dados.generic.controllers',
    'projetobrasil.dados.generic.services',
    'projetobrasil.dados.generic.directives'
  ])
  .config(function($stateProvider){
    $stateProvider
      .state('generic', {
        url: '/generic',
        templateUrl: 'modules/generic/generic.html',
        controller: 'GenericCtrl'
      });
  });
