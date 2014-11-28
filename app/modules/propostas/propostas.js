'use strict';

angular
  .module('projetobrasil.dados.propostas', [
    'projetobrasil.dados.propostas.controllers',
    'projetobrasil.dados.propostas.services',
    'projetobrasil.dados.propostas.directives'
  ])
  .config(function($stateProvider){
    $stateProvider
      .state('propostas', {
        url: '/propostas',
        parent: 'root',
        views: {
          '@': {
              templateUrl: 'modules/propostas/propostas.html',
              controller: 'PropostasCtrl',
          }
        }
      });
  });
