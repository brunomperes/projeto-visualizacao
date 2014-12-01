'use strict';

angular
  .module('projetobrasil.dados.temas', [
    'projetobrasil.dados.temas.controllers',
    'projetobrasil.dados.temas.services',
    'projetobrasil.dados.temas.directives'
  ])
  .config(function($stateProvider){
    $stateProvider
      .state('temas', {
        url: '/temas',
        parent: 'root',
        views: {
          '@': {
              templateUrl: 'modules/temas/temas.html',
              controller: 'TemasCtrl',
          }
        }
      });
  });
