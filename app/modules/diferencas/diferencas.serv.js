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
  					{"name":"Dilma","value":-0.49},{"name":"Marina","value":0.05},{"name":"Levy Fidélix","value":0.06},{"name":"Aécio","value":0.06},{"name":"Luciana Genro","value":0.29},{"name":"Eymael","value":0.21},{"name":"Pastor Everaldo","value":-0.18},{"name":"Mauro Iasi","value":0.7},{"name":"Rui Costa Pimenta","value":0.33},{"name":"Zé Maria","value":-0.33}
  				],
  				'desenvolvimentoEconomico' : [
  					{"name":"Dilma","value":-0.36},{"name":"Marina","value":-0.25},{"name":"Levy Fidélix","value":0.16},{"name":"Aécio","value":-0.19},{"name":"Luciana Genro","value":0.24},{"name":"Eymael","value":-0.28},{"name":"Pastor Everaldo","value":0.05},{"name":"Mauro Iasi","value":0.51},{"name":"Rui Costa Pimenta","value":0.9},{"name":"Zé Maria","value":3.43}
  				],
  				'direitosHumanos' : [
            {"name":"Dilma","value":0.1},{"name":"Marina","value":0.16},{"name":"Levy Fidélix","value":3.52},{"name":"Aécio","value":-0.11},{"name":"Luciana Genro","value":-0.21},{"name":"Eymael","value":-0.53},{"name":"Pastor Everaldo","value":-0.24},{"name":"Mauro Iasi","value":0.17},{"name":"Rui Costa Pimenta","value":0.4},{"name":"Zé Maria","value":0.28}
  				],
  				'educacao' : [
            {"name":"Dilma","value":-0.01},{"name":"Marina","value":0.1},{"name":"Levy Fidélix","value":0.11},{"name":"Aécio","value":0.12},{"name":"Luciana Genro","value":0.01},{"name":"Eymael","value":0.02},{"name":"Pastor Everaldo","value":0.29},{"name":"Mauro Iasi","value":0.28},{"name":"Rui Costa Pimenta","value":0.83},{"name":"Zé Maria","value":-0.05}
  				],
  				'esporte' : [
            {"name":"Dilma","value":-3.11},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.6},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.64},{"name":"Pastor Everaldo","value":-2.73},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'gestaoPublica' : [
            {"name":"Dilma","value":-0.16},{"name":"Marina","value":0.28},{"name":"Levy Fidélix","value":1.78},{"name":"Aécio","value":0.06},{"name":"Luciana Genro","value":0.34},{"name":"Eymael","value":-0.05},{"name":"Pastor Everaldo","value":0.5},{"name":"Mauro Iasi","value":1.15},{"name":"Rui Costa Pimenta","value":1.01},{"name":"Zé Maria","value":1.29}
  				],
  				'infraestrutura' : [
            {"name":"Dilma","value":-0.34},{"name":"Marina","value":-0.3},{"name":"Levy Fidélix","value":0.12},{"name":"Aécio","value":-0.19},{"name":"Luciana Genro","value":0.66},{"name":"Eymael","value":-0.22},{"name":"Pastor Everaldo","value":-0.06},{"name":"Mauro Iasi","value":0.51},{"name":"Rui Costa Pimenta","value":-0.58},{"name":"Zé Maria","value":-0.4}
  				],
  				'liberdadesCivis' : [
            {"name":"Dilma","value":3.3},{"name":"Marina","value":3.3},{"name":"Levy Fidélix","value":3.3},{"name":"Aécio","value":-1.7},{"name":"Luciana Genro","value":0.04},{"name":"Eymael","value":3.3},{"name":"Pastor Everaldo","value":0.03},{"name":"Mauro Iasi","value":3.3},{"name":"Rui Costa Pimenta","value":-0.07},{"name":"Zé Maria","value":-0.21}
  				],
  				'meioAmbiente' : [
            {"name":"Dilma","value":-0.48},{"name":"Marina","value":-0.63},{"name":"Levy Fidélix","value":3.15},{"name":"Aécio","value":-0.45},{"name":"Luciana Genro","value":3.15},{"name":"Eymael","value":-0.71},{"name":"Pastor Everaldo","value":-0.56},{"name":"Mauro Iasi","value":3.15},{"name":"Rui Costa Pimenta","value":3.15},{"name":"Zé Maria","value":3.15}
  				],
  				'outros' : [
            {"name":"Dilma","value":3.62},{"name":"Marina","value":0.08},{"name":"Levy Fidélix","value":0.57},{"name":"Aécio","value":0.67},{"name":"Luciana Genro","value":3.62},{"name":"Eymael","value":0.36},{"name":"Pastor Everaldo","value":0.86},{"name":"Mauro Iasi","value":1.09},{"name":"Rui Costa Pimenta","value":3.62},{"name":"Zé Maria","value":1.14}
  				],
  				'politicaEconomica' : [
            {"name":"Dilma","value":-0.56},{"name":"Marina","value":-0.43},{"name":"Levy Fidélix","value":-0.15},{"name":"Aécio","value":-0.13},{"name":"Luciana Genro","value":0.14},{"name":"Eymael","value":-0.47},{"name":"Pastor Everaldo","value":-0.11},{"name":"Mauro Iasi","value":0.2},{"name":"Rui Costa Pimenta","value":0.55},{"name":"Zé Maria","value":0.39}
  				],
  				'politicaExterna' : [
            {"name":"Dilma","value":-0.4},{"name":"Marina","value":-0.25},{"name":"Levy Fidélix","value":-0.16},{"name":"Aécio","value":-0.9},{"name":"Luciana Genro","value":3.03},{"name":"Eymael","value":-0.48},{"name":"Pastor Everaldo","value":-0.14},{"name":"Mauro Iasi","value":0.42},{"name":"Rui Costa Pimenta","value":3.03},{"name":"Zé Maria","value":3.03}
  				],
  				'segurancaPublica' : [
            {"name":"Dilma","value":-0.54},{"name":"Marina","value":-0.4},{"name":"Levy Fidélix","value":-0.02},{"name":"Aécio","value":-0.49},{"name":"Luciana Genro","value":-0.24},{"name":"Eymael","value":-0.35},{"name":"Pastor Everaldo","value":-0.18},{"name":"Mauro Iasi","value":0.25},{"name":"Rui Costa Pimenta","value":0.41},{"name":"Zé Maria","value":0.33}
  				],
  				'politicasSociais' : [
            {"name":"Dilma","value":-3.4},{"name":"Marina","value":-3.68},{"name":"Levy Fidélix","value":-3.1},{"name":"Aécio","value":-3.41},{"name":"Luciana Genro","value":-3.19},{"name":"Eymael","value":-3.55},{"name":"Pastor Everaldo","value":-3.55},{"name":"Mauro Iasi","value":-3.06},{"name":"Rui Costa Pimenta","value":-2.74},{"name":"Zé Maria","value":-3.75}
  				],
  				'saude' : [
            {"name":"Dilma","value":-0.33},{"name":"Marina","value":-0.1},{"name":"Levy Fidélix","value":0.1},{"name":"Aécio","value":-0.1},{"name":"Luciana Genro","value":-0.56},{"name":"Eymael","value":-0.45},{"name":"Pastor Everaldo","value":0.11},{"name":"Mauro Iasi","value":0.6},{"name":"Rui Costa Pimenta","value":0.25},{"name":"Zé Maria","value":0.02}
  				]
  		],

  		comparativo : [
  				'cultura' : [
            {"name":"Dilma","value":-3.23},{"name":"Marina","value":-3.88},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.9},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.61},{"name":"Pastor Everaldo","value":-4.1},{"name":"Mauro Iasi","value":-2.08},{"name":"Rui Costa Pimenta","value":-3.23},{"name":"Zé Maria","value":0}
  				],
  				'democracia' :	[
            {"name":"Dilma","value":-0.35},{"name":"Marina","value":-0.36},{"name":"Levy Fidélix","value":0.43},{"name":"Aécio","value":0.2},{"name":"Luciana Genro","value":-0.99},{"name":"Eymael","value":0.03},{"name":"Pastor Everaldo","value":-1},{"name":"Mauro Iasi","value":0.58},{"name":"Rui Costa Pimenta","value":0.04},{"name":"Zé Maria","value":-0.74}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Dilma","value":-0.41},{"name":"Marina","value":-0.56},{"name":"Levy Fidélix","value":-0.27},{"name":"Aécio","value":-0.8},{"name":"Luciana Genro","value":-0.87},{"name":"Eymael","value":-0.7},{"name":"Pastor Everaldo","value":-1.19},{"name":"Mauro Iasi","value":3.43},{"name":"Rui Costa Pimenta","value":2.35},{"name":"Zé Maria","value":3.43}
  				],
  				'direitosHumanos' : [
            {"name":"Dilma","value":-0.66},{"name":"Marina","value":-0.04},{"name":"Levy Fidélix","value":3.52},{"name":"Aécio","value":-0.42},{"name":"Luciana Genro","value":-1.29},{"name":"Eymael","value":-0.71},{"name":"Pastor Everaldo","value":0.12},{"name":"Mauro Iasi","value":-0.7},{"name":"Rui Costa Pimenta","value":0.06},{"name":"Zé Maria","value":-0.35}
  				],
  				'educacao' : [
            {"name":"Dilma","value":-0.45},{"name":"Marina","value":-0.26},{"name":"Levy Fidélix","value":0.46},{"name":"Aécio","value":0.32},{"name":"Luciana Genro","value":-0.65},{"name":"Eymael","value":-0.12},{"name":"Pastor Everaldo","value":-0.02},{"name":"Mauro Iasi","value":-0.09},{"name":"Rui Costa Pimenta","value":0.78},{"name":"Zé Maria","value":-0.1}
  				],
  				'esporte' : [
            {"name":"Dilma","value":-3.37},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.86},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.5},{"name":"Pastor Everaldo","value":-3},{"name":"Mauro Iasi","value":-3.98},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'gestaoPublica' : [
            {"name":"Dilma","value":-0.24},{"name":"Marina","value":-0.41},{"name":"Levy Fidélix","value":3.72},{"name":"Aécio","value":-0.84},{"name":"Luciana Genro","value":-0.73},{"name":"Eymael","value":-0.3},{"name":"Pastor Everaldo","value":0.15},{"name":"Mauro Iasi","value":-0.53},{"name":"Rui Costa Pimenta","value":1.47},{"name":"Zé Maria","value":0.44}
  				],
  				'infraestrutura' : [
            {"name":"Dilma","value":-0.36},{"name":"Marina","value":-0.49},{"name":"Levy Fidélix","value":0.29},{"name":"Aécio","value":-0.28},{"name":"Luciana Genro","value":-0.73},{"name":"Eymael","value":-0.37},{"name":"Pastor Everaldo","value":-0.49},{"name":"Mauro Iasi","value":-0.79},{"name":"Rui Costa Pimenta","value":-0.52},{"name":"Zé Maria","value":-0.69}
  				],
  				'liberdadesCivis' : [
            {"name":"Dilma","value":3.3},{"name":"Marina","value":3.3},{"name":"Levy Fidélix","value":3.3},{"name":"Aécio","value":-1.7},{"name":"Luciana Genro","value":-1.36},{"name":"Eymael","value":3.3},{"name":"Pastor Everaldo","value":-0.92},{"name":"Mauro Iasi","value":3.3},{"name":"Rui Costa Pimenta","value":-0.5},{"name":"Zé Maria","value":-0.73}
  				],
  				'meioAmbiente' : [
            {"name":"Dilma","value":-0.26},{"name":"Marina","value":-1.25},{"name":"Levy Fidélix","value":3.15},{"name":"Aécio","value":-0.75},{"name":"Luciana Genro","value":3.15},{"name":"Eymael","value":-0.1},{"name":"Pastor Everaldo","value":-0.71},{"name":"Mauro Iasi","value":-1.46},{"name":"Rui Costa Pimenta","value":3.15},{"name":"Zé Maria","value":3.15}
  				],
  				'outros' : [
            {"name":"Dilma","value":3.62},{"name":"Marina","value":-0.38},{"name":"Levy Fidélix","value":-0.88},{"name":"Aécio","value":0.42},{"name":"Luciana Genro","value":3.62},{"name":"Eymael","value":0.87},{"name":"Pastor Everaldo","value":0.39},{"name":"Mauro Iasi","value":-1.05},{"name":"Rui Costa Pimenta","value":3.62},{"name":"Zé Maria","value":-0.09}
  				],
  				'politicaEconomica' : [
            {"name":"Dilma","value":0.46},{"name":"Marina","value":-0.3},{"name":"Levy Fidélix","value":-0.13},{"name":"Aécio","value":-1.15},{"name":"Luciana Genro","value":-1.13},{"name":"Eymael","value":-0.5},{"name":"Pastor Everaldo","value":-1.25},{"name":"Mauro Iasi","value":3.37},{"name":"Rui Costa Pimenta","value":0.64},{"name":"Zé Maria","value":-0.32}
  				],
  				'politicaExterna' : [
            {"name":"Dilma","value":-0.81},{"name":"Marina","value":-0.83},{"name":"Levy Fidélix","value":-1.97},{"name":"Aécio","value":-1.19},{"name":"Luciana Genro","value":3.03},{"name":"Eymael","value":1.53},{"name":"Pastor Everaldo","value":-0.51},{"name":"Mauro Iasi","value":3.03},{"name":"Rui Costa Pimenta","value":3.03},{"name":"Zé Maria","value":3.03}
  				],
  				'segurancaPublica' : [
            {"name":"Dilma","value":0.46},{"name":"Marina","value":-0.75},{"name":"Levy Fidélix","value":-1.08},{"name":"Aécio","value":-0.61},{"name":"Luciana Genro","value":-1.33},{"name":"Eymael","value":-0.82},{"name":"Pastor Everaldo","value":-1.11},{"name":"Mauro Iasi","value":-1.16},{"name":"Rui Costa Pimenta","value":0.26},{"name":"Zé Maria","value":-0.93}
  				],
  				'politicasSociais' : [
            {"name":"Dilma","value":-4.26},{"name":"Marina","value":-3.97},{"name":"Levy Fidélix","value":-3.5},{"name":"Aécio","value":-3.72},{"name":"Luciana Genro","value":-4.53},{"name":"Eymael","value":0},{"name":"Pastor Everaldo","value":-4.06},{"name":"Mauro Iasi","value":-4.65},{"name":"Rui Costa Pimenta","value":-0.17},{"name":"Zé Maria","value":-4.22}
  				],
  				'saude' : [
            {"name":"Dilma","value":-0.29},{"name":"Marina","value":-0.37},{"name":"Levy Fidélix","value":-0.27},{"name":"Aécio","value":-0.33},{"name":"Luciana Genro","value":-0.89},{"name":"Eymael","value":-0.38},{"name":"Pastor Everaldo","value":-1.12},{"name":"Mauro Iasi","value":-0.82},{"name":"Rui Costa Pimenta","value":1.57},{"name":"Zé Maria","value":-0.2}
  				]
  		]
  	],

  	dilma: [
  		testeCego : [
  				'cultura' : [
            {"name":"Eduardo","value":3.58},{"name":"Marina","value":0.06},{"name":"Levy Fidélix","value":3.58},{"name":"Aécio","value":-0.07},{"name":"Luciana Genro","value":3.58},{"name":"Eymael","value":-0.06},{"name":"Pastor Everaldo","value":0.14},{"name":"Mauro Iasi","value":-0.05},{"name":"Rui Costa Pimenta","value":0.72},{"name":"Zé Maria","value":3.58}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":0.49},{"name":"Marina","value":0.54},{"name":"Levy Fidélix","value":0.55},{"name":"Aécio","value":0.55},{"name":"Luciana Genro","value":0.78},{"name":"Eymael","value":0.7},{"name":"Pastor Everaldo","value":0.31},{"name":"Mauro Iasi","value":1.19},{"name":"Rui Costa Pimenta","value":0.82},{"name":"Zé Maria","value":0.16}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":0.36},{"name":"Marina","value":0.11},{"name":"Levy Fidélix","value":0.51},{"name":"Aécio","value":0.17},{"name":"Luciana Genro","value":0.6},{"name":"Eymael","value":0.08},{"name":"Pastor Everaldo","value":0.41},{"name":"Mauro Iasi","value":0.86},{"name":"Rui Costa Pimenta","value":1.26},{"name":"Zé Maria","value":3.78}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-0.1},{"name":"Marina","value":0.06},{"name":"Levy Fidélix","value":3.42},{"name":"Aécio","value":-0.21},{"name":"Luciana Genro","value":-0.31},{"name":"Eymael","value":-0.63},{"name":"Pastor Everaldo","value":-0.34},{"name":"Mauro Iasi","value":0.06},{"name":"Rui Costa Pimenta","value":0.3},{"name":"Zé Maria","value":0.18}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":0.01},{"name":"Marina","value":0.11},{"name":"Levy Fidélix","value":0.12},{"name":"Aécio","value":0.13},{"name":"Luciana Genro","value":0.02},{"name":"Eymael","value":0.03},{"name":"Pastor Everaldo","value":0.3},{"name":"Mauro Iasi","value":0.29},{"name":"Rui Costa Pimenta","value":0.84},{"name":"Zé Maria","value":-0.04}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":3.11},{"name":"Marina","value":3.11},{"name":"Levy Fidélix","value":3.11},{"name":"Aécio","value":-0.49},{"name":"Luciana Genro","value":3.11},{"name":"Eymael","value":-0.53},{"name":"Pastor Everaldo","value":0.38},{"name":"Mauro Iasi","value":3.11},{"name":"Rui Costa Pimenta","value":3.11},{"name":"Zé Maria","value":3.11}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":0.16},{"name":"Marina","value":0.44},{"name":"Levy Fidélix","value":1.94},{"name":"Aécio","value":0.22},{"name":"Luciana Genro","value":0.5},{"name":"Eymael","value":0.11},{"name":"Pastor Everaldo","value":0.66},{"name":"Mauro Iasi","value":1.32},{"name":"Rui Costa Pimenta","value":1.17},{"name":"Zé Maria","value":1.46}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":0.34},{"name":"Marina","value":0.04},{"name":"Levy Fidélix","value":0.46},{"name":"Aécio","value":0.15},{"name":"Luciana Genro","value":1.01},{"name":"Eymael","value":0.12},{"name":"Pastor Everaldo","value":0.28},{"name":"Mauro Iasi","value":0.85},{"name":"Rui Costa Pimenta","value":-0.24},{"name":"Zé Maria","value":-0.06}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-3.3},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-5},{"name":"Luciana Genro","value":-3.25},{"name":"Eymael","value":0},{"name":"Pastor Everaldo","value":-3.26},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":-3.37},{"name":"Zé Maria","value":-3.51}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":0.48},{"name":"Marina","value":-0.15},{"name":"Levy Fidélix","value":3.64},{"name":"Aécio","value":0.03},{"name":"Luciana Genro","value":3.64},{"name":"Eymael","value":-0.23},{"name":"Pastor Everaldo","value":-0.08},{"name":"Mauro Iasi","value":3.64},{"name":"Rui Costa Pimenta","value":3.64},{"name":"Zé Maria","value":3.64}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-3.62},{"name":"Marina","value":-3.54},{"name":"Levy Fidélix","value":-3.06},{"name":"Aécio","value":-2.95},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.27},{"name":"Pastor Everaldo","value":-2.76},{"name":"Mauro Iasi","value":-2.53},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":-2.49}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":0.56},{"name":"Marina","value":0.13},{"name":"Levy Fidélix","value":0.41},{"name":"Aécio","value":0.43},{"name":"Luciana Genro","value":0.7},{"name":"Eymael","value":0.09},{"name":"Pastor Everaldo","value":0.45},{"name":"Mauro Iasi","value":0.76},{"name":"Rui Costa Pimenta","value":1.11},{"name":"Zé Maria","value":0.95}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":0.4},{"name":"Marina","value":0.15},{"name":"Levy Fidélix","value":0.24},{"name":"Aécio","value":-0.5},{"name":"Luciana Genro","value":3.43},{"name":"Eymael","value":-0.08},{"name":"Pastor Everaldo","value":0.26},{"name":"Mauro Iasi","value":0.81},{"name":"Rui Costa Pimenta","value":3.43},{"name":"Zé Maria","value":3.43}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":0.54},{"name":"Marina","value":0.13},{"name":"Levy Fidélix","value":0.51},{"name":"Aécio","value":0.05},{"name":"Luciana Genro","value":0.29},{"name":"Eymael","value":0.19},{"name":"Pastor Everaldo","value":0.35},{"name":"Mauro Iasi","value":0.79},{"name":"Rui Costa Pimenta","value":0.95},{"name":"Zé Maria","value":0.87}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":3.4},{"name":"Marina","value":-0.28},{"name":"Levy Fidélix","value":0.3},{"name":"Aécio","value":-0.01},{"name":"Luciana Genro","value":0.2},{"name":"Eymael","value":-0.16},{"name":"Pastor Everaldo","value":-0.16},{"name":"Mauro Iasi","value":0.34},{"name":"Rui Costa Pimenta","value":0.65},{"name":"Zé Maria","value":-0.36}
  				],
  				'saude' : [
            {"name":"Eduardo","value":0.33},{"name":"Marina","value":0.23},{"name":"Levy Fidélix","value":0.44},{"name":"Aécio","value":0.23},{"name":"Luciana Genro","value":-0.23},{"name":"Eymael","value":-0.11},{"name":"Pastor Everaldo","value":0.45},{"name":"Mauro Iasi","value":0.93},{"name":"Rui Costa Pimenta","value":0.58},{"name":"Zé Maria","value":0.35}
  				]
  		],

  		comparativo : [
  				'cultura' : [
            {"name":"Eduardo","value":3.23},{"name":"Marina","value":-0.65},{"name":"Levy Fidélix","value":3.23},{"name":"Aécio","value":-0.67},{"name":"Luciana Genro","value":3.23},{"name":"Eymael","value":-0.38},{"name":"Pastor Everaldo","value":-0.87},{"name":"Mauro Iasi","value":1.15},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":3.23}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-0.72},{"name":"Marina","value":-0.02},{"name":"Levy Fidélix","value":0.77},{"name":"Aécio","value":0.55},{"name":"Luciana Genro","value":-0.65},{"name":"Eymael","value":0.37},{"name":"Pastor Everaldo","value":-0.66},{"name":"Mauro Iasi","value":0.92},{"name":"Rui Costa Pimenta","value":0.38},{"name":"Zé Maria","value":-0.39}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":-0.09},{"name":"Marina","value":-0.16},{"name":"Levy Fidélix","value":0.13},{"name":"Aécio","value":-0.4},{"name":"Luciana Genro","value":-0.47},{"name":"Eymael","value":-0.29},{"name":"Pastor Everaldo","value":-0.78},{"name":"Mauro Iasi","value":3.83},{"name":"Rui Costa Pimenta","value":2.75},{"name":"Zé Maria","value":3.83}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-0.24},{"name":"Marina","value":0.61},{"name":"Levy Fidélix","value":4.18},{"name":"Aécio","value":0.24},{"name":"Luciana Genro","value":-0.63},{"name":"Eymael","value":-0.05},{"name":"Pastor Everaldo","value":0.78},{"name":"Mauro Iasi","value":-0.04},{"name":"Rui Costa Pimenta","value":0.72},{"name":"Zé Maria","value":0.31}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.22},{"name":"Marina","value":0.2},{"name":"Levy Fidélix","value":0.91},{"name":"Aécio","value":0.77},{"name":"Luciana Genro","value":-0.2},{"name":"Eymael","value":0.33},{"name":"Pastor Everaldo","value":0.44},{"name":"Mauro Iasi","value":0.36},{"name":"Rui Costa Pimenta","value":1.23},{"name":"Zé Maria","value":0.36}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":3.37},{"name":"Marina","value":3.37},{"name":"Levy Fidélix","value":3.37},{"name":"Aécio","value":-0.48},{"name":"Luciana Genro","value":3.37},{"name":"Eymael","value":-0.13},{"name":"Pastor Everaldo","value":0.37},{"name":"Mauro Iasi","value":-0.61},{"name":"Rui Costa Pimenta","value":3.37},{"name":"Zé Maria","value":3.37}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-0.73},{"name":"Marina","value":-0.17},{"name":"Levy Fidélix","value":3.96},{"name":"Aécio","value":-0.6},{"name":"Luciana Genro","value":-0.49},{"name":"Eymael","value":-0.07},{"name":"Pastor Everaldo","value":0.39},{"name":"Mauro Iasi","value":-0.29},{"name":"Rui Costa Pimenta","value":1.71},{"name":"Zé Maria","value":0.68}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-0.57},{"name":"Marina","value":-0.12},{"name":"Levy Fidélix","value":0.66},{"name":"Aécio","value":0.08},{"name":"Luciana Genro","value":-0.37},{"name":"Eymael","value":-0.01},{"name":"Pastor Everaldo","value":-0.12},{"name":"Mauro Iasi","value":-0.43},{"name":"Rui Costa Pimenta","value":-0.15},{"name":"Zé Maria","value":-0.33}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-4.62},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-5},{"name":"Luciana Genro","value":-4.65},{"name":"Eymael","value":0},{"name":"Pastor Everaldo","value":-4.22},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":-3.8},{"name":"Zé Maria","value":-4.03}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-1.11},{"name":"Marina","value":-0.99},{"name":"Levy Fidélix","value":3.42},{"name":"Aécio","value":-0.48},{"name":"Luciana Genro","value":3.42},{"name":"Eymael","value":0.17},{"name":"Pastor Everaldo","value":-0.45},{"name":"Mauro Iasi","value":-1.19},{"name":"Rui Costa Pimenta","value":3.42},{"name":"Zé Maria","value":3.42}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-4.49},{"name":"Marina","value":-4},{"name":"Levy Fidélix","value":-4.5},{"name":"Aécio","value":-3.2},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-2.75},{"name":"Pastor Everaldo","value":-3.24},{"name":"Mauro Iasi","value":-4.67},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":-3.72}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":-1.6},{"name":"Marina","value":-0.76},{"name":"Levy Fidélix","value":-0.59},{"name":"Aécio","value":-1.61},{"name":"Luciana Genro","value":-1.59},{"name":"Eymael","value":-0.96},{"name":"Pastor Everaldo","value":-1.7},{"name":"Mauro Iasi","value":2.91},{"name":"Rui Costa Pimenta","value":0.18},{"name":"Zé Maria","value":-0.77}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":-0.27},{"name":"Marina","value":-0.02},{"name":"Levy Fidélix","value":-1.16},{"name":"Aécio","value":-0.38},{"name":"Luciana Genro","value":3.84},{"name":"Eymael","value":2.34},{"name":"Pastor Everaldo","value":0.3},{"name":"Mauro Iasi","value":3.84},{"name":"Rui Costa Pimenta","value":3.84},{"name":"Zé Maria","value":3.84}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":-1.55},{"name":"Marina","value":-1.21},{"name":"Levy Fidélix","value":-1.54},{"name":"Aécio","value":-1.06},{"name":"Luciana Genro","value":-1.79},{"name":"Eymael","value":-1.27},{"name":"Pastor Everaldo","value":-1.57},{"name":"Mauro Iasi","value":-1.62},{"name":"Rui Costa Pimenta","value":-0.2},{"name":"Zé Maria","value":-1.39}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":4.26},{"name":"Marina","value":0.28},{"name":"Levy Fidélix","value":0.76},{"name":"Aécio","value":0.53},{"name":"Luciana Genro","value":-0.27},{"name":"Eymael","value":4.26},{"name":"Pastor Everaldo","value":0.2},{"name":"Mauro Iasi","value":-0.39},{"name":"Rui Costa Pimenta","value":4.09},{"name":"Zé Maria","value":0.03}
  				],
  				'saude' : [
            {"name":"Eduardo","value":-0.61},{"name":"Marina","value":-0.08},{"name":"Levy Fidélix","value":0.02},{"name":"Aécio","value":-0.04},{"name":"Luciana Genro","value":-0.6},{"name":"Eymael","value":-0.09},{"name":"Pastor Everaldo","value":-0.83},{"name":"Mauro Iasi","value":-0.52},{"name":"Rui Costa Pimenta","value":1.86},{"name":"Zé Maria","value":0.09}
  				]
  		]
  	],

  	marina: [
  		testeCego : [
  				'cultura' : [
            {"name":"Eduardo","value":3.52},{"name":"Dilma","value":-0.06},{"name":"Levy Fidélix","value":3.52},{"name":"Aécio","value":-0.12},{"name":"Luciana Genro","value":3.52},{"name":"Eymael","value":-0.12},{"name":"Pastor Everaldo","value":0.08},{"name":"Mauro Iasi","value":-0.1},{"name":"Rui Costa Pimenta","value":0.66},{"name":"Zé Maria","value":3.52}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-0.05},{"name":"Dilma","value":-0.54},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":0.01},{"name":"Luciana Genro","value":0.24},{"name":"Eymael","value":0.15},{"name":"Pastor Everaldo","value":-0.23},{"name":"Mauro Iasi","value":0.65},{"name":"Rui Costa Pimenta","value":0.28},{"name":"Zé Maria","value":-0.38}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":0.25},{"name":"Dilma","value":-0.11},{"name":"Levy Fidélix","value":0.4},{"name":"Aécio","value":0.06},{"name":"Luciana Genro","value":0.49},{"name":"Eymael","value":-0.03},{"name":"Pastor Everaldo","value":0.3},{"name":"Mauro Iasi","value":0.75},{"name":"Rui Costa Pimenta","value":1.15},{"name":"Zé Maria","value":3.67}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-0.16},{"name":"Dilma","value":-0.06},{"name":"Levy Fidélix","value":3.36},{"name":"Aécio","value":-0.26},{"name":"Luciana Genro","value":-0.37},{"name":"Eymael","value":-0.68},{"name":"Pastor Everaldo","value":-0.4},{"name":"Mauro Iasi","value":0.01},{"name":"Rui Costa Pimenta","value":0.24},{"name":"Zé Maria","value":0.13}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.1},{"name":"Dilma","value":-0.11},{"name":"Levy Fidélix","value":0.01},{"name":"Aécio","value":0.02},{"name":"Luciana Genro","value":-0.09},{"name":"Eymael","value":-0.08},{"name":"Pastor Everaldo","value":0.19},{"name":"Mauro Iasi","value":0.18},{"name":"Rui Costa Pimenta","value":0.74},{"name":"Zé Maria","value":-0.15}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":0},{"name":"Dilma","value":-3.11},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.6},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.64},{"name":"Pastor Everaldo","value":-2.73},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-0.28},{"name":"Dilma","value":-0.44},{"name":"Levy Fidélix","value":1.5},{"name":"Aécio","value":-0.22},{"name":"Luciana Genro","value":0.06},{"name":"Eymael","value":-0.33},{"name":"Pastor Everaldo","value":0.22},{"name":"Mauro Iasi","value":0.87},{"name":"Rui Costa Pimenta","value":0.73},{"name":"Zé Maria","value":1.01}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":0.3},{"name":"Dilma","value":-0.04},{"name":"Levy Fidélix","value":0.42},{"name":"Aécio","value":0.11},{"name":"Luciana Genro","value":0.97},{"name":"Eymael","value":0.08},{"name":"Pastor Everaldo","value":0.24},{"name":"Mauro Iasi","value":0.81},{"name":"Rui Costa Pimenta","value":-0.28},{"name":"Zé Maria","value":-0.1}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-3.3},{"name":"Dilma","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-5},{"name":"Luciana Genro","value":-3.25},{"name":"Eymael","value":0},{"name":"Pastor Everaldo","value":-3.26},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":-3.37},{"name":"Zé Maria","value":-3.51}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":0.63},{"name":"Dilma","value":0.15},{"name":"Levy Fidélix","value":3.79},{"name":"Aécio","value":0.18},{"name":"Luciana Genro","value":3.79},{"name":"Eymael","value":-0.08},{"name":"Pastor Everaldo","value":0.07},{"name":"Mauro Iasi","value":3.79},{"name":"Rui Costa Pimenta","value":3.79},{"name":"Zé Maria","value":3.79}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-0.08},{"name":"Dilma","value":3.54},{"name":"Levy Fidélix","value":0.49},{"name":"Aécio","value":0.59},{"name":"Luciana Genro","value":3.54},{"name":"Eymael","value":0.28},{"name":"Pastor Everaldo","value":0.78},{"name":"Mauro Iasi","value":1.01},{"name":"Rui Costa Pimenta","value":3.54},{"name":"Zé Maria","value":1.06}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":0.43},{"name":"Dilma","value":-0.13},{"name":"Levy Fidélix","value":0.28},{"name":"Aécio","value":0.3},{"name":"Luciana Genro","value":0.57},{"name":"Eymael","value":-0.04},{"name":"Pastor Everaldo","value":0.32},{"name":"Mauro Iasi","value":0.63},{"name":"Rui Costa Pimenta","value":0.98},{"name":"Zé Maria","value":0.82}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":0.25},{"name":"Dilma","value":-0.15},{"name":"Levy Fidélix","value":0.09},{"name":"Aécio","value":-0.65},{"name":"Luciana Genro","value":3.28},{"name":"Eymael","value":-0.23},{"name":"Pastor Everaldo","value":0.11},{"name":"Mauro Iasi","value":0.67},{"name":"Rui Costa Pimenta","value":3.28},{"name":"Zé Maria","value":3.28}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":0.4},{"name":"Dilma","value":-0.13},{"name":"Levy Fidélix","value":0.38},{"name":"Aécio","value":-0.09},{"name":"Luciana Genro","value":0.16},{"name":"Eymael","value":0.05},{"name":"Pastor Everaldo","value":0.22},{"name":"Mauro Iasi","value":0.65},{"name":"Rui Costa Pimenta","value":0.82},{"name":"Zé Maria","value":0.73}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":3.68},{"name":"Dilma","value":0.28},{"name":"Levy Fidélix","value":0.58},{"name":"Aécio","value":0.27},{"name":"Luciana Genro","value":0.48},{"name":"Eymael","value":0.12},{"name":"Pastor Everaldo","value":0.12},{"name":"Mauro Iasi","value":0.62},{"name":"Rui Costa Pimenta","value":0.93},{"name":"Zé Maria","value":-0.08}
  				],
  				'saude' : [
            {"name":"Eduardo","value":0.1},{"name":"Dilma","value":-0.23},{"name":"Levy Fidélix","value":0.21},{"name":"Aécio","value":0},{"name":"Luciana Genro","value":-0.46},{"name":"Eymael","value":-0.34},{"name":"Pastor Everaldo","value":0.22},{"name":"Mauro Iasi","value":0.7},{"name":"Rui Costa Pimenta","value":0.35},{"name":"Zé Maria","value":0.12}
  				]
  		],

  		comparativo : [
  				'cultura' : [
            {"name":"Eduardo","value":3.88},{"name":"Dilma","value":0.65},{"name":"Levy Fidélix","value":3.88},{"name":"Aécio","value":-0.02},{"name":"Luciana Genro","value":3.88},{"name":"Eymael","value":0.27},{"name":"Pastor Everaldo","value":-0.21},{"name":"Mauro Iasi","value":1.8},{"name":"Rui Costa Pimenta","value":0.66},{"name":"Zé Maria","value":3.88}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-0.7},{"name":"Dilma","value":0.02},{"name":"Levy Fidélix","value":0.79},{"name":"Aécio","value":0.57},{"name":"Luciana Genro","value":-0.63},{"name":"Eymael","value":0.39},{"name":"Pastor Everaldo","value":-0.64},{"name":"Mauro Iasi","value":0.94},{"name":"Rui Costa Pimenta","value":0.4},{"name":"Zé Maria","value":-0.37}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":0.07},{"name":"Dilma","value":0.16},{"name":"Levy Fidélix","value":0.29},{"name":"Aécio","value":-0.24},{"name":"Luciana Genro","value":-0.31},{"name":"Eymael","value":-0.14},{"name":"Pastor Everaldo","value":-0.62},{"name":"Mauro Iasi","value":3.99},{"name":"Rui Costa Pimenta","value":2.91},{"name":"Zé Maria","value":3.99}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-0.85},{"name":"Dilma","value":-0.61},{"name":"Levy Fidélix","value":3.56},{"name":"Aécio","value":-0.38},{"name":"Luciana Genro","value":-1.25},{"name":"Eymael","value":-0.67},{"name":"Pastor Everaldo","value":0.17},{"name":"Mauro Iasi","value":-0.66},{"name":"Rui Costa Pimenta","value":0.1},{"name":"Zé Maria","value":-0.31}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.42},{"name":"Dilma","value":-0.2},{"name":"Levy Fidélix","value":0.72},{"name":"Aécio","value":0.57},{"name":"Luciana Genro","value":-0.39},{"name":"Eymael","value":0.14},{"name":"Pastor Everaldo","value":0.24},{"name":"Mauro Iasi","value":0.17},{"name":"Rui Costa Pimenta","value":1.04},{"name":"Zé Maria","value":0.16}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":0},{"name":"Dilma","value":-3.37},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.86},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.5},{"name":"Pastor Everaldo","value":-3},{"name":"Mauro Iasi","value":-3.98},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-0.57},{"name":"Dilma","value":0.17},{"name":"Levy Fidélix","value":4.13},{"name":"Aécio","value":-0.44},{"name":"Luciana Genro","value":-0.32},{"name":"Eymael","value":0.1},{"name":"Pastor Everaldo","value":0.56},{"name":"Mauro Iasi","value":-0.12},{"name":"Rui Costa Pimenta","value":1.88},{"name":"Zé Maria","value":0.84}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-0.45},{"name":"Dilma","value":0.12},{"name":"Levy Fidélix","value":0.78},{"name":"Aécio","value":0.2},{"name":"Luciana Genro","value":-0.24},{"name":"Eymael","value":0.11},{"name":"Pastor Everaldo","value":0},{"name":"Mauro Iasi","value":-0.3},{"name":"Rui Costa Pimenta","value":-0.03},{"name":"Zé Maria","value":-0.2}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-4.62},{"name":"Dilma","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-5},{"name":"Luciana Genro","value":-4.65},{"name":"Eymael","value":0},{"name":"Pastor Everaldo","value":-4.22},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":-3.8},{"name":"Zé Maria","value":-4.03}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-0.12},{"name":"Dilma","value":0.99},{"name":"Levy Fidélix","value":4.41},{"name":"Aécio","value":0.5},{"name":"Luciana Genro","value":4.41},{"name":"Eymael","value":1.16},{"name":"Pastor Everaldo","value":0.54},{"name":"Mauro Iasi","value":-0.2},{"name":"Rui Costa Pimenta","value":4.41},{"name":"Zé Maria","value":4.41}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-0.49},{"name":"Dilma","value":4},{"name":"Levy Fidélix","value":-0.5},{"name":"Aécio","value":0.8},{"name":"Luciana Genro","value":4},{"name":"Eymael","value":1.25},{"name":"Pastor Everaldo","value":0.76},{"name":"Mauro Iasi","value":-0.67},{"name":"Rui Costa Pimenta","value":4},{"name":"Zé Maria","value":0.28}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":-0.84},{"name":"Dilma","value":0.76},{"name":"Levy Fidélix","value":0.17},{"name":"Aécio","value":-0.85},{"name":"Luciana Genro","value":-0.83},{"name":"Eymael","value":-0.2},{"name":"Pastor Everaldo","value":-0.95},{"name":"Mauro Iasi","value":3.67},{"name":"Rui Costa Pimenta","value":0.94},{"name":"Zé Maria","value":-0.02}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":-0.25},{"name":"Dilma","value":0.02},{"name":"Levy Fidélix","value":-1.13},{"name":"Aécio","value":-0.36},{"name":"Luciana Genro","value":3.87},{"name":"Eymael","value":2.37},{"name":"Pastor Everaldo","value":0.32},{"name":"Mauro Iasi","value":3.87},{"name":"Rui Costa Pimenta","value":3.87},{"name":"Zé Maria","value":3.87}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":-0.34},{"name":"Dilma","value":1.21},{"name":"Levy Fidélix","value":-0.33},{"name":"Aécio","value":0.15},{"name":"Luciana Genro","value":-0.58},{"name":"Eymael","value":-0.06},{"name":"Pastor Everaldo","value":-0.35},{"name":"Mauro Iasi","value":-0.41},{"name":"Rui Costa Pimenta","value":1.01},{"name":"Zé Maria","value":-0.18}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":3.97},{"name":"Dilma","value":-0.28},{"name":"Levy Fidélix","value":0.47},{"name":"Aécio","value":0.25},{"name":"Luciana Genro","value":-0.55},{"name":"Eymael","value":3.97},{"name":"Pastor Everaldo","value":-0.08},{"name":"Mauro Iasi","value":-0.67},{"name":"Rui Costa Pimenta","value":3.81},{"name":"Zé Maria","value":-0.25}
  				],
  				'saude' : [
            {"name":"Eduardo","value":-0.53},{"name":"Dilma","value":0.08},{"name":"Levy Fidélix","value":0.1},{"name":"Aécio","value":0.04},{"name":"Luciana Genro","value":-0.53},{"name":"Eymael","value":-0.01},{"name":"Pastor Everaldo","value":-0.76},{"name":"Mauro Iasi","value":-0.45},{"name":"Rui Costa Pimenta","value":1.94},{"name":"Zé Maria","value":0.17}
  				]
  		]
  	],

  	fidelix: [
  		testeCego : [
  				'cultura' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":-3.52},{"name":"Levy Fidélix","value":-3.58},{"name":"Aécio","value":-3.64},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.64},{"name":"Pastor Everaldo","value":-3.44},{"name":"Mauro Iasi","value":-3.62},{"name":"Rui Costa Pimenta","value":-2.86},{"name":"Zé Maria","value":0}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-0.06},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":-0.55},{"name":"Aécio","value":0},{"name":"Luciana Genro","value":0.23},{"name":"Eymael","value":0.15},{"name":"Pastor Everaldo","value":-0.24},{"name":"Mauro Iasi","value":0.64},{"name":"Rui Costa Pimenta","value":0.27},{"name":"Zé Maria","value":-0.38}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":-0.16},{"name":"Marina","value":-0.4},{"name":"Levy Fidélix","value":-0.51},{"name":"Aécio","value":-0.34},{"name":"Luciana Genro","value":0.09},{"name":"Eymael","value":-0.44},{"name":"Pastor Everaldo","value":-0.1},{"name":"Mauro Iasi","value":0.35},{"name":"Rui Costa Pimenta","value":0.75},{"name":"Zé Maria","value":3.27}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-3.52},{"name":"Marina","value":-3.36},{"name":"Levy Fidélix","value":-3.42},{"name":"Aécio","value":-3.63},{"name":"Luciana Genro","value":-3.73},{"name":"Eymael","value":-4.05},{"name":"Pastor Everaldo","value":-3.76},{"name":"Mauro Iasi","value":-3.35},{"name":"Rui Costa Pimenta","value":-3.12},{"name":"Zé Maria","value":-3.24}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.11},{"name":"Marina","value":-0.01},{"name":"Levy Fidélix","value":-0.12},{"name":"Aécio","value":0.01},{"name":"Luciana Genro","value":-0.1},{"name":"Eymael","value":-0.09},{"name":"Pastor Everaldo","value":0.18},{"name":"Mauro Iasi","value":0.17},{"name":"Rui Costa Pimenta","value":0.72},{"name":"Zé Maria","value":-0.16}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":-3.11},{"name":"Aécio","value":-3.6},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.64},{"name":"Pastor Everaldo","value":-2.73},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-1.78},{"name":"Marina","value":-1.5},{"name":"Levy Fidélix","value":-1.94},{"name":"Aécio","value":-1.72},{"name":"Luciana Genro","value":-1.45},{"name":"Eymael","value":-1.83},{"name":"Pastor Everaldo","value":-1.28},{"name":"Mauro Iasi","value":-0.63},{"name":"Rui Costa Pimenta","value":-0.77},{"name":"Zé Maria","value":-0.49}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-0.12},{"name":"Marina","value":-0.42},{"name":"Levy Fidélix","value":-0.46},{"name":"Aécio","value":-0.31},{"name":"Luciana Genro","value":0.55},{"name":"Eymael","value":-0.34},{"name":"Pastor Everaldo","value":-0.18},{"name":"Mauro Iasi","value":0.39},{"name":"Rui Costa Pimenta","value":-0.7},{"name":"Zé Maria","value":-0.52}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-3.3},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-5},{"name":"Luciana Genro","value":-3.25},{"name":"Eymael","value":0},{"name":"Pastor Everaldo","value":-3.26},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":-3.37},{"name":"Zé Maria","value":-3.51}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-3.15},{"name":"Marina","value":-3.79},{"name":"Levy Fidélix","value":-3.64},{"name":"Aécio","value":-3.61},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.87},{"name":"Pastor Everaldo","value":-3.72},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-0.57},{"name":"Marina","value":-0.49},{"name":"Levy Fidélix","value":3.06},{"name":"Aécio","value":0.11},{"name":"Luciana Genro","value":3.06},{"name":"Eymael","value":-0.21},{"name":"Pastor Everaldo","value":0.29},{"name":"Mauro Iasi","value":0.52},{"name":"Rui Costa Pimenta","value":3.06},{"name":"Zé Maria","value":0.57}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":0.15},{"name":"Marina","value":-0.28},{"name":"Levy Fidélix","value":-0.41},{"name":"Aécio","value":0.02},{"name":"Luciana Genro","value":0.29},{"name":"Eymael","value":-0.32},{"name":"Pastor Everaldo","value":0.04},{"name":"Mauro Iasi","value":0.35},{"name":"Rui Costa Pimenta","value":0.7},{"name":"Zé Maria","value":0.54}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":0.16},{"name":"Marina","value":-0.09},{"name":"Levy Fidélix","value":-0.24},{"name":"Aécio","value":-0.74},{"name":"Luciana Genro","value":3.19},{"name":"Eymael","value":-0.32},{"name":"Pastor Everaldo","value":0.02},{"name":"Mauro Iasi","value":0.57},{"name":"Rui Costa Pimenta","value":3.19},{"name":"Zé Maria","value":3.19}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":0.02},{"name":"Marina","value":-0.38},{"name":"Levy Fidélix","value":-0.51},{"name":"Aécio","value":-0.47},{"name":"Luciana Genro","value":-0.22},{"name":"Eymael","value":-0.33},{"name":"Pastor Everaldo","value":-0.16},{"name":"Mauro Iasi","value":0.27},{"name":"Rui Costa Pimenta","value":0.44},{"name":"Zé Maria","value":0.35}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":3.1},{"name":"Marina","value":-0.58},{"name":"Levy Fidélix","value":-0.3},{"name":"Aécio","value":-0.31},{"name":"Luciana Genro","value":-0.09},{"name":"Eymael","value":-0.46},{"name":"Pastor Everaldo","value":-0.45},{"name":"Mauro Iasi","value":0.04},{"name":"Rui Costa Pimenta","value":0.35},{"name":"Zé Maria","value":-0.66}
  				],
  				'saude' : [
            {"name":"Eduardo","value":-0.1},{"name":"Marina","value":-0.21},{"name":"Levy Fidélix","value":-0.44},{"name":"Aécio","value":-0.21},{"name":"Luciana Genro","value":-0.66},{"name":"Eymael","value":-0.55},{"name":"Pastor Everaldo","value":0.01},{"name":"Mauro Iasi","value":0.5},{"name":"Rui Costa Pimenta","value":0.15},{"name":"Zé Maria","value":-0.09}
  				]
  		],

  		comparativo : [
  				'cultura' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":-3.88},{"name":"Levy Fidélix","value":-3.23},{"name":"Aécio","value":-3.9},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.61},{"name":"Pastor Everaldo","value":-4.1},{"name":"Mauro Iasi","value":-2.08},{"name":"Rui Costa Pimenta","value":-3.23},{"name":"Zé Maria","value":0}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-1.49},{"name":"Marina","value":-0.79},{"name":"Levy Fidélix","value":-0.77},{"name":"Aécio","value":-0.22},{"name":"Luciana Genro","value":-1.42},{"name":"Eymael","value":-0.4},{"name":"Pastor Everaldo","value":-1.43},{"name":"Mauro Iasi","value":0.15},{"name":"Rui Costa Pimenta","value":-0.39},{"name":"Zé Maria","value":-1.16}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":-0.22},{"name":"Marina","value":-0.29},{"name":"Levy Fidélix","value":-0.13},{"name":"Aécio","value":-0.53},{"name":"Luciana Genro","value":-0.6},{"name":"Eymael","value":-0.42},{"name":"Pastor Everaldo","value":-0.91},{"name":"Mauro Iasi","value":3.7},{"name":"Rui Costa Pimenta","value":2.62},{"name":"Zé Maria","value":3.7}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-4.41},{"name":"Marina","value":-3.56},{"name":"Levy Fidélix","value":-4.18},{"name":"Aécio","value":-3.94},{"name":"Luciana Genro","value":-4.81},{"name":"Eymael","value":-4.23},{"name":"Pastor Everaldo","value":-3.4},{"name":"Mauro Iasi","value":-4.22},{"name":"Rui Costa Pimenta","value":-3.46},{"name":"Zé Maria","value":-3.87}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-1.14},{"name":"Marina","value":-0.72},{"name":"Levy Fidélix","value":-0.91},{"name":"Aécio","value":-0.15},{"name":"Luciana Genro","value":-1.11},{"name":"Eymael","value":-0.58},{"name":"Pastor Everaldo","value":-0.48},{"name":"Mauro Iasi","value":-0.55},{"name":"Rui Costa Pimenta","value":0.32},{"name":"Zé Maria","value":-0.56}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":-3.37},{"name":"Aécio","value":-3.86},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.5},{"name":"Pastor Everaldo","value":-3},{"name":"Mauro Iasi","value":-3.98},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-4.7},{"name":"Marina","value":-4.13},{"name":"Levy Fidélix","value":-3.96},{"name":"Aécio","value":-4.57},{"name":"Luciana Genro","value":-4.45},{"name":"Eymael","value":-4.03},{"name":"Pastor Everaldo","value":-3.57},{"name":"Mauro Iasi","value":-4.25},{"name":"Rui Costa Pimenta","value":-2.25},{"name":"Zé Maria","value":-3.28}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-1.23},{"name":"Marina","value":-0.78},{"name":"Levy Fidélix","value":-0.66},{"name":"Aécio","value":-0.58},{"name":"Luciana Genro","value":-1.02},{"name":"Eymael","value":-0.67},{"name":"Pastor Everaldo","value":-0.78},{"name":"Mauro Iasi","value":-1.08},{"name":"Rui Costa Pimenta","value":-0.81},{"name":"Zé Maria","value":-0.98}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-4.62},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-5},{"name":"Luciana Genro","value":-4.65},{"name":"Eymael","value":0},{"name":"Pastor Everaldo","value":-4.22},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":-3.8},{"name":"Zé Maria","value":-4.03}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-4.53},{"name":"Marina","value":-4.41},{"name":"Levy Fidélix","value":-3.42},{"name":"Aécio","value":-3.9},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.25},{"name":"Pastor Everaldo","value":-3.86},{"name":"Mauro Iasi","value":-4.61},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'outros' : [
            {"name":"Eduardo","value":0.01},{"name":"Marina","value":0.5},{"name":"Levy Fidélix","value":4.5},{"name":"Aécio","value":1.3},{"name":"Luciana Genro","value":4.5},{"name":"Eymael","value":1.75},{"name":"Pastor Everaldo","value":1.26},{"name":"Mauro Iasi","value":-0.17},{"name":"Rui Costa Pimenta","value":4.5},{"name":"Zé Maria","value":0.78}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":-1.01},{"name":"Marina","value":-0.17},{"name":"Levy Fidélix","value":0.59},{"name":"Aécio","value":-1.02},{"name":"Luciana Genro","value":-1},{"name":"Eymael","value":-0.37},{"name":"Pastor Everaldo","value":-1.11},{"name":"Mauro Iasi","value":3.5},{"name":"Rui Costa Pimenta","value":0.77},{"name":"Zé Maria","value":-0.18}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":0.89},{"name":"Marina","value":1.13},{"name":"Levy Fidélix","value":1.16},{"name":"Aécio","value":0.77},{"name":"Luciana Genro","value":5},{"name":"Eymael","value":3.5},{"name":"Pastor Everaldo","value":1.46},{"name":"Mauro Iasi","value":5},{"name":"Rui Costa Pimenta","value":5},{"name":"Zé Maria","value":5}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":-0.01},{"name":"Marina","value":0.33},{"name":"Levy Fidélix","value":1.54},{"name":"Aécio","value":0.47},{"name":"Luciana Genro","value":-0.25},{"name":"Eymael","value":0.26},{"name":"Pastor Everaldo","value":-0.03},{"name":"Mauro Iasi","value":-0.08},{"name":"Rui Costa Pimenta","value":1.34},{"name":"Zé Maria","value":0.14}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":3.5},{"name":"Marina","value":-0.47},{"name":"Levy Fidélix","value":-0.76},{"name":"Aécio","value":-0.22},{"name":"Luciana Genro","value":-1.03},{"name":"Eymael","value":3.5},{"name":"Pastor Everaldo","value":-0.56},{"name":"Mauro Iasi","value":-1.15},{"name":"Rui Costa Pimenta","value":3.33},{"name":"Zé Maria","value":-0.72}
  				],
  				'saude' : [
            {"name":"Eduardo","value":-0.63},{"name":"Marina","value":-0.1},{"name":"Levy Fidélix","value":-0.02},{"name":"Aécio","value":-0.06},{"name":"Luciana Genro","value":-0.63},{"name":"Eymael","value":-0.11},{"name":"Pastor Everaldo","value":-0.86},{"name":"Mauro Iasi","value":-0.55},{"name":"Rui Costa Pimenta","value":1.84},{"name":"Zé Maria","value":0.06}
  				]
  		]
  	],

  	aecio: [
  		testeCego : [
  				'cultura' : [
            {"name":"Eduardo","value":3.64},{"name":"Marina","value":0.12},{"name":"Levy Fidélix","value":3.64},{"name":"Dilma","value":0.07},{"name":"Luciana Genro","value":3.64},{"name":"Eymael","value":0},{"name":"Pastor Everaldo","value":0.21},{"name":"Mauro Iasi","value":0.02},{"name":"Rui Costa Pimenta","value":0.79},{"name":"Zé Maria","value":3.64}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-0.06},{"name":"Marina","value":-0.01},{"name":"Levy Fidélix","value":0},{"name":"Dilma","value":-0.55},{"name":"Luciana Genro","value":0.23},{"name":"Eymael","value":0.15},{"name":"Pastor Everaldo","value":-0.24},{"name":"Mauro Iasi","value":0.64},{"name":"Rui Costa Pimenta","value":0.27},{"name":"Zé Maria","value":-0.39}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":0.19},{"name":"Marina","value":-0.06},{"name":"Levy Fidélix","value":0.34},{"name":"Dilma","value":-0.17},{"name":"Luciana Genro","value":0.43},{"name":"Eymael","value":-0.09},{"name":"Pastor Everaldo","value":0.24},{"name":"Mauro Iasi","value":0.7},{"name":"Rui Costa Pimenta","value":1.09},{"name":"Zé Maria","value":3.62}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":0.11},{"name":"Marina","value":0.26},{"name":"Levy Fidélix","value":3.63},{"name":"Dilma","value":0.21},{"name":"Luciana Genro","value":-0.1},{"name":"Eymael","value":-0.42},{"name":"Pastor Everaldo","value":-0.13},{"name":"Mauro Iasi","value":0.27},{"name":"Rui Costa Pimenta","value":0.5},{"name":"Zé Maria","value":0.39}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.12},{"name":"Marina","value":-0.02},{"name":"Levy Fidélix","value":-0.01},{"name":"Dilma","value":-0.13},{"name":"Luciana Genro","value":-0.11},{"name":"Eymael","value":-0.1},{"name":"Pastor Everaldo","value":0.17},{"name":"Mauro Iasi","value":0.16},{"name":"Rui Costa Pimenta","value":0.71},{"name":"Zé Maria","value":-0.17}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":3.6},{"name":"Marina","value":3.6},{"name":"Levy Fidélix","value":3.6},{"name":"Dilma","value":0.49},{"name":"Luciana Genro","value":3.6},{"name":"Eymael","value":-0.04},{"name":"Pastor Everaldo","value":0.87},{"name":"Mauro Iasi","value":3.6},{"name":"Rui Costa Pimenta","value":3.6},{"name":"Zé Maria","value":3.6}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-0.06},{"name":"Marina","value":0.22},{"name":"Levy Fidélix","value":1.72},{"name":"Dilma","value":-0.22},{"name":"Luciana Genro","value":0.28},{"name":"Eymael","value":-0.11},{"name":"Pastor Everaldo","value":0.44},{"name":"Mauro Iasi","value":1.1},{"name":"Rui Costa Pimenta","value":0.95},{"name":"Zé Maria","value":1.23}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":0.19},{"name":"Marina","value":-0.11},{"name":"Levy Fidélix","value":0.31},{"name":"Dilma","value":-0.15},{"name":"Luciana Genro","value":0.86},{"name":"Eymael","value":-0.03},{"name":"Pastor Everaldo","value":0.13},{"name":"Mauro Iasi","value":0.7},{"name":"Rui Costa Pimenta","value":-0.39},{"name":"Zé Maria","value":-0.21}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":1.7},{"name":"Marina","value":5},{"name":"Levy Fidélix","value":5},{"name":"Dilma","value":5},{"name":"Luciana Genro","value":1.75},{"name":"Eymael","value":5},{"name":"Pastor Everaldo","value":1.74},{"name":"Mauro Iasi","value":5},{"name":"Rui Costa Pimenta","value":1.63},{"name":"Zé Maria","value":1.49}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":0.45},{"name":"Marina","value":-0.18},{"name":"Levy Fidélix","value":3.61},{"name":"Dilma","value":-0.03},{"name":"Luciana Genro","value":3.61},{"name":"Eymael","value":-0.26},{"name":"Pastor Everaldo","value":-0.11},{"name":"Mauro Iasi","value":3.61},{"name":"Rui Costa Pimenta","value":3.61},{"name":"Zé Maria","value":3.61}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-0.67},{"name":"Marina","value":-0.59},{"name":"Levy Fidélix","value":-0.11},{"name":"Dilma","value":2.95},{"name":"Luciana Genro","value":2.95},{"name":"Eymael","value":-0.32},{"name":"Pastor Everaldo","value":0.19},{"name":"Mauro Iasi","value":0.42},{"name":"Rui Costa Pimenta","value":2.95},{"name":"Zé Maria","value":0.46}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":0.13},{"name":"Marina","value":-0.3},{"name":"Levy Fidélix","value":-0.02},{"name":"Dilma","value":-0.43},{"name":"Luciana Genro","value":0.27},{"name":"Eymael","value":-0.34},{"name":"Pastor Everaldo","value":0.02},{"name":"Mauro Iasi","value":0.33},{"name":"Rui Costa Pimenta","value":0.68},{"name":"Zé Maria","value":0.52}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":0.9},{"name":"Marina","value":0.65},{"name":"Levy Fidélix","value":0.74},{"name":"Dilma","value":0.5},{"name":"Luciana Genro","value":3.93},{"name":"Eymael","value":0.42},{"name":"Pastor Everaldo","value":0.76},{"name":"Mauro Iasi","value":1.31},{"name":"Rui Costa Pimenta","value":3.93},{"name":"Zé Maria","value":3.93}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":0.49},{"name":"Marina","value":0.09},{"name":"Levy Fidélix","value":0.47},{"name":"Dilma","value":-0.05},{"name":"Luciana Genro","value":0.25},{"name":"Eymael","value":0.14},{"name":"Pastor Everaldo","value":0.31},{"name":"Mauro Iasi","value":0.74},{"name":"Rui Costa Pimenta","value":0.9},{"name":"Zé Maria","value":0.82}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":3.41},{"name":"Marina","value":-0.27},{"name":"Levy Fidélix","value":0.31},{"name":"Dilma","value":0.01},{"name":"Luciana Genro","value":0.22},{"name":"Eymael","value":-0.14},{"name":"Pastor Everaldo","value":-0.14},{"name":"Mauro Iasi","value":0.35},{"name":"Rui Costa Pimenta","value":0.66},{"name":"Zé Maria","value":-0.34}
  				],
  				'saude' : [
            {"name":"Eduardo","value":0.1},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0.21},{"name":"Dilma","value":-0.23},{"name":"Luciana Genro","value":-0.46},{"name":"Eymael","value":-0.34},{"name":"Pastor Everaldo","value":0.22},{"name":"Mauro Iasi","value":0.7},{"name":"Rui Costa Pimenta","value":0.35},{"name":"Zé Maria","value":0.12}
  				]
  		],

  		comparativo : [
  				'cultura' : [
            {"name":"Eduardo","value":3.9},{"name":"Marina","value":0.02},{"name":"Levy Fidélix","value":3.9},{"name":"Dilma","value":0.67},{"name":"Luciana Genro","value":3.9},{"name":"Eymael","value":0.29},{"name":"Pastor Everaldo","value":-0.2},{"name":"Mauro Iasi","value":1.82},{"name":"Rui Costa Pimenta","value":0.67},{"name":"Zé Maria","value":3.9}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-1.27},{"name":"Marina","value":-0.57},{"name":"Levy Fidélix","value":0.22},{"name":"Dilma","value":-0.55},{"name":"Luciana Genro","value":-1.2},{"name":"Eymael","value":-0.18},{"name":"Pastor Everaldo","value":-1.21},{"name":"Mauro Iasi","value":0.37},{"name":"Rui Costa Pimenta","value":-0.17},{"name":"Zé Maria","value":-0.94}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":0.31},{"name":"Marina","value":0.24},{"name":"Levy Fidélix","value":0.53},{"name":"Dilma","value":0.4},{"name":"Luciana Genro","value":-0.07},{"name":"Eymael","value":0.11},{"name":"Pastor Everaldo","value":-0.38},{"name":"Mauro Iasi","value":4.23},{"name":"Rui Costa Pimenta","value":3.15},{"name":"Zé Maria","value":4.23}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-0.47},{"name":"Marina","value":0.38},{"name":"Levy Fidélix","value":3.94},{"name":"Dilma","value":-0.24},{"name":"Luciana Genro","value":-0.87},{"name":"Eymael","value":-0.29},{"name":"Pastor Everaldo","value":0.54},{"name":"Mauro Iasi","value":-0.28},{"name":"Rui Costa Pimenta","value":0.48},{"name":"Zé Maria","value":0.07}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.99},{"name":"Marina","value":-0.57},{"name":"Levy Fidélix","value":0.15},{"name":"Dilma","value":-0.77},{"name":"Luciana Genro","value":-0.97},{"name":"Eymael","value":-0.43},{"name":"Pastor Everaldo","value":-0.33},{"name":"Mauro Iasi","value":-0.4},{"name":"Rui Costa Pimenta","value":0.47},{"name":"Zé Maria","value":-0.41}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":3.86},{"name":"Marina","value":3.86},{"name":"Levy Fidélix","value":3.86},{"name":"Dilma","value":0.48},{"name":"Luciana Genro","value":3.86},{"name":"Eymael","value":0.36},{"name":"Pastor Everaldo","value":0.86},{"name":"Mauro Iasi","value":-0.12},{"name":"Rui Costa Pimenta","value":3.86},{"name":"Zé Maria","value":3.86}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-0.13},{"name":"Marina","value":0.44},{"name":"Levy Fidélix","value":4.57},{"name":"Dilma","value":0.6},{"name":"Luciana Genro","value":0.12},{"name":"Eymael","value":0.54},{"name":"Pastor Everaldo","value":0.99},{"name":"Mauro Iasi","value":0.32},{"name":"Rui Costa Pimenta","value":2.31},{"name":"Zé Maria","value":1.28}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-0.65},{"name":"Marina","value":-0.2},{"name":"Levy Fidélix","value":0.58},{"name":"Dilma","value":-0.08},{"name":"Luciana Genro","value":-0.45},{"name":"Eymael","value":-0.09},{"name":"Pastor Everaldo","value":-0.2},{"name":"Mauro Iasi","value":-0.51},{"name":"Rui Costa Pimenta","value":-0.23},{"name":"Zé Maria","value":-0.41}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":0.38},{"name":"Marina","value":5},{"name":"Levy Fidélix","value":5},{"name":"Dilma","value":5},{"name":"Luciana Genro","value":0.35},{"name":"Eymael","value":5},{"name":"Pastor Everaldo","value":0.78},{"name":"Mauro Iasi","value":5},{"name":"Rui Costa Pimenta","value":1.2},{"name":"Zé Maria","value":0.97}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-0.63},{"name":"Marina","value":-0.5},{"name":"Levy Fidélix","value":3.9},{"name":"Dilma","value":0.48},{"name":"Luciana Genro","value":3.9},{"name":"Eymael","value":0.65},{"name":"Pastor Everaldo","value":0.04},{"name":"Mauro Iasi","value":-0.71},{"name":"Rui Costa Pimenta","value":3.9},{"name":"Zé Maria","value":3.9}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-1.29},{"name":"Marina","value":-0.8},{"name":"Levy Fidélix","value":-1.3},{"name":"Dilma","value":3.2},{"name":"Luciana Genro","value":3.2},{"name":"Eymael","value":0.45},{"name":"Pastor Everaldo","value":-0.04},{"name":"Mauro Iasi","value":-1.47},{"name":"Rui Costa Pimenta","value":3.2},{"name":"Zé Maria","value":-0.52}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":0.01},{"name":"Marina","value":0.85},{"name":"Levy Fidélix","value":1.02},{"name":"Dilma","value":1.61},{"name":"Luciana Genro","value":0.02},{"name":"Eymael","value":0.65},{"name":"Pastor Everaldo","value":-0.1},{"name":"Mauro Iasi","value":4.52},{"name":"Rui Costa Pimenta","value":1.79},{"name":"Zé Maria","value":0.83}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":0.11},{"name":"Marina","value":0.36},{"name":"Levy Fidélix","value":-0.77},{"name":"Dilma","value":0.38},{"name":"Luciana Genro","value":4.23},{"name":"Eymael","value":2.73},{"name":"Pastor Everaldo","value":0.68},{"name":"Mauro Iasi","value":4.23},{"name":"Rui Costa Pimenta","value":4.23},{"name":"Zé Maria","value":4.23}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":-0.49},{"name":"Marina","value":-0.15},{"name":"Levy Fidélix","value":-0.47},{"name":"Dilma","value":1.06},{"name":"Luciana Genro","value":-0.73},{"name":"Eymael","value":-0.21},{"name":"Pastor Everaldo","value":-0.5},{"name":"Mauro Iasi","value":-0.55},{"name":"Rui Costa Pimenta","value":0.86},{"name":"Zé Maria","value":-0.33}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":3.72},{"name":"Marina","value":-0.25},{"name":"Levy Fidélix","value":0.22},{"name":"Dilma","value":-0.53},{"name":"Luciana Genro","value":-0.81},{"name":"Eymael","value":3.72},{"name":"Pastor Everaldo","value":-0.33},{"name":"Mauro Iasi","value":-0.93},{"name":"Rui Costa Pimenta","value":3.56},{"name":"Zé Maria","value":-0.5}
  				],
  				'saude' : [
            {"name":"Eduardo","value":-0.57},{"name":"Marina","value":-0.04},{"name":"Levy Fidélix","value":0.06},{"name":"Dilma","value":0.04},{"name":"Luciana Genro","value":-0.57},{"name":"Eymael","value":-0.05},{"name":"Pastor Everaldo","value":-0.8},{"name":"Mauro Iasi","value":-0.49},{"name":"Rui Costa Pimenta","value":1.9},{"name":"Zé Maria","value":0.13}
  				]
  		]
  	],

  	luciana: [
  		testeCego : [
  				'cultura' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":-3.52},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.64},{"name":"Dilma","value":-3.58},{"name":"Eymael","value":-3.64},{"name":"Pastor Everaldo","value":-3.44},{"name":"Mauro Iasi","value":-3.62},{"name":"Rui Costa Pimenta","value":-2.86},{"name":"Zé Maria","value":0}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-0.29},{"name":"Marina","value":-0.24},{"name":"Levy Fidélix","value":-0.23},{"name":"Aécio","value":-0.23},{"name":"Dilma","value":-0.78},{"name":"Eymael","value":-0.08},{"name":"Pastor Everaldo","value":-0.47},{"name":"Mauro Iasi","value":0.41},{"name":"Rui Costa Pimenta","value":0.04},{"name":"Zé Maria","value":-0.62}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":-0.24},{"name":"Marina","value":-0.49},{"name":"Levy Fidélix","value":-0.09},{"name":"Aécio","value":-0.43},{"name":"Dilma","value":-0.6},{"name":"Eymael","value":-0.52},{"name":"Pastor Everaldo","value":-0.19},{"name":"Mauro Iasi","value":0.26},{"name":"Rui Costa Pimenta","value":0.66},{"name":"Zé Maria","value":3.18}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":0.21},{"name":"Marina","value":0.37},{"name":"Levy Fidélix","value":3.73},{"name":"Aécio","value":0.1},{"name":"Dilma","value":0.31},{"name":"Eymael","value":-0.32},{"name":"Pastor Everaldo","value":-0.03},{"name":"Mauro Iasi","value":0.37},{"name":"Rui Costa Pimenta","value":0.61},{"name":"Zé Maria","value":0.49}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.01},{"name":"Marina","value":0.09},{"name":"Levy Fidélix","value":0.1},{"name":"Aécio","value":0.11},{"name":"Dilma","value":-0.02},{"name":"Eymael","value":0.01},{"name":"Pastor Everaldo","value":0.28},{"name":"Mauro Iasi","value":0.27},{"name":"Rui Costa Pimenta","value":0.83},{"name":"Zé Maria","value":-0.06}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.6},{"name":"Dilma","value":-3.11},{"name":"Eymael","value":-3.64},{"name":"Pastor Everaldo","value":-2.73},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-0.34},{"name":"Marina","value":-0.06},{"name":"Levy Fidélix","value":1.45},{"name":"Aécio","value":-0.28},{"name":"Dilma","value":-0.5},{"name":"Eymael","value":-0.39},{"name":"Pastor Everaldo","value":0.16},{"name":"Mauro Iasi","value":0.82},{"name":"Rui Costa Pimenta","value":0.67},{"name":"Zé Maria","value":0.96}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-0.66},{"name":"Marina","value":-0.97},{"name":"Levy Fidélix","value":-0.55},{"name":"Aécio","value":-0.86},{"name":"Dilma","value":-1.01},{"name":"Eymael","value":-0.89},{"name":"Pastor Everaldo","value":-0.72},{"name":"Mauro Iasi","value":-0.15},{"name":"Rui Costa Pimenta","value":-1.25},{"name":"Zé Maria","value":-1.06}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-0.04},{"name":"Marina","value":3.25},{"name":"Levy Fidélix","value":3.25},{"name":"Aécio","value":-1.75},{"name":"Dilma","value":3.25},{"name":"Eymael","value":3.25},{"name":"Pastor Everaldo","value":-0.01},{"name":"Mauro Iasi","value":3.25},{"name":"Rui Costa Pimenta","value":-0.12},{"name":"Zé Maria","value":-0.25}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-3.15},{"name":"Marina","value":-3.79},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.61},{"name":"Dilma","value":-3.64},{"name":"Eymael","value":-3.87},{"name":"Pastor Everaldo","value":-3.72},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-3.62},{"name":"Marina","value":-3.54},{"name":"Levy Fidélix","value":-3.06},{"name":"Aécio","value":-2.95},{"name":"Dilma","value":0},{"name":"Eymael","value":-3.27},{"name":"Pastor Everaldo","value":-2.76},{"name":"Mauro Iasi","value":-2.53},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":-2.49}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":-0.14},{"name":"Marina","value":-0.57},{"name":"Levy Fidélix","value":-0.29},{"name":"Aécio","value":-0.27},{"name":"Dilma","value":-0.7},{"name":"Eymael","value":-0.61},{"name":"Pastor Everaldo","value":-0.25},{"name":"Mauro Iasi","value":0.06},{"name":"Rui Costa Pimenta","value":0.41},{"name":"Zé Maria","value":0.25}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":-3.03},{"name":"Marina","value":-3.28},{"name":"Levy Fidélix","value":-3.19},{"name":"Aécio","value":-3.93},{"name":"Dilma","value":-3.43},{"name":"Eymael","value":-3.51},{"name":"Pastor Everaldo","value":-3.17},{"name":"Mauro Iasi","value":-2.62},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":0.24},{"name":"Marina","value":-0.16},{"name":"Levy Fidélix","value":0.22},{"name":"Aécio","value":-0.25},{"name":"Dilma","value":-0.29},{"name":"Eymael","value":-0.11},{"name":"Pastor Everaldo","value":0.06},{"name":"Mauro Iasi","value":0.49},{"name":"Rui Costa Pimenta","value":0.66},{"name":"Zé Maria","value":0.57}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":3.19},{"name":"Marina","value":-0.48},{"name":"Levy Fidélix","value":0.09},{"name":"Aécio","value":-0.22},{"name":"Dilma","value":-0.2},{"name":"Eymael","value":-0.36},{"name":"Pastor Everaldo","value":-0.36},{"name":"Mauro Iasi","value":0.13},{"name":"Rui Costa Pimenta","value":0.45},{"name":"Zé Maria","value":-0.56}
  				],
  				'saude' : [
            {"name":"Eduardo","value":0.56},{"name":"Marina","value":0.46},{"name":"Levy Fidélix","value":0.66},{"name":"Aécio","value":0.46},{"name":"Dilma","value":0.23},{"name":"Eymael","value":0.11},{"name":"Pastor Everaldo","value":0.68},{"name":"Mauro Iasi","value":1.16},{"name":"Rui Costa Pimenta","value":0.81},{"name":"Zé Maria","value":0.58}
  				]
  		],

  		comparativo : [
  				'cultura' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":-3.88},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.9},{"name":"Dilma","value":-3.23},{"name":"Eymael","value":-3.61},{"name":"Pastor Everaldo","value":-4.1},{"name":"Mauro Iasi","value":-2.08},{"name":"Rui Costa Pimenta","value":-3.23},{"name":"Zé Maria","value":0}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-0.07},{"name":"Marina","value":0.63},{"name":"Levy Fidélix","value":1.42},{"name":"Aécio","value":1.2},{"name":"Dilma","value":0.65},{"name":"Eymael","value":1.02},{"name":"Pastor Everaldo","value":-0.01},{"name":"Mauro Iasi","value":1.57},{"name":"Rui Costa Pimenta","value":1.03},{"name":"Zé Maria","value":0.26}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":0.38},{"name":"Marina","value":0.31},{"name":"Levy Fidélix","value":0.6},{"name":"Aécio","value":0.07},{"name":"Dilma","value":0.47},{"name":"Eymael","value":0.18},{"name":"Pastor Everaldo","value":-0.31},{"name":"Mauro Iasi","value":4.3},{"name":"Rui Costa Pimenta","value":3.22},{"name":"Zé Maria","value":4.3}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":0.4},{"name":"Marina","value":1.25},{"name":"Levy Fidélix","value":4.81},{"name":"Aécio","value":0.87},{"name":"Dilma","value":0.63},{"name":"Eymael","value":0.58},{"name":"Pastor Everaldo","value":1.41},{"name":"Mauro Iasi","value":0.59},{"name":"Rui Costa Pimenta","value":1.35},{"name":"Zé Maria","value":0.94}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.02},{"name":"Marina","value":0.39},{"name":"Levy Fidélix","value":1.11},{"name":"Aécio","value":0.97},{"name":"Dilma","value":0.2},{"name":"Eymael","value":0.53},{"name":"Pastor Everaldo","value":0.63},{"name":"Mauro Iasi","value":0.56},{"name":"Rui Costa Pimenta","value":1.43},{"name":"Zé Maria","value":0.55}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.86},{"name":"Dilma","value":-3.37},{"name":"Eymael","value":-3.5},{"name":"Pastor Everaldo","value":-3},{"name":"Mauro Iasi","value":-3.98},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-0.25},{"name":"Marina","value":0.32},{"name":"Levy Fidélix","value":4.45},{"name":"Aécio","value":-0.12},{"name":"Dilma","value":0.49},{"name":"Eymael","value":0.42},{"name":"Pastor Everaldo","value":0.88},{"name":"Mauro Iasi","value":0.2},{"name":"Rui Costa Pimenta","value":2.2},{"name":"Zé Maria","value":1.17}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-0.21},{"name":"Marina","value":0.24},{"name":"Levy Fidélix","value":1.02},{"name":"Aécio","value":0.45},{"name":"Dilma","value":0.37},{"name":"Eymael","value":0.36},{"name":"Pastor Everaldo","value":0.24},{"name":"Mauro Iasi","value":-0.06},{"name":"Rui Costa Pimenta","value":0.21},{"name":"Zé Maria","value":0.04}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":0.03},{"name":"Marina","value":4.65},{"name":"Levy Fidélix","value":4.65},{"name":"Aécio","value":-0.35},{"name":"Dilma","value":4.65},{"name":"Eymael","value":4.65},{"name":"Pastor Everaldo","value":0.43},{"name":"Mauro Iasi","value":4.65},{"name":"Rui Costa Pimenta","value":0.86},{"name":"Zé Maria","value":0.62}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-4.53},{"name":"Marina","value":-4.41},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.9},{"name":"Dilma","value":-3.42},{"name":"Eymael","value":-3.25},{"name":"Pastor Everaldo","value":-3.86},{"name":"Mauro Iasi","value":-4.61},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-4.49},{"name":"Marina","value":-4},{"name":"Levy Fidélix","value":-4.5},{"name":"Aécio","value":-3.2},{"name":"Dilma","value":0},{"name":"Eymael","value":-2.75},{"name":"Pastor Everaldo","value":-3.24},{"name":"Mauro Iasi","value":-4.67},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":-3.72}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":-0.01},{"name":"Marina","value":0.83},{"name":"Levy Fidélix","value":1},{"name":"Aécio","value":-0.02},{"name":"Dilma","value":1.59},{"name":"Eymael","value":0.63},{"name":"Pastor Everaldo","value":-0.12},{"name":"Mauro Iasi","value":4.5},{"name":"Rui Costa Pimenta","value":1.77},{"name":"Zé Maria","value":0.81}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":-4.11},{"name":"Marina","value":-3.87},{"name":"Levy Fidélix","value":-5},{"name":"Aécio","value":-4.23},{"name":"Dilma","value":-3.84},{"name":"Eymael","value":-1.5},{"name":"Pastor Everaldo","value":-3.54},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":0.24},{"name":"Marina","value":0.58},{"name":"Levy Fidélix","value":0.25},{"name":"Aécio","value":0.73},{"name":"Dilma","value":1.79},{"name":"Eymael","value":0.52},{"name":"Pastor Everaldo","value":0.23},{"name":"Mauro Iasi","value":0.17},{"name":"Rui Costa Pimenta","value":1.59},{"name":"Zé Maria","value":0.4}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":4.53},{"name":"Marina","value":0.55},{"name":"Levy Fidélix","value":1.03},{"name":"Aécio","value":0.81},{"name":"Dilma","value":0.27},{"name":"Eymael","value":4.53},{"name":"Pastor Everaldo","value":0.47},{"name":"Mauro Iasi","value":-0.12},{"name":"Rui Costa Pimenta","value":4.36},{"name":"Zé Maria","value":0.31}
  				],
  				'saude' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":0.53},{"name":"Levy Fidélix","value":0.63},{"name":"Aécio","value":0.57},{"name":"Dilma","value":0.6},{"name":"Eymael","value":0.51},{"name":"Pastor Everaldo","value":-0.23},{"name":"Mauro Iasi","value":0.08},{"name":"Rui Costa Pimenta","value":2.46},{"name":"Zé Maria","value":0.69}
  				]
  		]
  	],

  	eymael: [
  		testeCego : [
  				'cultura' : [
            {"name":"Eduardo","value":3.64},{"name":"Marina","value":0.12},{"name":"Levy Fidélix","value":3.64},{"name":"Aécio","value":0},{"name":"Luciana Genro","value":3.64},{"name":"Dilma","value":0.06},{"name":"Pastor Everaldo","value":0.2},{"name":"Mauro Iasi","value":0.02},{"name":"Rui Costa Pimenta","value":0.78},{"name":"Zé Maria","value":3.64}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-0.21},{"name":"Marina","value":-0.15},{"name":"Levy Fidélix","value":-0.15},{"name":"Aécio","value":-0.15},{"name":"Luciana Genro","value":0.08},{"name":"Dilma","value":-0.7},{"name":"Pastor Everaldo","value":-0.39},{"name":"Mauro Iasi","value":0.49},{"name":"Rui Costa Pimenta","value":0.12},{"name":"Zé Maria","value":-0.53}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":0.28},{"name":"Marina","value":0.03},{"name":"Levy Fidélix","value":0.44},{"name":"Aécio","value":0.09},{"name":"Luciana Genro","value":0.52},{"name":"Dilma","value":-0.08},{"name":"Pastor Everaldo","value":0.33},{"name":"Mauro Iasi","value":0.79},{"name":"Rui Costa Pimenta","value":1.19},{"name":"Zé Maria","value":3.71}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":0.53},{"name":"Marina","value":0.68},{"name":"Levy Fidélix","value":4.05},{"name":"Aécio","value":0.42},{"name":"Luciana Genro","value":0.32},{"name":"Dilma","value":0.63},{"name":"Pastor Everaldo","value":0.29},{"name":"Mauro Iasi","value":0.69},{"name":"Rui Costa Pimenta","value":0.92},{"name":"Zé Maria","value":0.81}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.02},{"name":"Marina","value":0.08},{"name":"Levy Fidélix","value":0.09},{"name":"Aécio","value":0.1},{"name":"Luciana Genro","value":-0.01},{"name":"Dilma","value":-0.03},{"name":"Pastor Everaldo","value":0.27},{"name":"Mauro Iasi","value":0.26},{"name":"Rui Costa Pimenta","value":0.81},{"name":"Zé Maria","value":-0.07}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":3.64},{"name":"Marina","value":3.64},{"name":"Levy Fidélix","value":3.64},{"name":"Aécio","value":0.04},{"name":"Luciana Genro","value":3.64},{"name":"Dilma","value":0.53},{"name":"Pastor Everaldo","value":0.91},{"name":"Mauro Iasi","value":3.64},{"name":"Rui Costa Pimenta","value":3.64},{"name":"Zé Maria","value":3.64}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":0.05},{"name":"Marina","value":0.33},{"name":"Levy Fidélix","value":1.83},{"name":"Aécio","value":0.11},{"name":"Luciana Genro","value":0.39},{"name":"Dilma","value":-0.11},{"name":"Pastor Everaldo","value":0.55},{"name":"Mauro Iasi","value":1.2},{"name":"Rui Costa Pimenta","value":1.06},{"name":"Zé Maria","value":1.34}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":0.22},{"name":"Marina","value":-0.08},{"name":"Levy Fidélix","value":0.34},{"name":"Aécio","value":0.03},{"name":"Luciana Genro","value":0.89},{"name":"Dilma","value":-0.12},{"name":"Pastor Everaldo","value":0.16},{"name":"Mauro Iasi","value":0.73},{"name":"Rui Costa Pimenta","value":-0.36},{"name":"Zé Maria","value":-0.18}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-3.3},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-5},{"name":"Luciana Genro","value":-3.25},{"name":"Dilma","value":0},{"name":"Pastor Everaldo","value":-3.26},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":-3.37},{"name":"Zé Maria","value":-3.51}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":0.71},{"name":"Marina","value":0.08},{"name":"Levy Fidélix","value":3.87},{"name":"Aécio","value":0.26},{"name":"Luciana Genro","value":3.87},{"name":"Dilma","value":0.23},{"name":"Pastor Everaldo","value":0.15},{"name":"Mauro Iasi","value":3.87},{"name":"Rui Costa Pimenta","value":3.87},{"name":"Zé Maria","value":3.87}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-0.36},{"name":"Marina","value":-0.28},{"name":"Levy Fidélix","value":0.21},{"name":"Aécio","value":0.32},{"name":"Luciana Genro","value":3.27},{"name":"Dilma","value":3.27},{"name":"Pastor Everaldo","value":0.5},{"name":"Mauro Iasi","value":0.73},{"name":"Rui Costa Pimenta","value":3.27},{"name":"Zé Maria","value":0.78}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":0.47},{"name":"Marina","value":0.04},{"name":"Levy Fidélix","value":0.32},{"name":"Aécio","value":0.34},{"name":"Luciana Genro","value":0.61},{"name":"Dilma","value":-0.09},{"name":"Pastor Everaldo","value":0.36},{"name":"Mauro Iasi","value":0.67},{"name":"Rui Costa Pimenta","value":1.02},{"name":"Zé Maria","value":0.86}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":0.48},{"name":"Marina","value":0.23},{"name":"Levy Fidélix","value":0.32},{"name":"Aécio","value":-0.42},{"name":"Luciana Genro","value":3.51},{"name":"Dilma","value":0.08},{"name":"Pastor Everaldo","value":0.34},{"name":"Mauro Iasi","value":0.89},{"name":"Rui Costa Pimenta","value":3.51},{"name":"Zé Maria","value":3.51}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":0.35},{"name":"Marina","value":-0.05},{"name":"Levy Fidélix","value":0.33},{"name":"Aécio","value":-0.14},{"name":"Luciana Genro","value":0.11},{"name":"Dilma","value":-0.19},{"name":"Pastor Everaldo","value":0.17},{"name":"Mauro Iasi","value":0.6},{"name":"Rui Costa Pimenta","value":0.76},{"name":"Zé Maria","value":0.68}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":3.55},{"name":"Marina","value":-0.12},{"name":"Levy Fidélix","value":0.46},{"name":"Aécio","value":0.14},{"name":"Luciana Genro","value":0.36},{"name":"Dilma","value":0.16},{"name":"Pastor Everaldo","value":0},{"name":"Mauro Iasi","value":0.49},{"name":"Rui Costa Pimenta","value":0.81},{"name":"Zé Maria","value":-0.2}
  				],
  				'saude' : [
            {"name":"Eduardo","value":0.45},{"name":"Marina","value":0.34},{"name":"Levy Fidélix","value":0.55},{"name":"Aécio","value":0.34},{"name":"Luciana Genro","value":-0.11},{"name":"Dilma","value":0.11},{"name":"Pastor Everaldo","value":0.56},{"name":"Mauro Iasi","value":1.05},{"name":"Rui Costa Pimenta","value":0.7},{"name":"Zé Maria","value":0.46}
  				]
  		],

  		comparativo : [
  				'cultura' : [
            {"name":"Eduardo","value":3.61},{"name":"Marina","value":-0.27},{"name":"Levy Fidélix","value":3.61},{"name":"Aécio","value":-0.29},{"name":"Luciana Genro","value":3.61},{"name":"Dilma","value":0.38},{"name":"Pastor Everaldo","value":-0.49},{"name":"Mauro Iasi","value":1.53},{"name":"Rui Costa Pimenta","value":0.38},{"name":"Zé Maria","value":3.61}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-1.09},{"name":"Marina","value":-0.39},{"name":"Levy Fidélix","value":0.4},{"name":"Aécio","value":0.18},{"name":"Luciana Genro","value":-1.02},{"name":"Dilma","value":-0.37},{"name":"Pastor Everaldo","value":-1.03},{"name":"Mauro Iasi","value":0.55},{"name":"Rui Costa Pimenta","value":0.01},{"name":"Zé Maria","value":-0.76}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":0.2},{"name":"Marina","value":0.14},{"name":"Levy Fidélix","value":0.42},{"name":"Aécio","value":-0.11},{"name":"Luciana Genro","value":-0.18},{"name":"Dilma","value":0.29},{"name":"Pastor Everaldo","value":-0.49},{"name":"Mauro Iasi","value":4.13},{"name":"Rui Costa Pimenta","value":3.05},{"name":"Zé Maria","value":4.13}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-0.18},{"name":"Marina","value":0.67},{"name":"Levy Fidélix","value":4.23},{"name":"Aécio","value":0.29},{"name":"Luciana Genro","value":-0.58},{"name":"Dilma","value":0.05},{"name":"Pastor Everaldo","value":0.83},{"name":"Mauro Iasi","value":0.01},{"name":"Rui Costa Pimenta","value":0.77},{"name":"Zé Maria","value":0.36}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.56},{"name":"Marina","value":-0.14},{"name":"Levy Fidélix","value":0.58},{"name":"Aécio","value":0.43},{"name":"Luciana Genro","value":-0.53},{"name":"Dilma","value":-0.33},{"name":"Pastor Everaldo","value":0.1},{"name":"Mauro Iasi","value":0.03},{"name":"Rui Costa Pimenta","value":0.9},{"name":"Zé Maria","value":0.02}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":3.5},{"name":"Marina","value":3.5},{"name":"Levy Fidélix","value":3.5},{"name":"Aécio","value":-0.36},{"name":"Luciana Genro","value":3.5},{"name":"Dilma","value":0.13},{"name":"Pastor Everaldo","value":0.5},{"name":"Mauro Iasi","value":-0.48},{"name":"Rui Costa Pimenta","value":3.5},{"name":"Zé Maria","value":3.5}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-0.67},{"name":"Marina","value":-0.1},{"name":"Levy Fidélix","value":4.03},{"name":"Aécio","value":-0.54},{"name":"Luciana Genro","value":-0.42},{"name":"Dilma","value":0.07},{"name":"Pastor Everaldo","value":0.46},{"name":"Mauro Iasi","value":-0.22},{"name":"Rui Costa Pimenta","value":1.78},{"name":"Zé Maria","value":0.74}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-0.56},{"name":"Marina","value":-0.11},{"name":"Levy Fidélix","value":0.67},{"name":"Aécio","value":0.09},{"name":"Luciana Genro","value":-0.36},{"name":"Dilma","value":0.01},{"name":"Pastor Everaldo","value":-0.11},{"name":"Mauro Iasi","value":-0.42},{"name":"Rui Costa Pimenta","value":-0.14},{"name":"Zé Maria","value":-0.32}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-4.62},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-5},{"name":"Luciana Genro","value":-4.65},{"name":"Dilma","value":0},{"name":"Pastor Everaldo","value":-4.22},{"name":"Mauro Iasi","value":0},{"name":"Rui Costa Pimenta","value":-3.8},{"name":"Zé Maria","value":-4.03}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-1.28},{"name":"Marina","value":-1.16},{"name":"Levy Fidélix","value":3.25},{"name":"Aécio","value":-0.65},{"name":"Luciana Genro","value":3.25},{"name":"Dilma","value":-0.17},{"name":"Pastor Everaldo","value":-0.61},{"name":"Mauro Iasi","value":-1.36},{"name":"Rui Costa Pimenta","value":3.25},{"name":"Zé Maria","value":3.25}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-1.74},{"name":"Marina","value":-1.25},{"name":"Levy Fidélix","value":-1.75},{"name":"Aécio","value":-0.45},{"name":"Luciana Genro","value":2.75},{"name":"Dilma","value":2.75},{"name":"Pastor Everaldo","value":-0.49},{"name":"Mauro Iasi","value":-1.92},{"name":"Rui Costa Pimenta","value":2.75},{"name":"Zé Maria","value":-0.97}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":-0.64},{"name":"Marina","value":0.2},{"name":"Levy Fidélix","value":0.37},{"name":"Aécio","value":-0.65},{"name":"Luciana Genro","value":-0.63},{"name":"Dilma","value":0.96},{"name":"Pastor Everaldo","value":-0.75},{"name":"Mauro Iasi","value":3.87},{"name":"Rui Costa Pimenta","value":1.14},{"name":"Zé Maria","value":0.18}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":-2.61},{"name":"Marina","value":-2.37},{"name":"Levy Fidélix","value":-3.5},{"name":"Aécio","value":-2.73},{"name":"Luciana Genro","value":1.5},{"name":"Dilma","value":-2.34},{"name":"Pastor Everaldo","value":-2.04},{"name":"Mauro Iasi","value":1.5},{"name":"Rui Costa Pimenta","value":1.5},{"name":"Zé Maria","value":1.5}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":-0.28},{"name":"Marina","value":0.06},{"name":"Levy Fidélix","value":-0.26},{"name":"Aécio","value":0.21},{"name":"Luciana Genro","value":-0.52},{"name":"Dilma","value":1.27},{"name":"Pastor Everaldo","value":-0.29},{"name":"Mauro Iasi","value":-0.34},{"name":"Rui Costa Pimenta","value":1.07},{"name":"Zé Maria","value":-0.12}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":-3.97},{"name":"Levy Fidélix","value":-3.5},{"name":"Aécio","value":-3.72},{"name":"Luciana Genro","value":-4.53},{"name":"Dilma","value":-4.26},{"name":"Pastor Everaldo","value":-4.06},{"name":"Mauro Iasi","value":-4.65},{"name":"Rui Costa Pimenta","value":-0.17},{"name":"Zé Maria","value":-4.22}
  				],
  				'saude' : [
            {"name":"Eduardo","value":-0.52},{"name":"Marina","value":0.01},{"name":"Levy Fidélix","value":0.11},{"name":"Aécio","value":0.05},{"name":"Luciana Genro","value":-0.51},{"name":"Dilma","value":0.09},{"name":"Pastor Everaldo","value":-0.74},{"name":"Mauro Iasi","value":-0.43},{"name":"Rui Costa Pimenta","value":1.95},{"name":"Zé Maria","value":0.18}
  				]
  		]
  	],

  	everaldo: [
  		testeCego : [
  				'cultura' : [
            {"name":"Eduardo","value":3.44},{"name":"Marina","value":-0.08},{"name":"Levy Fidélix","value":3.44},{"name":"Aécio","value":-0.21},{"name":"Luciana Genro","value":3.44},{"name":"Eymael","value":-0.2},{"name":"Dilma","value":-0.14},{"name":"Mauro Iasi","value":-0.19},{"name":"Rui Costa Pimenta","value":0.58},{"name":"Zé Maria","value":3.44}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":0.18},{"name":"Marina","value":0.23},{"name":"Levy Fidélix","value":0.24},{"name":"Aécio","value":0.24},{"name":"Luciana Genro","value":0.47},{"name":"Eymael","value":0.39},{"name":"Dilma","value":-0.31},{"name":"Mauro Iasi","value":0.88},{"name":"Rui Costa Pimenta","value":0.51},{"name":"Zé Maria","value":-0.15}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":-0.05},{"name":"Marina","value":-0.3},{"name":"Levy Fidélix","value":0.1},{"name":"Aécio","value":-0.24},{"name":"Luciana Genro","value":0.19},{"name":"Eymael","value":-0.33},{"name":"Dilma","value":-0.41},{"name":"Mauro Iasi","value":0.45},{"name":"Rui Costa Pimenta","value":0.85},{"name":"Zé Maria","value":3.37}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":0.24},{"name":"Marina","value":0.4},{"name":"Levy Fidélix","value":3.76},{"name":"Aécio","value":0.13},{"name":"Luciana Genro","value":0.03},{"name":"Eymael","value":-0.29},{"name":"Dilma","value":0.34},{"name":"Mauro Iasi","value":0.41},{"name":"Rui Costa Pimenta","value":0.64},{"name":"Zé Maria","value":0.52}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.29},{"name":"Marina","value":-0.19},{"name":"Levy Fidélix","value":-0.18},{"name":"Aécio","value":-0.17},{"name":"Luciana Genro","value":-0.28},{"name":"Eymael","value":-0.27},{"name":"Dilma","value":-0.3},{"name":"Mauro Iasi","value":-0.01},{"name":"Rui Costa Pimenta","value":0.54},{"name":"Zé Maria","value":-0.34}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":2.73},{"name":"Marina","value":2.73},{"name":"Levy Fidélix","value":2.73},{"name":"Aécio","value":-0.87},{"name":"Luciana Genro","value":2.73},{"name":"Eymael","value":-0.91},{"name":"Dilma","value":-0.38},{"name":"Mauro Iasi","value":2.73},{"name":"Rui Costa Pimenta","value":2.73},{"name":"Zé Maria","value":2.73}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-0.5},{"name":"Marina","value":-0.22},{"name":"Levy Fidélix","value":1.28},{"name":"Aécio","value":-0.44},{"name":"Luciana Genro","value":-0.16},{"name":"Eymael","value":-0.55},{"name":"Dilma","value":-0.66},{"name":"Mauro Iasi","value":0.65},{"name":"Rui Costa Pimenta","value":0.51},{"name":"Zé Maria","value":0.79}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":0.06},{"name":"Marina","value":-0.24},{"name":"Levy Fidélix","value":0.18},{"name":"Aécio","value":-0.13},{"name":"Luciana Genro","value":0.72},{"name":"Eymael","value":-0.16},{"name":"Dilma","value":-0.28},{"name":"Mauro Iasi","value":0.57},{"name":"Rui Costa Pimenta","value":-0.52},{"name":"Zé Maria","value":-0.34}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-0.03},{"name":"Marina","value":3.26},{"name":"Levy Fidélix","value":3.26},{"name":"Aécio","value":-1.74},{"name":"Luciana Genro","value":0.01},{"name":"Eymael","value":3.26},{"name":"Dilma","value":3.26},{"name":"Mauro Iasi","value":3.26},{"name":"Rui Costa Pimenta","value":-0.11},{"name":"Zé Maria","value":-0.24}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":0.56},{"name":"Marina","value":-0.07},{"name":"Levy Fidélix","value":3.72},{"name":"Aécio","value":0.11},{"name":"Luciana Genro","value":3.72},{"name":"Eymael","value":-0.15},{"name":"Dilma","value":0.08},{"name":"Mauro Iasi","value":3.72},{"name":"Rui Costa Pimenta","value":3.72},{"name":"Zé Maria","value":3.72}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-0.86},{"name":"Marina","value":-0.78},{"name":"Levy Fidélix","value":-0.29},{"name":"Aécio","value":-0.19},{"name":"Luciana Genro","value":2.76},{"name":"Eymael","value":-0.5},{"name":"Dilma","value":2.76},{"name":"Mauro Iasi","value":0.23},{"name":"Rui Costa Pimenta","value":2.76},{"name":"Zé Maria","value":0.28}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":0.11},{"name":"Marina","value":-0.32},{"name":"Levy Fidélix","value":-0.04},{"name":"Aécio","value":-0.02},{"name":"Luciana Genro","value":0.25},{"name":"Eymael","value":-0.36},{"name":"Dilma","value":-0.45},{"name":"Mauro Iasi","value":0.31},{"name":"Rui Costa Pimenta","value":0.66},{"name":"Zé Maria","value":0.5}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":0.14},{"name":"Marina","value":-0.11},{"name":"Levy Fidélix","value":-0.02},{"name":"Aécio","value":-0.76},{"name":"Luciana Genro","value":3.17},{"name":"Eymael","value":-0.34},{"name":"Dilma","value":-0.26},{"name":"Mauro Iasi","value":0.55},{"name":"Rui Costa Pimenta","value":3.17},{"name":"Zé Maria","value":3.17}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":0.18},{"name":"Marina","value":-0.22},{"name":"Levy Fidélix","value":0.16},{"name":"Aécio","value":-0.31},{"name":"Luciana Genro","value":-0.06},{"name":"Eymael","value":-0.17},{"name":"Dilma","value":-0.35},{"name":"Mauro Iasi","value":0.43},{"name":"Rui Costa Pimenta","value":0.6},{"name":"Zé Maria","value":0.51}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":3.55},{"name":"Marina","value":-0.12},{"name":"Levy Fidélix","value":0.45},{"name":"Aécio","value":0.14},{"name":"Luciana Genro","value":0.36},{"name":"Eymael","value":0},{"name":"Dilma","value":0.16},{"name":"Mauro Iasi","value":0.49},{"name":"Rui Costa Pimenta","value":0.81},{"name":"Zé Maria","value":-0.2}
  				],
  				'saude' : [
            {"name":"Eduardo","value":-0.11},{"name":"Marina","value":-0.22},{"name":"Levy Fidélix","value":-0.01},{"name":"Aécio","value":-0.22},{"name":"Luciana Genro","value":-0.68},{"name":"Eymael","value":-0.56},{"name":"Dilma","value":-0.45},{"name":"Mauro Iasi","value":0.49},{"name":"Rui Costa Pimenta","value":0.14},{"name":"Zé Maria","value":-0.1}
  				]
  		],

  		comparativo : [
  				'cultura' : [
            {"name":"Eduardo","value":4.1},{"name":"Marina","value":0.21},{"name":"Levy Fidélix","value":4.1},{"name":"Aécio","value":0.2},{"name":"Luciana Genro","value":4.1},{"name":"Eymael","value":0.49},{"name":"Dilma","value":0.87},{"name":"Mauro Iasi","value":2.02},{"name":"Rui Costa Pimenta","value":0.87},{"name":"Zé Maria","value":4.1}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-0.06},{"name":"Marina","value":0.64},{"name":"Levy Fidélix","value":1.43},{"name":"Aécio","value":1.21},{"name":"Luciana Genro","value":0.01},{"name":"Eymael","value":1.03},{"name":"Dilma","value":0.66},{"name":"Mauro Iasi","value":1.58},{"name":"Rui Costa Pimenta","value":1.04},{"name":"Zé Maria","value":0.27}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":0.69},{"name":"Marina","value":0.62},{"name":"Levy Fidélix","value":0.91},{"name":"Aécio","value":0.38},{"name":"Luciana Genro","value":0.31},{"name":"Eymael","value":0.49},{"name":"Dilma","value":0.78},{"name":"Mauro Iasi","value":4.61},{"name":"Rui Costa Pimenta","value":3.53},{"name":"Zé Maria","value":4.61}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-1.02},{"name":"Marina","value":-0.17},{"name":"Levy Fidélix","value":3.4},{"name":"Aécio","value":-0.54},{"name":"Luciana Genro","value":-1.41},{"name":"Eymael","value":-0.83},{"name":"Dilma","value":-0.78},{"name":"Mauro Iasi","value":-0.82},{"name":"Rui Costa Pimenta","value":-0.06},{"name":"Zé Maria","value":-0.47}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.66},{"name":"Marina","value":-0.24},{"name":"Levy Fidélix","value":0.48},{"name":"Aécio","value":0.33},{"name":"Luciana Genro","value":-0.63},{"name":"Eymael","value":-0.1},{"name":"Dilma","value":-0.44},{"name":"Mauro Iasi","value":-0.07},{"name":"Rui Costa Pimenta","value":0.8},{"name":"Zé Maria","value":-0.08}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":3},{"name":"Marina","value":3},{"name":"Levy Fidélix","value":3},{"name":"Aécio","value":-0.86},{"name":"Luciana Genro","value":3},{"name":"Eymael","value":-0.5},{"name":"Dilma","value":-0.37},{"name":"Mauro Iasi","value":-0.98},{"name":"Rui Costa Pimenta","value":3},{"name":"Zé Maria","value":3}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-1.12},{"name":"Marina","value":-0.56},{"name":"Levy Fidélix","value":3.57},{"name":"Aécio","value":-0.99},{"name":"Luciana Genro","value":-0.88},{"name":"Eymael","value":-0.46},{"name":"Dilma","value":-0.39},{"name":"Mauro Iasi","value":-0.68},{"name":"Rui Costa Pimenta","value":1.32},{"name":"Zé Maria","value":0.29}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-0.45},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0.78},{"name":"Aécio","value":0.2},{"name":"Luciana Genro","value":-0.24},{"name":"Eymael","value":0.11},{"name":"Dilma","value":0.12},{"name":"Mauro Iasi","value":-0.3},{"name":"Rui Costa Pimenta","value":-0.03},{"name":"Zé Maria","value":-0.2}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-0.4},{"name":"Marina","value":4.22},{"name":"Levy Fidélix","value":4.22},{"name":"Aécio","value":-0.78},{"name":"Luciana Genro","value":-0.43},{"name":"Eymael","value":4.22},{"name":"Dilma","value":4.22},{"name":"Mauro Iasi","value":4.22},{"name":"Rui Costa Pimenta","value":0.42},{"name":"Zé Maria","value":0.19}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-0.67},{"name":"Marina","value":-0.54},{"name":"Levy Fidélix","value":3.86},{"name":"Aécio","value":-0.04},{"name":"Luciana Genro","value":3.86},{"name":"Eymael","value":0.61},{"name":"Dilma","value":0.45},{"name":"Mauro Iasi","value":-0.75},{"name":"Rui Costa Pimenta","value":3.86},{"name":"Zé Maria","value":3.86}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-1.25},{"name":"Marina","value":-0.76},{"name":"Levy Fidélix","value":-1.26},{"name":"Aécio","value":0.04},{"name":"Luciana Genro","value":3.24},{"name":"Eymael","value":0.49},{"name":"Dilma","value":3.24},{"name":"Mauro Iasi","value":-1.44},{"name":"Rui Costa Pimenta","value":3.24},{"name":"Zé Maria","value":-0.48}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":0.1},{"name":"Marina","value":0.95},{"name":"Levy Fidélix","value":1.11},{"name":"Aécio","value":0.1},{"name":"Luciana Genro","value":0.12},{"name":"Eymael","value":0.75},{"name":"Dilma","value":1.7},{"name":"Mauro Iasi","value":4.61},{"name":"Rui Costa Pimenta","value":1.88},{"name":"Zé Maria","value":0.93}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":-0.57},{"name":"Marina","value":-0.32},{"name":"Levy Fidélix","value":-1.46},{"name":"Aécio","value":-0.68},{"name":"Luciana Genro","value":3.54},{"name":"Eymael","value":2.04},{"name":"Dilma","value":-0.3},{"name":"Mauro Iasi","value":3.54},{"name":"Rui Costa Pimenta","value":3.54},{"name":"Zé Maria","value":3.54}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":0.01},{"name":"Marina","value":0.35},{"name":"Levy Fidélix","value":0.03},{"name":"Aécio","value":0.5},{"name":"Luciana Genro","value":-0.23},{"name":"Eymael","value":0.29},{"name":"Dilma","value":1.57},{"name":"Mauro Iasi","value":-0.05},{"name":"Rui Costa Pimenta","value":1.36},{"name":"Zé Maria","value":0.17}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":4.06},{"name":"Marina","value":0.08},{"name":"Levy Fidélix","value":0.56},{"name":"Aécio","value":0.33},{"name":"Luciana Genro","value":-0.47},{"name":"Eymael","value":4.06},{"name":"Dilma","value":-0.2},{"name":"Mauro Iasi","value":-0.59},{"name":"Rui Costa Pimenta","value":3.89},{"name":"Zé Maria","value":-0.17}
  				],
  				'saude' : [
            {"name":"Eduardo","value":0.23},{"name":"Marina","value":0.76},{"name":"Levy Fidélix","value":0.86},{"name":"Aécio","value":0.8},{"name":"Luciana Genro","value":0.23},{"name":"Eymael","value":0.74},{"name":"Dilma","value":0.83},{"name":"Mauro Iasi","value":0.31},{"name":"Rui Costa Pimenta","value":2.69},{"name":"Zé Maria","value":0.92}
  				]
  		]
  	],

  	mauro: [
  		testeCego : [
  				'cultura' : [
            {"name":"Eduardo","value":3.62},{"name":"Marina","value":0.1},{"name":"Levy Fidélix","value":3.62},{"name":"Aécio","value":-0.02},{"name":"Luciana Genro","value":3.62},{"name":"Eymael","value":-0.02},{"name":"Pastor Everaldo","value":0.19},{"name":"Dilma","value":0.05},{"name":"Rui Costa Pimenta","value":0.77},{"name":"Zé Maria","value":3.62}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-0.7},{"name":"Marina","value":-0.65},{"name":"Levy Fidélix","value":-0.64},{"name":"Aécio","value":-0.64},{"name":"Luciana Genro","value":-0.41},{"name":"Eymael","value":-0.49},{"name":"Pastor Everaldo","value":-0.88},{"name":"Dilma","value":-1.19},{"name":"Rui Costa Pimenta","value":-0.37},{"name":"Zé Maria","value":-1.03}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":-0.51},{"name":"Marina","value":-0.75},{"name":"Levy Fidélix","value":-0.35},{"name":"Aécio","value":-0.7},{"name":"Luciana Genro","value":-0.26},{"name":"Eymael","value":-0.79},{"name":"Pastor Everaldo","value":-0.45},{"name":"Dilma","value":-0.86},{"name":"Rui Costa Pimenta","value":0.4},{"name":"Zé Maria","value":2.92}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-0.17},{"name":"Marina","value":-0.01},{"name":"Levy Fidélix","value":3.35},{"name":"Aécio","value":-0.27},{"name":"Luciana Genro","value":-0.37},{"name":"Eymael","value":-0.69},{"name":"Pastor Everaldo","value":-0.41},{"name":"Dilma","value":-0.06},{"name":"Rui Costa Pimenta","value":0.23},{"name":"Zé Maria","value":0.12}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.28},{"name":"Marina","value":-0.18},{"name":"Levy Fidélix","value":-0.17},{"name":"Aécio","value":-0.16},{"name":"Luciana Genro","value":-0.27},{"name":"Eymael","value":-0.26},{"name":"Pastor Everaldo","value":0.01},{"name":"Dilma","value":-0.29},{"name":"Rui Costa Pimenta","value":0.55},{"name":"Zé Maria","value":-0.33}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.6},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.64},{"name":"Pastor Everaldo","value":-2.73},{"name":"Dilma","value":-3.11},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-1.15},{"name":"Marina","value":-0.87},{"name":"Levy Fidélix","value":0.63},{"name":"Aécio","value":-1.1},{"name":"Luciana Genro","value":-0.82},{"name":"Eymael","value":-1.2},{"name":"Pastor Everaldo","value":-0.65},{"name":"Dilma","value":-1.32},{"name":"Rui Costa Pimenta","value":-0.15},{"name":"Zé Maria","value":0.14}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-0.51},{"name":"Marina","value":-0.81},{"name":"Levy Fidélix","value":-0.39},{"name":"Aécio","value":-0.7},{"name":"Luciana Genro","value":0.15},{"name":"Eymael","value":-0.73},{"name":"Pastor Everaldo","value":-0.57},{"name":"Dilma","value":-0.85},{"name":"Rui Costa Pimenta","value":-1.09},{"name":"Zé Maria","value":-0.91}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-3.3},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-5},{"name":"Luciana Genro","value":-3.25},{"name":"Eymael","value":0},{"name":"Pastor Everaldo","value":-3.26},{"name":"Dilma","value":0},{"name":"Rui Costa Pimenta","value":-3.37},{"name":"Zé Maria","value":-3.51}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-3.15},{"name":"Marina","value":-3.79},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.61},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.87},{"name":"Pastor Everaldo","value":-3.72},{"name":"Dilma","value":-3.64},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-1.09},{"name":"Marina","value":-1.01},{"name":"Levy Fidélix","value":-0.52},{"name":"Aécio","value":-0.42},{"name":"Luciana Genro","value":2.53},{"name":"Eymael","value":-0.73},{"name":"Pastor Everaldo","value":-0.23},{"name":"Dilma","value":2.53},{"name":"Rui Costa Pimenta","value":2.53},{"name":"Zé Maria","value":0.05}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":-0.2},{"name":"Marina","value":-0.63},{"name":"Levy Fidélix","value":-0.35},{"name":"Aécio","value":-0.33},{"name":"Luciana Genro","value":-0.06},{"name":"Eymael","value":-0.67},{"name":"Pastor Everaldo","value":-0.31},{"name":"Dilma","value":-0.76},{"name":"Rui Costa Pimenta","value":0.35},{"name":"Zé Maria","value":0.19}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":-0.42},{"name":"Marina","value":-0.67},{"name":"Levy Fidélix","value":-0.57},{"name":"Aécio","value":-1.31},{"name":"Luciana Genro","value":2.62},{"name":"Eymael","value":-0.89},{"name":"Pastor Everaldo","value":-0.55},{"name":"Dilma","value":-0.81},{"name":"Rui Costa Pimenta","value":2.62},{"name":"Zé Maria","value":2.62}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":-0.25},{"name":"Marina","value":-0.65},{"name":"Levy Fidélix","value":-0.27},{"name":"Aécio","value":-0.74},{"name":"Luciana Genro","value":-0.49},{"name":"Eymael","value":-0.6},{"name":"Pastor Everaldo","value":-0.43},{"name":"Dilma","value":-0.79},{"name":"Rui Costa Pimenta","value":0.16},{"name":"Zé Maria","value":0.08}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":3.06},{"name":"Marina","value":-0.62},{"name":"Levy Fidélix","value":-0.04},{"name":"Aécio","value":-0.35},{"name":"Luciana Genro","value":-0.13},{"name":"Eymael","value":-0.49},{"name":"Pastor Everaldo","value":-0.49},{"name":"Dilma","value":-0.34},{"name":"Rui Costa Pimenta","value":0.31},{"name":"Zé Maria","value":-0.69}
  				],
  				'saude' : [
            {"name":"Eduardo","value":-0.6},{"name":"Marina","value":-0.7},{"name":"Levy Fidélix","value":-0.5},{"name":"Aécio","value":-0.7},{"name":"Luciana Genro","value":-1.16},{"name":"Eymael","value":-1.05},{"name":"Pastor Everaldo","value":-0.49},{"name":"Dilma","value":-0.93},{"name":"Rui Costa Pimenta","value":-0.35},{"name":"Zé Maria","value":-0.58}
  				]
  		],

  		comparativo : [
  				'cultura' : [
            {"name":"Eduardo","value":2.08},{"name":"Marina","value":-1.8},{"name":"Levy Fidélix","value":2.08},{"name":"Aécio","value":-1.82},{"name":"Luciana Genro","value":2.08},{"name":"Eymael","value":-1.53},{"name":"Pastor Everaldo","value":-2.02},{"name":"Dilma","value":-1.15},{"name":"Rui Costa Pimenta","value":-1.15},{"name":"Zé Maria","value":2.08}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-1.64},{"name":"Marina","value":-0.94},{"name":"Levy Fidélix","value":-0.15},{"name":"Aécio","value":-0.37},{"name":"Luciana Genro","value":-1.57},{"name":"Eymael","value":-0.55},{"name":"Pastor Everaldo","value":-1.58},{"name":"Dilma","value":-0.92},{"name":"Rui Costa Pimenta","value":-0.54},{"name":"Zé Maria","value":-1.31}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":-3.92},{"name":"Marina","value":-3.99},{"name":"Levy Fidélix","value":-3.7},{"name":"Aécio","value":-4.23},{"name":"Luciana Genro","value":-4.3},{"name":"Eymael","value":-4.13},{"name":"Pastor Everaldo","value":-4.61},{"name":"Dilma","value":-3.83},{"name":"Rui Costa Pimenta","value":-1.08},{"name":"Zé Maria","value":0}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-0.19},{"name":"Marina","value":0.66},{"name":"Levy Fidélix","value":4.22},{"name":"Aécio","value":0.28},{"name":"Luciana Genro","value":-0.59},{"name":"Eymael","value":-0.01},{"name":"Pastor Everaldo","value":0.82},{"name":"Dilma","value":0.04},{"name":"Rui Costa Pimenta","value":0.76},{"name":"Zé Maria","value":0.35}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.59},{"name":"Marina","value":-0.17},{"name":"Levy Fidélix","value":0.55},{"name":"Aécio","value":0.4},{"name":"Luciana Genro","value":-0.56},{"name":"Eymael","value":-0.03},{"name":"Pastor Everaldo","value":0.07},{"name":"Dilma","value":-0.36},{"name":"Rui Costa Pimenta","value":0.87},{"name":"Zé Maria","value":-0.01}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":3.98},{"name":"Marina","value":3.98},{"name":"Levy Fidélix","value":3.98},{"name":"Aécio","value":0.12},{"name":"Luciana Genro","value":3.98},{"name":"Eymael","value":0.48},{"name":"Pastor Everaldo","value":0.98},{"name":"Dilma","value":0.61},{"name":"Rui Costa Pimenta","value":3.98},{"name":"Zé Maria","value":3.98}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-0.45},{"name":"Marina","value":0.12},{"name":"Levy Fidélix","value":4.25},{"name":"Aécio","value":-0.32},{"name":"Luciana Genro","value":-0.2},{"name":"Eymael","value":0.22},{"name":"Pastor Everaldo","value":0.68},{"name":"Dilma","value":0.29},{"name":"Rui Costa Pimenta","value":2},{"name":"Zé Maria","value":0.97}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-0.15},{"name":"Marina","value":0.3},{"name":"Levy Fidélix","value":1.08},{"name":"Aécio","value":0.51},{"name":"Luciana Genro","value":0.06},{"name":"Eymael","value":0.42},{"name":"Pastor Everaldo","value":0.3},{"name":"Dilma","value":0.43},{"name":"Rui Costa Pimenta","value":0.27},{"name":"Zé Maria","value":0.1}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-4.62},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-5},{"name":"Luciana Genro","value":-4.65},{"name":"Eymael","value":0},{"name":"Pastor Everaldo","value":-4.22},{"name":"Dilma","value":0},{"name":"Rui Costa Pimenta","value":-3.8},{"name":"Zé Maria","value":-4.03}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":0.08},{"name":"Marina","value":0.2},{"name":"Levy Fidélix","value":4.61},{"name":"Aécio","value":0.71},{"name":"Luciana Genro","value":4.61},{"name":"Eymael","value":1.36},{"name":"Pastor Everaldo","value":0.75},{"name":"Dilma","value":1.19},{"name":"Rui Costa Pimenta","value":4.61},{"name":"Zé Maria","value":4.61}
  				],
  				'outros' : [
            {"name":"Eduardo","value":0.19},{"name":"Marina","value":0.67},{"name":"Levy Fidélix","value":0.17},{"name":"Aécio","value":1.47},{"name":"Luciana Genro","value":4.67},{"name":"Eymael","value":1.92},{"name":"Pastor Everaldo","value":1.44},{"name":"Dilma","value":4.67},{"name":"Rui Costa Pimenta","value":4.67},{"name":"Zé Maria","value":0.96}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":-4.51},{"name":"Marina","value":-3.67},{"name":"Levy Fidélix","value":-3.5},{"name":"Aécio","value":-4.52},{"name":"Luciana Genro","value":-4.5},{"name":"Eymael","value":-3.87},{"name":"Pastor Everaldo","value":-4.61},{"name":"Dilma","value":-2.91},{"name":"Rui Costa Pimenta","value":-2.73},{"name":"Zé Maria","value":-3.68}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":-4.11},{"name":"Marina","value":-3.87},{"name":"Levy Fidélix","value":-5},{"name":"Aécio","value":-4.23},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-1.5},{"name":"Pastor Everaldo","value":-3.54},{"name":"Dilma","value":-3.84},{"name":"Rui Costa Pimenta","value":0},{"name":"Zé Maria","value":0}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":0.07},{"name":"Marina","value":0.41},{"name":"Levy Fidélix","value":0.08},{"name":"Aécio","value":0.55},{"name":"Luciana Genro","value":-0.17},{"name":"Eymael","value":0.34},{"name":"Pastor Everaldo","value":0.05},{"name":"Dilma","value":1.62},{"name":"Rui Costa Pimenta","value":1.42},{"name":"Zé Maria","value":0.22}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":4.65},{"name":"Marina","value":0.67},{"name":"Levy Fidélix","value":1.15},{"name":"Aécio","value":0.93},{"name":"Luciana Genro","value":0.12},{"name":"Eymael","value":4.65},{"name":"Pastor Everaldo","value":0.59},{"name":"Dilma","value":0.39},{"name":"Rui Costa Pimenta","value":4.48},{"name":"Zé Maria","value":0.43}
  				],
  				'saude' : [
            {"name":"Eduardo","value":-0.08},{"name":"Marina","value":0.45},{"name":"Levy Fidélix","value":0.55},{"name":"Aécio","value":0.49},{"name":"Luciana Genro","value":-0.08},{"name":"Eymael","value":0.43},{"name":"Pastor Everaldo","value":-0.31},{"name":"Dilma","value":0.52},{"name":"Rui Costa Pimenta","value":2.39},{"name":"Zé Maria","value":0.61}
  				]
  		]
  	],

  	rui: [
  		testeCego : [
  				'cultura' : [
            {"name":"Eduardo","value":2.86},{"name":"Marina","value":-0.66},{"name":"Levy Fidélix","value":2.86},{"name":"Aécio","value":-0.79},{"name":"Luciana Genro","value":2.86},{"name":"Eymael","value":-0.78},{"name":"Pastor Everaldo","value":-0.58},{"name":"Mauro Iasi","value":-0.77},{"name":"Dilma","value":-0.72},{"name":"Zé Maria","value":2.86}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-0.33},{"name":"Marina","value":-0.28},{"name":"Levy Fidélix","value":-0.27},{"name":"Aécio","value":-0.27},{"name":"Luciana Genro","value":-0.04},{"name":"Eymael","value":-0.12},{"name":"Pastor Everaldo","value":-0.51},{"name":"Mauro Iasi","value":0.37},{"name":"Dilma","value":-0.82},{"name":"Zé Maria","value":-0.66}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":-0.9},{"name":"Marina","value":-1.15},{"name":"Levy Fidélix","value":-0.75},{"name":"Aécio","value":-1.09},{"name":"Luciana Genro","value":-0.66},{"name":"Eymael","value":-1.19},{"name":"Pastor Everaldo","value":-0.85},{"name":"Mauro Iasi","value":-0.4},{"name":"Dilma","value":-1.26},{"name":"Zé Maria","value":2.52}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-0.4},{"name":"Marina","value":-0.24},{"name":"Levy Fidélix","value":3.12},{"name":"Aécio","value":-0.5},{"name":"Luciana Genro","value":-0.61},{"name":"Eymael","value":-0.92},{"name":"Pastor Everaldo","value":-0.64},{"name":"Mauro Iasi","value":-0.23},{"name":"Dilma","value":-0.3},{"name":"Zé Maria","value":-0.11}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-0.83},{"name":"Marina","value":-0.74},{"name":"Levy Fidélix","value":-0.72},{"name":"Aécio","value":-0.71},{"name":"Luciana Genro","value":-0.83},{"name":"Eymael","value":-0.81},{"name":"Pastor Everaldo","value":-0.54},{"name":"Mauro Iasi","value":-0.55},{"name":"Dilma","value":-0.84},{"name":"Zé Maria","value":-0.88}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.6},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.64},{"name":"Pastor Everaldo","value":-2.73},{"name":"Mauro Iasi","value":0},{"name":"Dilma","value":-3.11},{"name":"Zé Maria","value":0}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-1.01},{"name":"Marina","value":-0.73},{"name":"Levy Fidélix","value":0.77},{"name":"Aécio","value":-0.95},{"name":"Luciana Genro","value":-0.67},{"name":"Eymael","value":-1.06},{"name":"Pastor Everaldo","value":-0.51},{"name":"Mauro Iasi","value":0.15},{"name":"Dilma","value":-1.17},{"name":"Zé Maria","value":0.29}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":0.58},{"name":"Marina","value":0.28},{"name":"Levy Fidélix","value":0.7},{"name":"Aécio","value":0.39},{"name":"Luciana Genro","value":1.25},{"name":"Eymael","value":0.36},{"name":"Pastor Everaldo","value":0.52},{"name":"Mauro Iasi","value":1.09},{"name":"Dilma","value":0.24},{"name":"Zé Maria","value":0.18}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":0.07},{"name":"Marina","value":3.37},{"name":"Levy Fidélix","value":3.37},{"name":"Aécio","value":-1.63},{"name":"Luciana Genro","value":0.12},{"name":"Eymael","value":3.37},{"name":"Pastor Everaldo","value":0.11},{"name":"Mauro Iasi","value":3.37},{"name":"Dilma","value":3.37},{"name":"Zé Maria","value":-0.14}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-3.15},{"name":"Marina","value":-3.79},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.61},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.87},{"name":"Pastor Everaldo","value":-3.72},{"name":"Mauro Iasi","value":0},{"name":"Dilma","value":-3.64},{"name":"Zé Maria","value":0}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-3.62},{"name":"Marina","value":-3.54},{"name":"Levy Fidélix","value":-3.06},{"name":"Aécio","value":-2.95},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.27},{"name":"Pastor Everaldo","value":-2.76},{"name":"Mauro Iasi","value":-2.53},{"name":"Dilma","value":0},{"name":"Zé Maria","value":-2.49}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":-0.55},{"name":"Marina","value":-0.98},{"name":"Levy Fidélix","value":-0.7},{"name":"Aécio","value":-0.68},{"name":"Luciana Genro","value":-0.41},{"name":"Eymael","value":-1.02},{"name":"Pastor Everaldo","value":-0.66},{"name":"Mauro Iasi","value":-0.35},{"name":"Dilma","value":-1.11},{"name":"Zé Maria","value":-0.16}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":-3.03},{"name":"Marina","value":-3.28},{"name":"Levy Fidélix","value":-3.19},{"name":"Aécio","value":-3.93},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.51},{"name":"Pastor Everaldo","value":-3.17},{"name":"Mauro Iasi","value":-2.62},{"name":"Dilma","value":-3.43},{"name":"Zé Maria","value":0}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":-0.41},{"name":"Marina","value":-0.82},{"name":"Levy Fidélix","value":-0.44},{"name":"Aécio","value":-0.9},{"name":"Luciana Genro","value":-0.66},{"name":"Eymael","value":-0.76},{"name":"Pastor Everaldo","value":-0.6},{"name":"Mauro Iasi","value":-0.16},{"name":"Dilma","value":-0.95},{"name":"Zé Maria","value":-0.08}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":2.74},{"name":"Marina","value":-0.93},{"name":"Levy Fidélix","value":-0.35},{"name":"Aécio","value":-0.66},{"name":"Luciana Genro","value":-0.45},{"name":"Eymael","value":-0.81},{"name":"Pastor Everaldo","value":-0.81},{"name":"Mauro Iasi","value":-0.31},{"name":"Dilma","value":-0.65},{"name":"Zé Maria","value":-1.01}
  				],
  				'saude' : [
            {"name":"Eduardo","value":-0.25},{"name":"Marina","value":-0.35},{"name":"Levy Fidélix","value":-0.15},{"name":"Aécio","value":-0.35},{"name":"Luciana Genro","value":-0.81},{"name":"Eymael","value":-0.7},{"name":"Pastor Everaldo","value":-0.14},{"name":"Mauro Iasi","value":0.35},{"name":"Dilma","value":-0.58},{"name":"Zé Maria","value":-0.23}
  				]
  		],

  		comparativo : [
  				'cultura' : [
            {"name":"Eduardo","value":3.23},{"name":"Marina","value":-0.66},{"name":"Levy Fidélix","value":3.23},{"name":"Aécio","value":-0.67},{"name":"Luciana Genro","value":3.23},{"name":"Eymael","value":-0.38},{"name":"Pastor Everaldo","value":-0.87},{"name":"Mauro Iasi","value":1.15},{"name":"Dilma","value":0},{"name":"Zé Maria","value":3.23}
  				],
  				'democracia' :	[
            {"name":"Eduardo","value":-1.1},{"name":"Marina","value":-0.4},{"name":"Levy Fidélix","value":0.39},{"name":"Aécio","value":0.17},{"name":"Luciana Genro","value":-1.03},{"name":"Eymael","value":-0.01},{"name":"Pastor Everaldo","value":-1.04},{"name":"Mauro Iasi","value":0.54},{"name":"Dilma","value":-0.38},{"name":"Zé Maria","value":-0.78}
  				],
  				'desenvolvimentoEconomico' : [
            {"name":"Eduardo","value":-2.84},{"name":"Marina","value":-2.91},{"name":"Levy Fidélix","value":-2.62},{"name":"Aécio","value":-3.15},{"name":"Luciana Genro","value":-3.22},{"name":"Eymael","value":-3.05},{"name":"Pastor Everaldo","value":-3.53},{"name":"Mauro Iasi","value":1.08},{"name":"Dilma","value":-2.75},{"name":"Zé Maria","value":1.08}
  				],
  				'direitosHumanos' : [
            {"name":"Eduardo","value":-0.96},{"name":"Marina","value":-0.1},{"name":"Levy Fidélix","value":3.46},{"name":"Aécio","value":-0.48},{"name":"Luciana Genro","value":-1.35},{"name":"Eymael","value":-0.77},{"name":"Pastor Everaldo","value":0.06},{"name":"Mauro Iasi","value":-0.76},{"name":"Dilma","value":-0.72},{"name":"Zé Maria","value":-0.41}
  				],
  				'educacao' : [
            {"name":"Eduardo","value":-1.46},{"name":"Marina","value":-1.04},{"name":"Levy Fidélix","value":-0.32},{"name":"Aécio","value":-0.47},{"name":"Luciana Genro","value":-1.43},{"name":"Eymael","value":-0.9},{"name":"Pastor Everaldo","value":-0.8},{"name":"Mauro Iasi","value":-0.87},{"name":"Dilma","value":-1.23},{"name":"Zé Maria","value":-0.88}
  				],
  				'esporte' : [
            {"name":"Eduardo","value":0},{"name":"Marina","value":0},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.86},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.5},{"name":"Pastor Everaldo","value":-3},{"name":"Mauro Iasi","value":-3.98},{"name":"Dilma","value":-3.37},{"name":"Zé Maria","value":0}
  				],
  				'gestaoPublica' : [
            {"name":"Eduardo","value":-2.44},{"name":"Marina","value":-1.88},{"name":"Levy Fidélix","value":2.25},{"name":"Aécio","value":-2.31},{"name":"Luciana Genro","value":-2.2},{"name":"Eymael","value":-1.78},{"name":"Pastor Everaldo","value":-1.32},{"name":"Mauro Iasi","value":-2},{"name":"Dilma","value":-1.71},{"name":"Zé Maria","value":-1.03}
  				],
  				'infraestrutura' : [
            {"name":"Eduardo","value":-0.42},{"name":"Marina","value":0.03},{"name":"Levy Fidélix","value":0.81},{"name":"Aécio","value":0.23},{"name":"Luciana Genro","value":-0.21},{"name":"Eymael","value":0.14},{"name":"Pastor Everaldo","value":0.03},{"name":"Mauro Iasi","value":-0.27},{"name":"Dilma","value":0.15},{"name":"Zé Maria","value":-0.17}
  				],
  				'liberdadesCivis' : [
            {"name":"Eduardo","value":-0.82},{"name":"Marina","value":3.8},{"name":"Levy Fidélix","value":3.8},{"name":"Aécio","value":-1.2},{"name":"Luciana Genro","value":-0.86},{"name":"Eymael","value":3.8},{"name":"Pastor Everaldo","value":-0.42},{"name":"Mauro Iasi","value":3.8},{"name":"Dilma","value":3.8},{"name":"Zé Maria","value":-0.23}
  				],
  				'meioAmbiente' : [
            {"name":"Eduardo","value":-4.53},{"name":"Marina","value":-4.41},{"name":"Levy Fidélix","value":0},{"name":"Aécio","value":-3.9},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-3.25},{"name":"Pastor Everaldo","value":-3.86},{"name":"Mauro Iasi","value":-4.61},{"name":"Dilma","value":-3.42},{"name":"Zé Maria","value":0}
  				],
  				'outros' : [
            {"name":"Eduardo","value":-4.49},{"name":"Marina","value":-4},{"name":"Levy Fidélix","value":-4.5},{"name":"Aécio","value":-3.2},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-2.75},{"name":"Pastor Everaldo","value":-3.24},{"name":"Mauro Iasi","value":-4.67},{"name":"Dilma","value":0},{"name":"Zé Maria","value":-3.72}
  				],
  				'politicaEconomica' : [
            {"name":"Eduardo","value":-1.78},{"name":"Marina","value":-0.94},{"name":"Levy Fidélix","value":-0.77},{"name":"Aécio","value":-1.79},{"name":"Luciana Genro","value":-1.77},{"name":"Eymael","value":-1.14},{"name":"Pastor Everaldo","value":-1.88},{"name":"Mauro Iasi","value":2.73},{"name":"Dilma","value":-0.18},{"name":"Zé Maria","value":-0.95}
  				],
  				'politicaExterna' : [
            {"name":"Eduardo","value":-4.11},{"name":"Marina","value":-3.87},{"name":"Levy Fidélix","value":-5},{"name":"Aécio","value":-4.23},{"name":"Luciana Genro","value":0},{"name":"Eymael","value":-1.5},{"name":"Pastor Everaldo","value":-3.54},{"name":"Mauro Iasi","value":0},{"name":"Dilma","value":-3.84},{"name":"Zé Maria","value":0}
  				],
  				'segurancaPublica' : [
            {"name":"Eduardo","value":-1.35},{"name":"Marina","value":-1.01},{"name":"Levy Fidélix","value":-1.34},{"name":"Aécio","value":-0.86},{"name":"Luciana Genro","value":-1.59},{"name":"Eymael","value":-1.07},{"name":"Pastor Everaldo","value":-1.36},{"name":"Mauro Iasi","value":-1.42},{"name":"Dilma","value":0.2},{"name":"Zé Maria","value":-1.19}
  				],
  				'politicasSociais' : [
            {"name":"Eduardo","value":0.17},{"name":"Marina","value":-3.81},{"name":"Levy Fidélix","value":-3.33},{"name":"Aécio","value":-3.56},{"name":"Luciana Genro","value":-4.36},{"name":"Eymael","value":0.17},{"name":"Pastor Everaldo","value":-3.89},{"name":"Mauro Iasi","value":-4.48},{"name":"Dilma","value":-4.09},{"name":"Zé Maria","value":-4.06}
  				],
  				'saude' : [
            {"name":"Eduardo","value":0.17},{"name":"Marina","value":-3.81},{"name":"Levy Fidélix","value":-3.33},{"name":"Aécio","value":-3.56},{"name":"Luciana Genro","value":-4.36},{"name":"Eymael","value":0.17},{"name":"Pastor Everaldo","value":-3.89},{"name":"Mauro Iasi","value":-4.48},{"name":"Dilma","value":-4.09},{"name":"Zé Maria","value":-4.06}
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
});
