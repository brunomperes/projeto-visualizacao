'use strict';

angular.module('projetobrasil.dados.candidatos.directives', [])
  .directive('graficoRadar', [function() {
    return {
      restrict: 'E',
      replace: false,
      link: function (scope, element, attrs) {

          var colorscale = d3.scale.category10();

          var w = $(element[0]).parent().width()-300,
            h = $(element[0]).parent().width()-300;

          //Options for the Radar chart, other than default
          var mycfg = {
            w: w,
            h: h,
            maxValue: 5,
            levels: 5,
            ExtraWidthX: 200
          };

          geraVisualizacao();

          if (attrs.legenda !== undefined){
            scope.$watch(attrs, function(){
              console.log(attrs.dadosCandidato[0]);
            }, true);
          }

          function geraVisualizacao() {
            //Legend titles
            if (attrs.legenda === undefined){
              var LegendOptions = ['Comparativo', 'Teste cego'];
            } else {
              var LegendOptions = JSON.parse(attrs.legenda);
            }

            //Data
            var d = JSON.parse(attrs.dadosCandidato);
            console.log(d.length);

            //Call function to draw the Radar chart
            //Will expect that data is in %'s
            RadarChart.draw(element[0], d, mycfg);

            ////////////////////////////////////////////
            /////////// Initiate legend ////////////////
            ////////////////////////////////////////////

            var svg = d3.select(element[0])
              .selectAll('svg')
              .append('svg')
              .attr('width', w+200)
              .attr('height', h);

            //Create the title for the legend
            // var text = svg.append('text')
            //   .attr('class', 'title')
            //   .attr('transform', 'translate(90,0)')
            //   .attr('x', w - 70)
            //   .attr('y', 10)
            //   .attr('font-size', '12px')
            //   .attr('fill', '#404040')
              // .text('What % of owners use a specific service in a week');

            //Initiate Legend
            var legend = svg.append('g')
              .attr('class', 'legend')
              .attr('height', 100)
              .attr('width', 200)
              .attr('transform', 'translate(160,0)')
              ;
              //Create colour squares
              legend.selectAll('rect')
                .data(LegendOptions)
                .enter()
                .append('rect')
                .attr('x', w - 65)
                .attr('y', function(d, i){ return i * 20;})
                .attr('width', 10)
                .attr('height', 10)
                .style('fill', function(d, i){ return colorscale(i);})
                ;
              //Create text next to squares
              legend.selectAll('text')
                .data(LegendOptions)
                .enter()
                .append('text')
                .attr('x', w - 52)
                .attr('y', function(d, i){ return i * 20 + 9;})
                .attr('font-size', '11px')
                .attr('fill', '#737373')
                .text(function(d) { return d; })
                ;
          }



      }
    };
  }])
;
