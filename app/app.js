'use strict';

/**
 * @ngdoc overview
 * @name projetobrasil.dados
 * @description
 * # projetobrasil.dados
 *
 * Main module of the application.
 */
angular
  .module('projetobrasil.dados', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'projetobrasil.dados.main',
    'projetobrasil.dados.root',
    'projetobrasil.dados.candidatos',
    'projetobrasil.dados.propostas'
  ])
  .config(function($urlRouterProvider){
    $urlRouterProvider.otherwise('/');
  });
