'use strict';

angular
  .module('projetobrasil.dados.root', [
  ])
  .config(function($stateProvider){
    $stateProvider
      .state('root', {
        abstract: true,
        views: {
          '@': {

          },
          'navbar@': { templateUrl: 'modules/root/navbar.html' }
        }
      });
  });
