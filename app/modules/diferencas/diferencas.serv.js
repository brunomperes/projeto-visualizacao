'use strict';

angular.module('projetobrasil.dados.diferencas.services', [])
.factory('diferencasServ', [function(){
  var diferencasService = {
  	
  	eduardo: [
  		testeCego : [
  				'cultura' : [
  					{"name":"Dilma","value":-3.58},
	  				{"name":"Marina","value":-3.52},
	  				{"name":"Levy Fidélix","value":0},
	  				{"name":"Aécio","value":-3.64},
	  				{"name":"Luciana Genro","value":0},
	  				{"name":"Eymael","value":-3.64},
	  				{"name":"Pastor Everaldo","value":-3.44},
	  				{"name":"Mauro Iasi","value":-3.62},
	  				{"name":"Rui Costa Pimenta","value":-2.86},
	  				{"name":"Zé Maria","value":0}
  				],
  				'democracia' :	[
  					[{"name":"Dilma","value":-0.49},{"name":"Marina","value":0.05},{"name":"Levy Fidélix","value":0.06},{"name":"Aécio","value":0.06},{"name":"Luciana Genro","value":0.29},{"name":"Eymael","value":0.21},{"name":"Pastor Everaldo","value":-0.18},{"name":"Mauro Iasi","value":0.7},{"name":"Rui Costa Pimenta","value":0.33},{"name":"Zé Maria","value":-0.33}]
  				],
  				'desenvolvimentoEconomico' : [
  					[{"name":"Dilma","value":-0.36},{"name":"Marina","value":-0.25},{"name":"Levy Fidélix","value":0.16},{"name":"Aécio","value":-0.19},{"name":"Luciana Genro","value":0.24},{"name":"Eymael","value":-0.28},{"name":"Pastor Everaldo","value":0.05},{"name":"Mauro Iasi","value":0.51},{"name":"Rui Costa Pimenta","value":0.9},{"name":"Zé Maria","value":3.43}]
  				],
  				'direitosHumanos' : [
            [{"name":"Dilma","value":0.1},{"name":"Marina","value":0.16},{"name":"Levy Fidélix","value":3.52},{"name":"Aécio","value":-0.11},{"name":"Luciana Genro","value":-0.21},{"name":"Eymael","value":-0.53},{"name":"Pastor Everaldo","value":-0.24},{"name":"Mauro Iasi","value":0.17},{"name":"Rui Costa Pimenta","value":0.4},{"name":"Zé Maria","value":0.28}]
  				],
  				'educacao' : [
            [{"name":"Dilma","value":-0.01},{"name":"Marina","value":0.1},{"name":"Levy Fidélix","value":0.11},{"name":"Aécio","value":0.12},{"name":"Luciana Genro","value":0.01},{"name":"Eymael","value":0.02},{"name":"Pastor Everaldo","value":0.29},{"name":"Mauro Iasi","value":0.28},{"name":"Rui Costa Pimenta","value":0.83},{"name":"Zé Maria","value":-0.05}]
  				],
  				'esporte' : [
            [{"name":"Dilma","value":-3.11},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.6},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.64},{"name":"Pastor Everaldo","value":-2.73},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}]
  				],
  				'gestaoPublica' : [
            [{"name":"Dilma","value":-0.16},{"name":"Marina","value":0.28},{"name":"Levy Fidélix","value":1.78},{"name":"Aécio","value":0.06},{"name":"Luciana Genro","value":0.34},{"name":"Eymael","value":-0.05},{"name":"Pastor Everaldo","value":0.5},{"name":"Mauro Iasi","value":1.15},{"name":"Rui Costa Pimenta","value":1.01},{"name":"Zé Maria","value":1.29}]
  				],
  				'infraestrutura' : [
            [{"name":"Dilma","value":-0.34},{"name":"Marina","value":-0.3},{"name":"Levy Fidélix","value":0.12},{"name":"Aécio","value":-0.19},{"name":"Luciana Genro","value":0.66},{"name":"Eymael","value":-0.22},{"name":"Pastor Everaldo","value":-0.06},{"name":"Mauro Iasi","value":0.51},{"name":"Rui Costa Pimenta","value":-0.58},{"name":"Zé Maria","value":-0.4}]
  				],
  				'liberdadesCivis' : [
            [{"name":"Dilma","value":3.3},{"name":"Marina","value":3.3},{"name":"Levy Fidélix","value":3.3},{"name":"Aécio","value":-1.7},{"name":"Luciana Genro","value":0.04},{"name":"Eymael","value":3.3},{"name":"Pastor Everaldo","value":0.03},{"name":"Mauro Iasi","value":3.3},{"name":"Rui Costa Pimenta","value":-0.07},{"name":"Zé Maria","value":-0.21}]
  				],
  				'meioAmbiente' : [
            [{"name":"Dilma","value":-0.48},{"name":"Marina","value":-0.63},{"name":"Levy Fidélix","value":3.15},{"name":"Aécio","value":-0.45},{"name":"Luciana Genro","value":3.15},{"name":"Eymael","value":-0.71},{"name":"Pastor Everaldo","value":-0.56},{"name":"Mauro Iasi","value":3.15},{"name":"Rui Costa Pimenta","value":3.15},{"name":"Zé Maria","value":3.15}]
  				],
  				'outros' : [
            [{"name":"Dilma","value":3.62},{"name":"Marina","value":0.08},{"name":"Levy Fidélix","value":0.57},{"name":"Aécio","value":0.67},{"name":"Luciana Genro","value":3.62},{"name":"Eymael","value":0.36},{"name":"Pastor Everaldo","value":0.86},{"name":"Mauro Iasi","value":1.09},{"name":"Rui Costa Pimenta","value":3.62},{"name":"Zé Maria","value":1.14}]
  				],
  				'politicaEconomica' : [
            [{"name":"Dilma","value":-0.56},{"name":"Marina","value":-0.43},{"name":"Levy Fidélix","value":-0.15},{"name":"Aécio","value":-0.13},{"name":"Luciana Genro","value":0.14},{"name":"Eymael","value":-0.47},{"name":"Pastor Everaldo","value":-0.11},{"name":"Mauro Iasi","value":0.2},{"name":"Rui Costa Pimenta","value":0.55},{"name":"Zé Maria","value":0.39}]
  				],
  				'politicaExterna' : [
            [{"name":"Dilma","value":-0.4},{"name":"Marina","value":-0.25},{"name":"Levy Fidélix","value":-0.16},{"name":"Aécio","value":-0.9},{"name":"Luciana Genro","value":3.03},{"name":"Eymael","value":-0.48},{"name":"Pastor Everaldo","value":-0.14},{"name":"Mauro Iasi","value":0.42},{"name":"Rui Costa Pimenta","value":3.03},{"name":"Zé Maria","value":3.03}]
  				],
  				'segurancaPublica' : [
            [{"name":"Dilma","value":-0.54},{"name":"Marina","value":-0.4},{"name":"Levy Fidélix","value":-0.02},{"name":"Aécio","value":-0.49},{"name":"Luciana Genro","value":-0.24},{"name":"Eymael","value":-0.35},{"name":"Pastor Everaldo","value":-0.18},{"name":"Mauro Iasi","value":0.25},{"name":"Rui Costa Pimenta","value":0.41},{"name":"Zé Maria","value":0.33}]
  				],
  				'politicasSociais' : [
            [{"name":"Dilma","value":-3.4},{"name":"Marina","value":-3.68},{"name":"Levy Fidélix","value":-3.1},{"name":"Aécio","value":-3.41},{"name":"Luciana Genro","value":-3.19},{"name":"Eymael","value":-3.55},{"name":"Pastor Everaldo","value":-3.55},{"name":"Mauro Iasi","value":-3.06},{"name":"Rui Costa Pimenta","value":-2.74},{"name":"Zé Maria","value":-3.75}]
  				],
  				'saude' : [
            [{"name":"Dilma","value":-0.33},{"name":"Marina","value":-0.1},{"name":"Levy Fidélix","value":0.1},{"name":"Aécio","value":-0.1},{"name":"Luciana Genro","value":-0.56},{"name":"Eymael","value":-0.45},{"name":"Pastor Everaldo","value":0.11},{"name":"Mauro Iasi","value":0.6},{"name":"Rui Costa Pimenta","value":0.25},{"name":"Zé Maria","value":0.02}]
  				]
  		],

  		comparativo : [
  				'cultura' : [
            [{"name":"Dilma","value":-3.23},{"name":"Marina","value":-3.88},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.9},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.61},{"name":"Pastor Everaldo","value":-4.1},{"name":"Mauro Iasi","value":-2.08},{"name":"Rui Costa Pimenta","value":-3.23},{"name":"Zé Maria","value":0}]
  				],
  				'democracia' :	[
            [{"name":"Dilma","value":-0.35},{"name":"Marina","value":-0.36},{"name":"Levy Fidélix","value":0.43},{"name":"Aécio","value":0.2},{"name":"Luciana Genro","value":-0.99},{"name":"Eymael","value":0.03},{"name":"Pastor Everaldo","value":-1},{"name":"Mauro Iasi","value":0.58},{"name":"Rui Costa Pimenta","value":0.04},{"name":"Zé Maria","value":-0.74}]
  				],
  				'desenvolvimentoEconomico' : [
            [{"name":"Dilma","value":-0.41},{"name":"Marina","value":-0.56},{"name":"Levy Fidélix","value":-0.27},{"name":"Aécio","value":-0.8},{"name":"Luciana Genro","value":-0.87},{"name":"Eymael","value":-0.7},{"name":"Pastor Everaldo","value":-1.19},{"name":"Mauro Iasi","value":3.43},{"name":"Rui Costa Pimenta","value":2.35},{"name":"Zé Maria","value":3.43}]
  				],
  				'direitosHumanos' : [
            [{"name":"Dilma","value":-0.66},{"name":"Marina","value":-0.04},{"name":"Levy Fidélix","value":3.52},{"name":"Aécio","value":-0.42},{"name":"Luciana Genro","value":-1.29},{"name":"Eymael","value":-0.71},{"name":"Pastor Everaldo","value":0.12},{"name":"Mauro Iasi","value":-0.7},{"name":"Rui Costa Pimenta","value":0.06},{"name":"Zé Maria","value":-0.35}]
  				],
  				'educacao' : [
            [{"name":"Dilma","value":-0.45},{"name":"Marina","value":-0.26},{"name":"Levy Fidélix","value":0.46},{"name":"Aécio","value":0.32},{"name":"Luciana Genro","value":-0.65},{"name":"Eymael","value":-0.12},{"name":"Pastor Everaldo","value":-0.02},{"name":"Mauro Iasi","value":-0.09},{"name":"Rui Costa Pimenta","value":0.78},{"name":"Zé Maria","value":-0.1}]
  				],
  				'esporte' : [
            [{"name":"Dilma","value":-3.37},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.86},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.5},{"name":"Pastor Everaldo","value":-3},{"name":"Mauro Iasi","value":-3.98},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}]
  				],
  				'gestaoPublica' : [
            [{"name":"Dilma","value":-0.24},{"name":"Marina","value":-0.41},{"name":"Levy Fidélix","value":3.72},{"name":"Aécio","value":-0.84},{"name":"Luciana Genro","value":-0.73},{"name":"Eymael","value":-0.3},{"name":"Pastor Everaldo","value":0.15},{"name":"Mauro Iasi","value":-0.53},{"name":"Rui Costa Pimenta","value":1.47},{"name":"Zé Maria","value":0.44}]
  				],
  				'infraestrutura' : [
            [{"name":"Dilma","value":-0.36},{"name":"Marina","value":-0.49},{"name":"Levy Fidélix","value":0.29},{"name":"Aécio","value":-0.28},{"name":"Luciana Genro","value":-0.73},{"name":"Eymael","value":-0.37},{"name":"Pastor Everaldo","value":-0.49},{"name":"Mauro Iasi","value":-0.79},{"name":"Rui Costa Pimenta","value":-0.52},{"name":"Zé Maria","value":-0.69}]
  				],
  				'liberdadesCivis' : [
            [{"name":"Dilma","value":3.3},{"name":"Marina","value":3.3},{"name":"Levy Fidélix","value":3.3},{"name":"Aécio","value":-1.7},{"name":"Luciana Genro","value":-1.36},{"name":"Eymael","value":3.3},{"name":"Pastor Everaldo","value":-0.92},{"name":"Mauro Iasi","value":3.3},{"name":"Rui Costa Pimenta","value":-0.5},{"name":"Zé Maria","value":-0.73}]
  				],
  				'meioAmbiente' : [
            [{"name":"Dilma","value":-0.26},{"name":"Marina","value":-1.25},{"name":"Levy Fidélix","value":3.15},{"name":"Aécio","value":-0.75},{"name":"Luciana Genro","value":3.15},{"name":"Eymael","value":-0.1},{"name":"Pastor Everaldo","value":-0.71},{"name":"Mauro Iasi","value":-1.46},{"name":"Rui Costa Pimenta","value":3.15},{"name":"Zé Maria","value":3.15}]
  				],
  				'outros' : [
            [{"name":"Dilma","value":3.62},{"name":"Marina","value":-0.38},{"name":"Levy Fidélix","value":-0.88},{"name":"Aécio","value":0.42},{"name":"Luciana Genro","value":3.62},{"name":"Eymael","value":0.87},{"name":"Pastor Everaldo","value":0.39},{"name":"Mauro Iasi","value":-1.05},{"name":"Rui Costa Pimenta","value":3.62},{"name":"Zé Maria","value":-0.09}]
  				],
  				'politicaEconomica' : [
            [{"name":"Dilma","value":0.46},{"name":"Marina","value":-0.3},{"name":"Levy Fidélix","value":-0.13},{"name":"Aécio","value":-1.15},{"name":"Luciana Genro","value":-1.13},{"name":"Eymael","value":-0.5},{"name":"Pastor Everaldo","value":-1.25},{"name":"Mauro Iasi","value":3.37},{"name":"Rui Costa Pimenta","value":0.64},{"name":"Zé Maria","value":-0.32}]
  				],
  				'politicaExterna' : [
            [{"name":"Dilma","value":-0.81},{"name":"Marina","value":-0.83},{"name":"Levy Fidélix","value":-1.97},{"name":"Aécio","value":-1.19},{"name":"Luciana Genro","value":3.03},{"name":"Eymael","value":1.53},{"name":"Pastor Everaldo","value":-0.51},{"name":"Mauro Iasi","value":3.03},{"name":"Rui Costa Pimenta","value":3.03},{"name":"Zé Maria","value":3.03}]
  				],
  				'segurancaPublica' : [
            [{"name":"Dilma","value":0.46},{"name":"Marina","value":-0.75},{"name":"Levy Fidélix","value":-1.08},{"name":"Aécio","value":-0.61},{"name":"Luciana Genro","value":-1.33},{"name":"Eymael","value":-0.82},{"name":"Pastor Everaldo","value":-1.11},{"name":"Mauro Iasi","value":-1.16},{"name":"Rui Costa Pimenta","value":0.26},{"name":"Zé Maria","value":-0.93}]
  				],
  				'politicasSociais' : [
            [{"name":"Dilma","value":-4.26},{"name":"Marina","value":-3.97},{"name":"Levy Fidélix","value":-3.5},{"name":"Aécio","value":-3.72},{"name":"Luciana Genro","value":-4.53},{"name":"Eymael","value":0},{"name":"Pastor Everaldo","value":-4.06},{"name":"Mauro Iasi","value":-4.65},{"name":"Rui Costa Pimenta","value":-0.17},{"name":"Zé Maria","value":-4.22}]
  				],
  				'saude' : [
            [{"name":"Dilma","value":-0.29},{"name":"Marina","value":-0.37},{"name":"Levy Fidélix","value":-0.27},{"name":"Aécio","value":-0.33},{"name":"Luciana Genro","value":-0.89},{"name":"Eymael","value":-0.38},{"name":"Pastor Everaldo","value":-1.12},{"name":"Mauro Iasi","value":-0.82},{"name":"Rui Costa Pimenta","value":1.57},{"name":"Zé Maria","value":-0.2}]
  				]
  		]
  	],

  	dilma: [
  		testeCego : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		],

  		comparativo : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		]
  	],

  	marina: [
  		testeCego : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		],

  		comparativo : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		]
  	],

  	fidelix: [
  		testeCego : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		],

  		comparativo : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		]
  	],

  	aecio: [
  		testeCego : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		],

  		comparativo : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		]
  	],

  	luciana: [
  		testeCego : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		],

  		comparativo : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		]
  	],

  	eymael: [
  		testeCego : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		],

  		comparativo : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		]
  	],

  	everaldo: [
  		testeCego : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		],

  		comparativo : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		]
  	],

  	mauro: [
  		testeCego : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		],

  		comparativo : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		]
  	],

  	rui: [
  		testeCego : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		],

  		comparativo : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		]
  	],

  	zeMaria: [
  		testeCego : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		],

  		comparativo : [
  				'cultura' : [
  				],
  				'democracia' :	[
  				],
  				'desenvolvimentoEconomico' : [
  				],
  				'direitosHumanos' : [
  				],
  				'educacao' : [
  				],
  				'esporte' : [
  				],
  				'gestaoPublica' : [
  				],
  				'infraestrutura' : [
  				],
  				'liberdadesCivis' : [
  				],
  				'meioAmbiente' : [
  				],
  				'outros' : [
  				],
  				'politicaEconomica' : [
  				],
  				'politicaExterna' : [
  				],
  				'segurancaPublica' : [
  				],
  				'politicasSociais' : [
  				],
  				'saude' : [
  				]
  		]
  	]

  };

  return diferencasService;
}]);
