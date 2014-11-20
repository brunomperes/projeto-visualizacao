'use strict';

angular.module('projetobrasil.dados.candidatos.services', [])
.factory('candidatosServ', ['$http', function($http){

  var candidatosService = {
    medias: {
      'eduardo':
      [
        [
          {'axis': 'Cultura e Turismo', 'value': 0},
          {'axis': 'Democracia e Reforma Política', 'value': 4.57},
          {'axis': 'Desenvolvimento Econômico', 'value': 3.92},
          {'axis': 'Direitos Humanos e Inclusão social', 'value': 4.41},
          {'axis': 'Educação', 'value': 4.68},
          {'axis': 'Esporte e lazer', 'value': 0},
          {'axis': 'Gestão Pública', 'value': 4.7},
          {'axis': 'Infraestrutura', 'value': 4.56},
          {'axis': 'Liberdades civis', 'value': 4.62},
          {'axis': 'Meio-ambiente', 'value': 4.53},
          {'axis': 'Outros', 'value': 4.49},
          {'axis': 'Política Econômica', 'value': 4.51},
          {'axis': 'Política Externa e Defesa Nacional', 'value': 4.11},
          {'axis': 'Segurança Pública', 'value': 4.28},
          {'axis': 'Polí­ticas Sociais', 'value': 0},
          {'axis': 'Saúde', 'value': 4.54},
          {'axis': 'Segurança Pública', 'value': 4.28},
        ],
        [
          {'axis': 'Cultura e Turismo', 'value': 0},
          {'axis': 'Democracia e Reforma Política', 'value': 3.5},
          {'axis': 'Desenvolvimento Econômico', 'value': 3.43},
          {'axis': 'Direitos Humanos e Inclusão social', 'value': 3.52},
          {'axis': 'Educação', 'value': 4},
          {'axis': 'Esporte e lazer', 'value': 0},
          {'axis': 'Gestão Pública', 'value': 3.72},
          {'axis': 'Infraestrutura', 'value': 3.63},
          {'axis': 'Liberdades civis', 'value': 3.3},
          {'axis': 'Meio-ambiente', 'value': 3.15},
          {'axis': 'Outros', 'value': 3.62},
          {'axis': 'Política Econômica', 'value': 3.37},
          {'axis': 'Política Externa e Defesa Nacional', 'value': 3.03},
          {'axis': 'Segurança Pública', 'value': 3.18},
          {'axis': 'Polí­ticas Sociais', 'value': 0},
          {'axis': 'Saúde', 'value': 3.65},
          {'axis': 'Segurança Pública', 'value': 3.18},
        ]
      ],
      'dilma':
      [
        [
          {'axis': 'Cultura e Turismo', 'value': 3.23},
          {'axis': 'Democracia e Reforma Política', 'value': 3.85},
          {'axis': 'Desenvolvimento Econômico', 'value': 3.83},
          {'axis': 'Direitos Humanos e Inclusão social', 'value': 4.18},
          {'axis': 'Educação', 'value': 4.45},
          {'axis': 'Esporte e lazer', 'value': 3.37},
          {'axis': 'Gestão Pública', 'value': 3.96},
          {'axis': 'Infraestrutura', 'value': 3.99},
          {'axis': 'Liberdades civis', 'value': 0},
          {'axis': 'Meio-ambiente', 'value': 3.42},
          {'axis': 'Outros', 'value': 0},
          {'axis': 'Política Econômica', 'value': 2.91},
          {'axis': 'Política Externa e Defesa Nacional', 'value': 3.84},
          {'axis': 'Segurança Pública', 'value': 2.73},
          {'axis': 'Políticas Sociais', 'value': 4.26},
          {'axis': 'Saúde', 'value': 3.94},
          {'axis': 'Segurança Pública', 'value': 2.73}
        ],
        [
          {'axis': 'Cultura e Turismo', 'value': 3.58},
          {'axis': 'Democracia e Reforma Política', 'value': 3.99},
          {'axis': 'Desenvolvimento Econômico', 'value': 3.78},
          {'axis': 'Direitos Humanos e Inclusão social', 'value': 3.42},
          {'axis': 'Educação', 'value': 4.01},
          {'axis': 'Esporte e lazer', 'value': 3.11},
          {'axis': 'Gestão Pública', 'value': 3.89},
          {'axis': 'Infraestrutura', 'value': 3.97},
          {'axis': 'Liberdades civis', 'value': 0},
          {'axis': 'Meio-ambiente', 'value': 3.64},
          {'axis': 'Outros', 'value': 0},
          {'axis': 'Política Econômica', 'value': 3.92},
          {'axis': 'Política Externa e Defesa Nacional', 'value': 3.43},
          {'axis': 'Segurança Pública', 'value': 3.72},
          {'axis': 'Políticas Sociais', 'value': 3.4},
          {'axis': 'Saúde', 'value': 3.98},
          {'axis': 'Segurança Pública', 'value': 3.72}
        ]
      ],
      'marina':
      [
        [
          {'axis': 'Cultura e Turismo', 'value': 3.88},
          {'axis': 'Democracia e Reforma Política', 'value': 3.87},
          {'axis': 'Desenvolvimento Econômico', 'value': 3.99},
          {'axis': 'Direitos Humanos e Inclusão social', 'value': 3.56},
          {'axis': 'Educação', 'value': 4.26},
          {'axis': 'Esporte e lazer', 'value': 0},
          {'axis': 'Gestão Pública', 'value': 4.13},
          {'axis': 'Infraestrutura', 'value': 4.11},
          {'axis': 'Liberdades civis', 'value': 0},
          {'axis': 'Meio-ambiente', 'value': 4.41},
          {'axis': 'Outros', 'value': 4},
          {'axis': 'Política Econômica', 'value': 3.67},
          {'axis': 'Política Externa e Defesa Nacional', 'value': 3.87},
          {'axis': 'Segurança Pública', 'value': 3.94},
          {'axis': 'Políticas Sociais', 'value': 3.97},
          {'axis': 'Saúde', 'value': 4.02},
          {'axis': 'Segurança Pública', 'value': 3.94},

        ],
        [
          {'axis': 'Cultura e Turismo', 'value': 3.52},
          {'axis': 'Democracia e Reforma Política', 'value': 3.45},
          {'axis': 'Desenvolvimento Econômico', 'value': 3.67},
          {'axis': 'Direitos Humanos e Inclusão social', 'value': 3.36},
          {'axis': 'Educação', 'value': 3.91},
          {'axis': 'Esporte e lazer', 'value': 0},
          {'axis': 'Gestão Pública', 'value': 3.44},
          {'axis': 'Infraestrutura', 'value': 3.93},
          {'axis': 'Liberdades civis', 'value': 0},
          {'axis': 'Meio-ambiente', 'value': 3.79},
          {'axis': 'Outros', 'value': 3.54},
          {'axis': 'Política Econômica', 'value': 3.79},
          {'axis': 'Política Externa e Defesa Nacional', 'value': 3.28},
          {'axis': 'Segurança Pública', 'value': 3.59},
          {'axis': 'Políticas Sociais', 'value': 3.68},
          {'axis': 'Saúde', 'value': 3.75},
          {'axis': 'Segurança Pública', 'value': 3.59}
        ]
      ],
      'aecio':
      [
        [
          {'axis': 'Cultura e Turismo', 'value': 3.9},
          {'axis': 'Democracia e Reforma Política', 'value': 3.3},
          {'axis': 'Desenvolvimento Econômico', 'value': 4.23},
          {'axis': 'Direitos Humanos e Inclusão social', 'value': 3.94},
          {'axis': 'Educação', 'value': 3.69},
          {'axis': 'Esporte e lazer', 'value': 3.86},
          {'axis': 'Gestão Pública', 'value': 4.57},
          {'axis': 'Infraestrutura', 'value': 3.91},
          {'axis': 'Liberdades civis', 'value': 5},
          {'axis': 'Meio-ambiente', 'value': 3.9},
          {'axis': 'Outros', 'value': 3.2},
          {'axis': 'Política Econômica', 'value': 4.52},
          {'axis': 'Política Externa e Defesa Nacional', 'value': 4.23},
          {'axis': 'Segurança Pública', 'value': 3.79},
          {'axis': 'Políticas Sociais', 'value': 3.72},
          {'axis': 'Saúde', 'value': 3.98},
          {'axis': 'Segurança Pública', 'value': 3.79},
        ],
        [
          {'axis': 'Cultura e Turismo', 'value': 3.64},
          {'axis': 'Democracia e Reforma Política', 'value': 3.45},
          {'axis': 'Desenvolvimento Econômico', 'value': 3.62},
          {'axis': 'Direitos Humanos e Inclusão social', 'value': 3.63},
          {'axis': 'Educação', 'value': 3.88},
          {'axis': 'Esporte e lazer', 'value': 3.6},
          {'axis': 'Gestão Pública', 'value': 3.67},
          {'axis': 'Infraestrutura', 'value': 3.82},
          {'axis': 'Liberdades civis', 'value': 5},
          {'axis': 'Meio-ambiente', 'value': 3.61},
          {'axis': 'Outros', 'value': 2.95},
          {'axis': 'Política Econômica', 'value': 3.49},
          {'axis': 'Política Externa e Defesa Nacional', 'value': 3.93},
          {'axis': 'Segurança Pública', 'value': 3.67},
          {'axis': 'Políticas Sociais', 'value': 3.41},
          {'axis': 'Saúde', 'value': 3.75},
          {'axis': 'Segurança Pública', 'value': 3.67},
        ]
      ],
      'Luciana Genro':
      [
      	[
      		{'axis': 'Cultura e Turismo', 'value': 0},
      		{'axis': 'Democracia e Reforma Política', 'value': 4.5},
      		{'axis': 'Desenvolvimento Econômico', 'value': 4.3},
      		{'axis': 'Direitos Humanos e Inclusão social', 'value': 4.81},
      		{'axis': 'Educação', 'value': 4.65},
      		{'axis': 'Esporte e lazer', 'value': 0},
      		{'axis': 'Gestão Pública', 'value': 4.45},
      		{'axis': 'Infraestrutura', 'value': 4.36},
      		{'axis': 'Liberdades civis', 'value': 4.65},
      		{'axis': 'Meio-ambiente', 'value': 0},
      		{'axis': 'Outros', 'value': 0},
      		{'axis': 'Política Econômica', 'value': 4.5},
      		{'axis': 'Política Externa e Defesa Nacional', 'value': 0},
      		{'axis': 'Segurança Pública', 'value': 4.52},
      		{'axis': 'Políticas Sociais', 'value': 4.53},
      		{'axis': 'Saúde', 'value': 4.54},
      		{'axis': 'Segurança Pública', 'value': 4.52}
      	],
      	[
      		{'axis': 'Cultura e Turismo', 'value': 0},
      		{'axis': 'Democracia e Reforma Política', 'value': 3.22},
      		{'axis': 'Desenvolvimento Econômico', 'value': 3.18},
      		{'axis': 'Direitos Humanos e Inclusão social', 'value': 3.73},
      		{'axis': 'Educação', 'value': 4},
      		{'axis': 'Esporte e lazer', 'value': 0},
      		{'axis': 'Gestão Pública', 'value': 3.39},
      		{'axis': 'Infraestrutura', 'value': 2.96},
      		{'axis': 'Liberdades civis', 'value': 3.25},
      		{'axis': 'Meio-ambiente', 'value': 0},
      		{'axis': 'Outros', 'value': 0},
      		{'axis': 'Política Econômica', 'value': 3.22},
      		{'axis': 'Política Externa e Defesa Nacional', 'value': 0},
      		{'axis': 'Segurança Pública', 'value': 3.43},
      		{'axis': 'Políticas Sociais', 'value': 3.19},
      		{'axis': 'Saúde', 'value': 4.21},
      		{'axis': 'Segurança Pública', 'value': 3.43}
      	]
      ],
      'Eymael':
      [
      	[
      		{'axis': 'Cultura e Turismo', 'value': 3.61},
      		{'axis': 'Democracia e Reforma Política', 'value': 3.48},
      		{'axis': 'Desenvolvimento Econômico', 'value': 4.13},
      		{'axis': 'Direitos Humanos e Inclusão social', 'value': 4.23},
      		{'axis': 'Educação', 'value': 4.12},
      		{'axis': 'Esporte e lazer', 'value': 3.5},
      		{'axis': 'Gestão Pública', 'value': 4.03},
      		{'axis': 'Infraestrutura', 'value': 4},
      		{'axis': 'Liberdades civis', 'value': 0},
      		{'axis': 'Meio-ambiente', 'value': 3.25},
      		{'axis': 'Outros', 'value': 2.75},
      		{'axis': 'Política Econômica', 'value': 3.87},
      		{'axis': 'Política Externa e Defesa Nacional', 'value': 1.5},
      		{'axis': 'Segurança Pública', 'value': 4},
      		{'axis': 'Políticas Sociais', 'value': 0},
      		{'axis': 'Saúde', 'value': 4.03},
      		{'axis': 'Segurança Pública', 'value': 4}
      	],
      	[
      		{'axis': 'Cultura e Turismo', 'value': 3.64},
      		{'axis': 'Democracia e Reforma Política', 'value': 3.3},
      		{'axis': 'Desenvolvimento Econômico', 'value': 3.71},
      		{'axis': 'Direitos Humanos e Inclusão social', 'value': 4.05},
      		{'axis': 'Educação', 'value': 3.99},
      		{'axis': 'Esporte e lazer', 'value': 3.64},
      		{'axis': 'Gestão Pública', 'value': 3.77},
      		{'axis': 'Infraestrutura', 'value': 3.85},
      		{'axis': 'Liberdades civis', 'value': 0},
      		{'axis': 'Meio-ambiente', 'value': 3.87},
      		{'axis': 'Outros', 'value': 3.27},
      		{'axis': 'Política Econômica', 'value': 3.83},
      		{'axis': 'Política Externa e Defesa Nacional', 'value': 3.51},
      		{'axis': 'Segurança Pública', 'value': 3.53},
      		{'axis': 'Políticas Sociais', 'value': 3.55},
      		{'axis': 'Saúde', 'value': 4.09},
      		{'axis': 'Segurança Pública', 'value': 3.53}
      	]
      ],
      'Pastor Everaldo':
      [
      	[
      		{'axis': 'Cultura e Turismo', 'value': 4.1},
      		{'axis': 'Democracia e Reforma Política', 'value': 4.51},
      		{'axis': 'Desenvolvimento Econômico', 'value': 4.61},
      		{'axis': 'Direitos Humanos e Inclusão social', 'value': 3.4},
      		{'axis': 'Educação', 'value': 4.02},
      		{'axis': 'Esporte e lazer', 'value': 3},
      		{'axis': 'Gestão Pública', 'value': 3.57},
      		{'axis': 'Infraestrutura', 'value': 4.11},
      		{'axis': 'Liberdades civis', 'value': 4.22},
      		{'axis': 'Meio-ambiente', 'value': 3.86},
      		{'axis': 'Outros', 'value': 3.24},
      		{'axis': 'Política Econômica', 'value': 4.61},
      		{'axis': 'Política Externa e Defesa Nacional', 'value': 3.54},
      		{'axis': 'Segurança Pública', 'value': 4.29},
      		{'axis': 'Políticas Sociais', 'value': 4.06},
      		{'axis': 'Saúde', 'value': 4.77},
      		{'axis': 'Segurança Pública', 'value': 4.29}
      	],
      	[
      		{'axis': 'Cultura e Turismo', 'value': 3.44},
      		{'axis': 'Democracia e Reforma Política', 'value': 3.68},
      		{'axis': 'Desenvolvimento Econômico', 'value': 3.37},
      		{'axis': 'Direitos Humanos e Inclusão social', 'value': 3.76},
      		{'axis': 'Educação', 'value': 3.71},
      		{'axis': 'Esporte e lazer', 'value': 2.73},
      		{'axis': 'Gestão Pública', 'value': 3.22},
      		{'axis': 'Infraestrutura', 'value': 3.68},
      		{'axis': 'Liberdades civis', 'value': 3.26},
      		{'axis': 'Meio-ambiente', 'value': 3.72},
      		{'axis': 'Outros', 'value': 2.76},
      		{'axis': 'Política Econômica', 'value': 3.47},
      		{'axis': 'Política Externa e Defesa Nacional', 'value': 3.17},
      		{'axis': 'Segurança Pública', 'value': 3.37},
      		{'axis': 'Políticas Sociais', 'value': 3.55},
      		{'axis': 'Saúde', 'value': 3.53},
      		{'axis': 'Segurança Pública', 'value': 3.37}
      	]
      ],
      'Rui Costa Pimenta':
      [
      	[
      		{'axis': 'Cultura e Turismo', 'value': 3.23},
      		{'axis': 'Democracia e Reforma Política', 'value': 3.46},
      		{'axis': 'Desenvolvimento Econômico', 'value': 1.08},
      		{'axis': 'Direitos Humanos e Inclusão social', 'value': 3.46},
      		{'axis': 'Educação', 'value': 3.22},
      		{'axis': 'Esporte e lazer', 'value': 0},
      		{'axis': 'Gestão Pública', 'value': 2.25},
      		{'axis': 'Infraestrutura', 'value': 4.14},
      		{'axis': 'Liberdades civis', 'value': 3.8},
      		{'axis': 'Meio-ambiente', 'value': 0},
      		{'axis': 'Outros', 'value': 0},
      		{'axis': 'Política Econômica', 'value': 2.73},
      		{'axis': 'Política Externa e Defesa Nacional', 'value': 0},
      		{'axis': 'Segurança Pública', 'value': 2.93},
      		{'axis': 'Políticas Sociais', 'value': 0.17},
      		{'axis': 'Saúde', 'value': 2.08},
      		{'axis': 'Segurança Pública', 'value': 2.93}
      	],
      	[
      		{'axis': 'Cultura e Turismo', 'value': 2.86},
      		{'axis': 'Democracia e Reforma Política', 'value': 3.18},
      		{'axis': 'Desenvolvimento Econômico', 'value': 2.52},
      		{'axis': 'Direitos Humanos e Inclusão social', 'value': 3.12},
      		{'axis': 'Educação', 'value': 3.17},
      		{'axis': 'Esporte e lazer', 'value': 0},
      		{'axis': 'Gestão Pública', 'value': 2.72},
      		{'axis': 'Infraestrutura', 'value': 4.21},
      		{'axis': 'Liberdades civis', 'value': 3.37},
      		{'axis': 'Meio-ambiente', 'value': 0},
      		{'axis': 'Outros', 'value': 0},
      		{'axis': 'Política Econômica', 'value': 2.82},
      		{'axis': 'Política Externa e Defesa Nacional', 'value': 0},
      		{'axis': 'Segurança Pública', 'value': 2.77},
      		{'axis': 'Políticas Sociais', 'value': 2.74},
      		{'axis': 'Saúde', 'value': 3.4},
      		{'axis': 'Segurança Pública', 'value': 2.77}
      	]
      ],
      'Mauro Iasi':
      [
      	[
      		{'axis': 'Cultura e Turismo', 'value': 4.22},
      		{'axis': 'Democracia e Reforma Política', 'value': 4.09},
      		{'axis': 'Desenvolvimento Econômico', 'value': 3.98},
      		{'axis': 'Direitos Humanos e Inclusão social', 'value': 4.25},
      		{'axis': 'Educação', 'value': 4.42},
      		{'axis': 'Esporte e lazer', 'value': 0},
      		{'axis': 'Gestão Pública', 'value': 4.61},
      		{'axis': 'Infraestrutura', 'value': 4.67},
      		{'axis': 'Liberdades civis', 'value': 0},
      		{'axis': 'Meio-ambiente', 'value': 0},
      		{'axis': 'Outros', 'value': 4.34},
      		{'axis': 'Política Econômica', 'value': 4.65},
      		{'axis': 'Política Externa e Defesa Nacional', 'value': 4.46},
      		{'axis': 'Segurança Pública', 'value': 4.66},
      		{'axis': 'Políticas Sociais', 'value': 4.9},
      		{'axis': 'Saúde', 'value': 4.65},
      		{'axis': 'Segurança Pública', 'value': 4.66}
      	],
      	[
      		{'axis': 'Cultura e Turismo', 'value': 3.62},
			{'axis': 'Democracia e Reforma Política', 'value': 2.8},
			{'axis': 'Desenvolvimento Econômico', 'value': 2.92},
			{'axis': 'Direitos Humanos e Inclusão social', 'value': 3.35},
			{'axis': 'Educação', 'value': 3.72},
			{'axis': 'Esporte e lazer', 'value': 0},
			{'axis': 'Gestão Pública', 'value': 2.57},
			{'axis': 'Infraestrutura', 'value': 3.12},
			{'axis': 'Liberdades civis', 'value': 0},
			{'axis': 'Meio-ambiente', 'value': 0},
			{'axis': 'Outros', 'value': 2.53},
			{'axis': 'Política Econômica', 'value': 3.16},
			{'axis': 'Política Externa e Defesa Nacional', 'value': 2.62},
			{'axis': 'Segurança Pública', 'value': 2.93},
			{'axis': 'Políticas Sociais', 'value': 3.06},
			{'axis': 'Saúde', 'value': 3.05},
			{'axis': 'Segurança Pública', 'value': 2.93}
      	]
      ],
      'Zé Maria':
      [
      	[
      		{'axis': 'Cultura e Turismo', 'value': 0},
      		{'axis': 'Democracia e Reforma Política', 'value': 4.24},
      		{'axis': 'Desenvolvimento Econômico', 'value': 0},
      		{'axis': 'Direitos Humanos e Inclusão social', 'value': 3.87},
      		{'axis': 'Educação', 'value': 4.1},
      		{'axis': 'Esporte e lazer', 'value': 0},
      		{'axis': 'Gestão Pública', 'value': 3.28},
      		{'axis': 'Infraestrutura', 'value': 4.32},
      		{'axis': 'Liberdades civis', 'value': 4.03},
      		{'axis': 'Meio-ambiente', 'value': 0},
      		{'axis': 'Outros', 'value': 3.72},
      		{'axis': 'Política Econômica', 'value': 3.68},
      		{'axis': 'Política Externa e Defesa Nacional', 'value': 0},
      		{'axis': 'Segurança Pública', 'value': 4.12},
      		{'axis': 'Políticas Sociais', 'value': 4.22},
      		{'axis': 'Saúde', 'value': 3.85},
      		{'axis': 'Segurança Pública', 'value': 4.12}
      	],
      	[
      		{'axis': 'Cultura e Turismo', 'value': 0},
      		{'axis': 'Democracia e Reforma Política', 'value': 3.83},
      		{'axis': 'Desenvolvimento Econômico', 'value': 0},
      		{'axis': 'Direitos Humanos e Inclusão social', 'value': 3.24},
      		{'axis': 'Educação', 'value': 4.05},
      		{'axis': 'Esporte e lazer', 'value': 0},
      		{'axis': 'Gestão Pública', 'value': 2.43},
      		{'axis': 'Infraestrutura', 'value': 4.03},
      		{'axis': 'Liberdades civis', 'value': 3.51},
      		{'axis': 'Meio-ambiente', 'value': 0},
      		{'axis': 'Outros', 'value': 2.49},
      		{'axis': 'Política Econômica', 'value': 2.97},
      		{'axis': 'Política Externa e Defesa Nacional', 'value': 0},
      		{'axis': 'Segurança Pública', 'value': 2.85},
      		{'axis': 'Políticas Sociais', 'value': 3.75},
      		{'axis': 'Saúde', 'value': 3.63},
      		{'axis': 'Segurança Pública', 'value': 2.85}
      	]
      ]
    },
  comparativo: {
    legenda: [],
    dados: []
  },
  testeCego: {
    legenda: [],
    dados: []
  }
  };

  // Agrupa os dados por Teste Cego e por Comparativo, não sendo por candidato
  function extraiDadosPorAvaliacao() {
    angular.forEach(candidatosService.medias, function(valor, key){

      candidatosService.comparativo.dados.push(valor[0]);
      candidatosService.comparativo.legenda.push(key);

      candidatosService.testeCego.dados.push(valor[1]);
      candidatosService.testeCego.legenda.push(key);
    });
  }

  extraiDadosPorAvaliacao();

  // candidatosService.carregaDados = function(callback){
  //   console.log('carregando');
  //   $http.get('modules/candidatos/medias-candidatos.json')
  //    .then(function(res){
  //       console.log('carregado');
  //       console.log(res.data);
  //       candidatosService.medias = res.data;
  //       callback(candidatosService.medias);
  //     });
  // };

  // function extraiPropostas(){
  //   for (var i = candidatosService.propostas.length - 1; i >= 0; i--) {
  //     if (candidatosService.propostas[i].politicians_id == 'Eduardo Jorge'){
  //       candidatosService.eduardo.propostas.push(candidatosService.propostas[i]);
  //       if (candidatosService.propostas[i].tema == 'Meio ambiente'){
  //         candidatosService.eduardo.meioAmbiente = {};
  //       }
  //     }
  //   }
  // }

  return candidatosService;
}]);
