'use strict';

angular
  .module('projetobrasil.dados.diferencas', [
    'projetobrasil.dados.diferencas.controllers',
    'projetobrasil.dados.diferencas.services',
    'projetobrasil.dados.diferencas.directives'
  ])
  .config(function($stateProvider){
    $stateProvider
      .state('diferencas', {
        url: '/diferencas',
        parent: 'root',
        views: {
          '@': {
              templateUrl: 'modules/diferencas/diferencas.html',
              controller: 'DiferencasCtrl',
          }
        }
      });
  });
