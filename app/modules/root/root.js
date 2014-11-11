'use strict';

angular
  .module('projetobrasil.dados.root', [
    'projetobrasil.dados.root.controllers'
  ])
  .config(function($stateProvider){
    $stateProvider
      .state('root', {
        abstract: true,
        views: {
          '@': {

          },
          'navbar@': { templateUrl: 'modules/root/navbar.html', controller: 'NavbarCtrl' }
        }
      });
  });
