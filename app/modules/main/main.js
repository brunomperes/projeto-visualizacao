'use strict';

angular
  .module('projetobrasil.dados.main', [
    'projetobrasil.dados.main.controllers',
    'projetobrasil.dados.main.directives'
  ])
  .config(function($stateProvider){
    $stateProvider
      .state('main', {
        url: '/',
        parent: 'root',
        views: {
          '@': {
              templateUrl: 'modules/main/main.html',
              controller: 'MainCtrl',
          }
        }
      });
  });
