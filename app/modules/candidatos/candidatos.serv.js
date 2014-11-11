'use strict';

angular.module('projetobrasil.dados.candidatos.services', [])
.factory('candidatosServ', ['$http', function($http){

  var candidatosService = {
    eduardo:
    [
      [
        //Comparativo
        {axis:'Democracia e Reforma Política', value: 4.57},
        {axis:'Desenvolvimento Econômico', value: 3.92},
        {axis:'Direitos Humanos e Inclusão social', value: 4.41},
        {axis:'Educação', value: 4.68},
        {axis:'Gestão Pública', value: 4.7},
        {axis:'Infraestrutura', value: 4.56},
        {axis:'Liberdades civis', value: 4.62},
        {axis:'Meio-ambiente', value: 4.53},
        {axis:'Outros', value: 4.49},
        {axis:'Política Econômica', value: 4.51},
        {axis:'Política Externa e Defesa Nacional', value: 4.11},
        {axis:'Segurança Pública', value: 4.28},
        {axis:'Saúde', value: 4.54},
        {axis:'Segurança Pública', value: 4.28},

      ],
      [
        //Teste Cego
        {axis:'Democracia e Reforma Política', value: 3.5},
        {axis:'Desenvolvimento Econômico', value: 3.43},
        {axis:'Direitos Humanos e Inclusão social', value: 3.52},
        {axis:'Educação', value: 4},
        {axis:'Gestão Pública', value: 3.72},
        {axis:'Infraestrutura', value: 3.63},
        {axis:'Liberdades civis', value: 3.3},
        {axis:'Meio-ambiente', value: 3.15},
        {axis:'Outros', value: 3.62},
        {axis:'Política Econômica', value: 3.37},
        {axis:'Política Externa e Defesa Nacional', value: 3.03},
        {axis:'Segurança Pública', value: 3.18},
        {axis:'Saúde', value: 3.65},
        {axis:'Segurança Pública', value: 3.18},

      ]
    ],
    dilma:
    [
      [
        {axis:'Cultura e Turismo', value: 3.23},
        {axis:'Democracia e Reforma Política', value: 3.85},
        {axis:'Desenvolvimento Econômico', value: 3.83},
        {axis:'Direitos Humanos e Inclusão social', value: 4.18},
        {axis:'Educação', value: 4.45},
        {axis:'Esporte e lazer', value: 3.37},
        {axis:'Gestão Pública', value: 3.96},
        {axis:'Infraestrutura', value: 3.99},
        {axis:'Meio-ambiente', value: 3.42},
        {axis:'Política Econômica', value: 2.91},
        {axis:'Política Externa e Defesa Nacional', value: 3.84},
        {axis:'Segurança Pública', value: 2.73},
        {axis:'Políticas Sociais', value: 4.26},
        {axis:'Saúde', value: 3.94},
        {axis:'Segurança Pública', value: 2.73},

      ],
      [
        {axis:'Cultura e Turismo', value: 3.58},
        {axis:'Democracia e Reforma Política', value: 3.99},
        {axis:'Desenvolvimento Econômico', value: 3.78},
        {axis:'Direitos Humanos e Inclusão social', value: 3.42},
        {axis:'Educação', value: 4.01},
        {axis:'Esporte e lazer', value: 3.11},
        {axis:'Gestão Pública', value: 3.89},
        {axis:'Infraestrutura', value: 3.97},
        {axis:'Meio-ambiente', value: 3.64},
        {axis:'Política Econômica', value: 3.92},
        {axis:'Política Externa e Defesa Nacional', value: 3.43},
        {axis:'Segurança Pública', value: 3.72},
        {axis:'Políticas Sociais', value: 3.4},
        {axis:'Saúde', value: 3.98},
        {axis:'Segurança Pública', value: 3.72},
      ]
    ],
    marina:
    [
      [
        {axis:'Cultura e Turismo', value: 3.88},
        {axis:'Democracia e Reforma Política', value: 3.87},
        {axis:'Desenvolvimento Econômico', value: 3.99},
        {axis:'Direitos Humanos e Inclusão social', value: 3.56},
        {axis:'Educação', value: 4.26},
        {axis:'Gestão Pública', value: 4.13},
        {axis:'Infraestrutura', value: 4.11},
        {axis:'Meio-ambiente', value: 4.41},
        {axis:'Outros', value: 4},
        {axis:'Política Econômica', value: 3.67},
        {axis:'Política Externa e Defesa Nacional', value: 3.87},
        {axis:'Segurança Pública', value: 3.94},
        {axis:'Políticas Sociais', value: 3.97},
        {axis:'Saúde', value: 4.02},
        {axis:'Segurança Pública', value: 3.94},
      ],
      [
        {axis:'Cultura e Turismo', value: 3.52},
        {axis:'Democracia e Reforma Política', value: 3.45},
        {axis:'Desenvolvimento Econômico', value: 3.67},
        {axis:'Direitos Humanos e Inclusão social', value: 3.36},
        {axis:'Educação', value: 3.91},
        {axis:'Gestão Pública', value: 3.44},
        {axis:'Infraestrutura', value: 3.93},
        {axis:'Meio-ambiente', value: 3.79},
        {axis:'Outros', value: 3.54},
        {axis:'Política Econômica', value: 3.79},
        {axis:'Política Externa e Defesa Nacional', value: 3.28},
        {axis:'Segurança Pública', value: 3.59},
        {axis:'Políticas Sociais', value: 3.68},
        {axis:'Saúde', value: 3.75},
        {axis:'Segurança Pública', value: 3.59},
      ]
    ],
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
