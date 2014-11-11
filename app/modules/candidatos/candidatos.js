'use strict';

angular
  .module('projetobrasil.dados.candidatos', [
    'projetobrasil.dados.candidatos.controllers',
    'projetobrasil.dados.candidatos.services',
    'projetobrasil.dados.candidatos.directives'
  ])
  .config(function($stateProvider){
    $stateProvider
      .state('candidatos', {
        url: '/candidatos',
        parent: 'root',
        views: {
          '@': {
              templateUrl: 'modules/candidatos/candidatos.html',
              controller: 'CandidatosCtrl',
          }
        }
      });
  });
