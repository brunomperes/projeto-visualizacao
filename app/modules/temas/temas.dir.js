'use strict';

angular.module('projetobrasil.dados.temas.directives', [])
  .directive('barrasTemas', [function() {
    return {
      restrict: 'A',
      replace: false,
      link: function (scope, element, attrs) {

        Highcharts.setOptions({
          lang : {
            drillUpText : "◁ Voltar para {series.name}",
            loading : "Carregando"
          }
        });

        $(function() {
          // Create the chart
          $(element[0]).highcharts({
            chart : {
              type : 'bar'
            },
            title : {
              text : 'Melhores propostas por tema e candidato'
            },
            xAxis : {
              type : 'category',
            },
            yAxis : {
              title : {
                text : "Média das avaliações"
              }
            },
            legend : {
              enabled : false
            },

            plotOptions : {
              series : {
                borderWidth : 0,
                dataLabels : {
                  enabled : true
                }
              }
            },

            series : [{
              name : 'Temas',
              colorByPoint : true,
              tooltip : {
                pointFormat : '<span style="color:{series.color}">Média {point.y:.2f}</span><br/>'
              },
              data : [{
                "name" : "Liberdades civis",
                "y" : 4.27,
                "drilldown" : "Liberdades civis"
              }, {
                "name" : "Gest\u00e3o P\u00fablica",
                "y" : 4.11,
                "drilldown" : "Gest\u00e3o P\u00fablica"
              }, {
                "name" : "Pol\u00edtica Econ\u00f4mica",
                "y" : 4.09,
                "drilldown" : "Pol\u00edtica Econ\u00f4mica"
              }, {
                "name" : "Desenvolvimento Econ\u00f4mico",
                "y" : 4.07,
                "drilldown" : "Desenvolvimento Econ\u00f4mico"
              }, {
                "name" : "Infraestrutura",
                "y" : 4.02,
                "drilldown" : "Infraestrutura"
              }, {
                "name" : "Sa\u00fade",
                "y" : 4.01,
                "drilldown" : "Sa\u00fade"
              }, {
                "name" : "Meio-ambiente",
                "y" : 3.99,
                "drilldown" : "Meio-ambiente"
              }, {
                "name" : "Pol\u00edtica Externa e Defesa Nacional",
                "y" : 3.98,
                "drilldown" : "Pol\u00edtica Externa e Defesa Nacional"
              }, {
                "name" : "Educa\u00e7\u00e3o",
                "y" : 3.95,
                "drilldown" : "Educa\u00e7\u00e3o"
              }, {
                "name" : "Seguran\u00e7a P\u00fablica",
                "y" : 3.91,
                "drilldown" : "Seguran\u00e7a P\u00fablica"
              }, {
                "name" : "Democracia e Reforma Pol\u00edtica",
                "y" : 3.91,
                "drilldown" : "Democracia e Reforma Pol\u00edtica"
              }, {
                "name" : "Direitos Humanos e Inclus\u00e3o social",
                "y" : 3.9,
                "drilldown" : "Direitos Humanos e Inclus\u00e3o social"
              }, {
                "name" : "Outros",
                "y" : 3.86,
                "drilldown" : "Outros"
              }, {
                "name" : "Cultura e Turismo",
                "y" : 3.77,
                "drilldown" : "Cultura e Turismo"
              }, {
                "name" : "Pol\u00edticas Sociais",
                "y" : 3.72,
                "drilldown" : "Pol\u00edticas Sociais"
              }, {
                "name" : "Esporte e lazer",
                "y" : 3.62,
                "drilldown" : "Esporte e lazer"
              }]
            }],
            drilldown : {
              xAxis : {
                title : {
                  text : 'Décadas'
                }
              },
              series : [{
                "id" : "Liberdades civis",
                "name" : "Liberdades civis",
                "data" : [["Aecio Neves", 5], ["Luciana Genro", 4.65], ["Eduardo Jorge", 4.63], ["Pastor Everaldo", 4.22], ["Jos\u00e9 Maria de Ameida", 4.03], ["Rui Costa Pimenta", 3.8]]
              }, {
                "id" : "Gest\u00e3o P\u00fablica",
                "name" : "Gest\u00e3o P\u00fablica",
                "data" : [["Eduardo Jorge", 4.69], ["Mauro Iasi", 4.61], ["Aecio Neves", 4.57], ["Luciana Genro", 4.45], ["Marina Silva", 4.13], ["Jos\u00e9 Eymael", 4.03], ["Dilma", 3.96], ["Pastor Everaldo", 3.57], ["Jos\u00e9 Maria de Ameida", 3.28], ["Rui Costa Pimenta", 2.25]]
              }, {
                "id" : "Pol\u00edtica Econ\u00f4mica",
                "name" : "Pol\u00edtica Econ\u00f4mica",
                "data" : [["Mauro Iasi", 4.65], ["Pastor Everaldo", 4.61], ["Aecio Neves", 4.52], ["Eduardo Jorge", 4.51], ["Luciana Genro", 4.5], ["Jos\u00e9 Eymael", 3.87], ["Jos\u00e9 Maria de Ameida", 3.68], ["Marina Silva", 3.67], ["Levy Fidelix", 3.5], ["Dilma", 2.91], ["Rui Costa Pimenta", 2.73]]
              }, {
                "id" : "Desenvolvimento Econ\u00f4mico",
                "name" : "Desenvolvimento Econ\u00f4mico",
                "data" : [["Pastor Everaldo", 4.62], ["Luciana Genro", 4.3], ["Aecio Neves", 4.23], ["Jos\u00e9 Eymael", 4.13], ["Marina Silva", 3.99], ["Mauro Iasi", 3.98], ["Eduardo Jorge", 3.92], ["Dilma", 3.83], ["Levy Fidelix", 3.7], ["Rui Costa Pimenta", 1.08]]
              }, {
                "id" : "Infraestrutura",
                "name" : "Infraestrutura",
                "data" : [["Mauro Iasi", 4.67], ["Eduardo Jorge", 4.56], ["Luciana Genro", 4.36], ["Jos\u00e9 Maria de Ameida", 4.32], ["Rui Costa Pimenta", 4.14], ["Pastor Everaldo", 4.11], ["Marina Silva", 4.11], ["Jos\u00e9 Eymael", 4], ["Dilma", 3.99], ["Aecio Neves", 3.91], ["Levy Fidelix", 3.33]]
              }, {
                "id" : "Sa\u00fade",
                "name" : "Sa\u00fade",
                "data" : [["Pastor Everaldo", 4.77], ["Mauro Iasi", 4.66], ["Eduardo Jorge", 4.55], ["Luciana Genro", 4.55], ["Jos\u00e9 Eymael", 4.03], ["Marina Silva", 4.02], ["Aecio Neves", 3.98], ["Dilma", 3.94], ["Levy Fidelix", 3.92], ["Jos\u00e9 Maria de Ameida", 3.85], ["Rui Costa Pimenta", 2.08]]
              }, {
                "id" : "Meio-ambiente",
                "name" : "Meio-ambiente",
                "data" : [["Eduardo Jorge", 4.53], ["Marina Silva", 4.41], ["Aecio Neves", 3.9], ["Pastor Everaldo", 3.86], ["Dilma", 3.42], ["Jos\u00e9 Eymael", 3.25]]
              }, {
                "id" : "Pol\u00edtica Externa e Defesa Nacional",
                "name" : "Pol\u00edtica Externa e Defesa Nacional",
                "data" : [["Levy Fidelix", 5], ["Mauro Iasi", 4.46], ["Aecio Neves", 4.23], ["Eduardo Jorge", 4.11], ["Marina Silva", 3.87], ["Dilma", 3.84], ["Pastor Everaldo", 3.54], ["Jos\u00e9 Eymael", 1.5]]
              }, {
                "id" : "Educa\u00e7\u00e3o",
                "name" : "Educa\u00e7\u00e3o",
                "data" : [["Eduardo Jorge", 4.68], ["Luciana Genro", 4.65], ["Dilma", 4.45], ["Mauro Iasi", 4.42], ["Marina Silva", 4.26], ["Jos\u00e9 Eymael", 4.12], ["Jos\u00e9 Maria de Ameida", 4.1], ["Pastor Everaldo", 4.02], ["Aecio Neves", 3.69], ["Levy Fidelix", 3.54], ["Rui Costa Pimenta", 3.22]]
              }, {
                "id" : "Seguran\u00e7a P\u00fablica",
                "name" : "Seguran\u00e7a P\u00fablica",
                "data" : [["Mauro Iasi", 4.67], ["Luciana Genro", 4.52], ["Pastor Everaldo", 4.29], ["Eduardo Jorge", 4.28], ["Levy Fidelix", 4.26], ["Jos\u00e9 Maria de Ameida", 4.12], ["Jos\u00e9 Eymael", 4], ["Marina Silva", 3.94], ["Aecio Neves", 3.79], ["Rui Costa Pimenta", 2.93], ["Dilma", 2.73]]
              }, {
                "id" : "Democracia e Reforma Pol\u00edtica",
                "name" : "Democracia e Reforma Pol\u00edtica",
                "data" : [["Eduardo Jorge", 4.57], ["Pastor Everaldo", 4.51], ["Luciana Genro", 4.5], ["Jos\u00e9 Maria de Ameida", 4.24], ["Mauro Iasi", 4.09], ["Marina Silva", 3.87], ["Dilma", 3.85], ["Jos\u00e9 Eymael", 3.48], ["Rui Costa Pimenta", 3.47], ["Aecio Neves", 3.3], ["Levy Fidelix", 3.08]]
              }, {
                "id" : "Direitos Humanos e Inclus\u00e3o social",
                "name" : "Direitos Humanos e Inclus\u00e3o social",
                "data" : [["Luciana Genro", 4.81], ["Eduardo Jorge", 4.41], ["Mauro Iasi", 4.25], ["Jos\u00e9 Eymael", 4.23], ["Dilma", 4.18], ["Aecio Neves", 3.94], ["Jos\u00e9 Maria de Ameida", 3.87], ["Marina Silva", 3.56], ["Rui Costa Pimenta", 3.46], ["Pastor Everaldo", 3.4]]
              }, {
                "id" : "Outros",
                "name" : "Outros",
                "data" : [["Levy Fidelix", 4.5], ["Eduardo Jorge", 4.49], ["Mauro Iasi", 4.34], ["Marina Silva", 4], ["Jos\u00e9 Maria de Ameida", 3.72], ["Pastor Everaldo", 3.24], ["Aecio Neves", 3.2], ["Jos\u00e9 Eymael", 2.75]]
              }, {
                "id" : "Cultura e Turismo",
                "name" : "Cultura e Turismo",
                "data" : [["Mauro Iasi", 4.22], ["Pastor Everaldo", 4.1], ["Aecio Neves", 3.9], ["Marina Silva", 3.88], ["Jos\u00e9 Eymael", 3.61], ["Dilma", 3.23], ["Rui Costa Pimenta", 3.23]]
              }, {
                "id" : "Pol\u00edticas Sociais",
                "name" : "Pol\u00edticas Sociais",
                "data" : [["Mauro Iasi", 4.9], ["Luciana Genro", 4.53], ["Eduardo Jorge", 4.43], ["Dilma", 4.26], ["Jos\u00e9 Maria de Ameida", 4.22], ["Pastor Everaldo", 4.06], ["Levy Fidelix", 4], ["Marina Silva", 3.97], ["Aecio Neves", 3.72], ["Rui Costa Pimenta", 0.17]]
              }, {
                "id" : "Esporte e lazer",
                "name" : "Esporte e lazer",
                "data" : [["Aecio Neves", 3.86], ["Jos\u00e9 Eymael", 3.5], ["Dilma", 3.37], ["Pastor Everaldo", 3]]
              }]
            }
          });
        });


      }
    };
  }]);
