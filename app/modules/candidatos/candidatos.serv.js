'use strict';

angular.module('projetobrasil.dados.candidatos.services', [])
.factory('candidatosServ', ['$http', function($http){

  var candidatosService = {
    eduardo: [
    [
      //Teste Cego
      {axis:'Democracia e Reforma Política', value:  3.50},
      {axis:'Desenvolvimento Econômico', value:  3.43},
      {axis:'Direitos Humanos e Inclusão social', value: 3.52},
      {axis:'Educação', value:  4.00},
      {axis:'Gestão Pública', value:  3.72},
      {axis:'Infraestrutura', value:  3.63},
      {axis:'Liberdades civis', value:  3.30},
      {axis:'Meio-ambiente', value: 3.15},
      {axis:'Outros', value:  3.62},
      {axis:'Política Econômica', value:  3.37},
      {axis:'Política Externa e Defesa Nacional', value: 3.03},
      {axis:'Segurança Pública', value: 3.18},
      {axis:'Políticas Sociais', value:  3.34},
      {axis:'Saúde', value:  3.65},
      {axis:'Segurança Pública', value: 3.18}
    ]],
    eduardoComTesteCego: [
    [
      //Comparativo
      {axis:'Democracia e Reforma Política', value: 4.57},
      {axis:'Desenvolvimento Econômico', value: 3.92},
      {axis:'Direitos Humanos e Inclusão social', value:4.41},
      {axis:'Educação', value: 4.68},
      {axis:'Gestão Pública', value: 4.70},
      {axis:'Infraestrutura', value: 4.56},
      {axis:'Liberdades civis', value: 4.62},
      {axis:'Meio-ambiente', value:4.53},
      {axis:'Outros', value: 4.49},
      {axis:'Política Econômica', value: 4.51},
      {axis:'Política Externa e Defesa Nacional', value:4.11},
      {axis:'Segurança Pública', value:4.28},
      {axis:'Saúde', value: 4.54},
      {axis:'Segurança Pública', value:4.28}
    ],
    [
      //Teste Cego
      {axis:'Democracia e Reforma Política', value:  3.50},
      {axis:'Desenvolvimento Econômico', value:  3.43},
      {axis:'Direitos Humanos e Inclusão social', value: 3.52},
      {axis:'Educação', value:  4.00},
      {axis:'Gestão Pública', value:  3.72},
      {axis:'Infraestrutura', value:  3.63},
      {axis:'Liberdades civis', value:  3.30},
      {axis:'Meio-ambiente', value: 3.15},
      {axis:'Outros', value:  3.62},
      {axis:'Política Econômica', value:  3.37},
      {axis:'Política Externa e Defesa Nacional', value: 3.03},
      {axis:'Segurança Pública', value: 3.18},
      {axis:'Saúde', value:  3.65},
      {axis:'Segurança Pública', value: 3.18}
    ]],
    propostas: {}
  };

  candidatosService.carregaPropostas = function(callback){
    $http.get('modules/candidatos/propostas.json')
     .then(function(res){
        candidatosService.propostas = res.data;
        extraiPropostas();
        callback();
      });
  };

  function extraiPropostas(){
    for (var i = candidatosService.propostas.length - 1; i >= 0; i--) {
      if (candidatosService.propostas[i].politicians_id == 'Eduardo Jorge'){
        candidatosService.eduardo.propostas.push(candidatosService.propostas[i]);
        if (candidatosService.propostas[i].tema == 'Meio ambiente'){
          candidatosService.eduardo.meioAmbiente = {};
        }
      }
    }
  }

  return candidatosService;
}]);
