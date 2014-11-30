'use strict';

angular.module('projetobrasil.dados.propostas.directives', [])
  .directive('circlePacking', [function() {
    return {
      restrict: 'E',
      replace: false,
      link: function (scope, element, attrs) {

        var margin = 15,   //20
            diameter = $(element[0]).parent().width()/1.5,  //960
            width = $(element[0]).parent().width();

        var color = d3.scale.linear()
            .domain([-1, 5])
            .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
            .interpolate(d3.interpolateHcl);

        var pack = d3.layout.pack()
            .padding(2)
            .size([diameter - margin, diameter - margin])
            .value(function(d) { return d.size; })

        var dataRoot = JSON.parse(attrs.dadosPropostas);

        geraVisualizacao(element[0], dataRoot);

        function geraVisualizacao(element, root) {
          // if (error) return console.error(error);

          var svg = d3.select(element).append("svg")
            .attr("width", width)
            .attr("height", diameter)
          .append("g")
            .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

          var focus = root,
              nodes = pack.nodes(root),
              view;

          var circle = svg.selectAll("circle")
              .data(nodes)
            .enter().append("circle")
              .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
              .attr('theme', function(d){ if (d.depth == 3) { return d.parent.name; } })
              .attr("fill", function(d) { return d.children ? color(d.depth) : null; })
              .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

          var text = svg.selectAll("text")
              .data(nodes)
            .enter().append("text")
              .attr("class", "label")
              .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
              .style("display", function(d) { return d.parent === root ? null : "none"; })
              .text(function(d) { return d.name; });

          var node = svg.selectAll("circle,text");

          d3.select("body")
              .on("click", function() { zoom(root); });

          zoomTo([root.x, root.y, root.r * 2 + margin]);

          var LegendColors = {'Cultura e Turismo': 'rgba(140, 213, 0, 0.7)',
            'Democracia e Reforma Política': 'rgba(200, 131, 255, 0.7)',
            'Desenvolvimento Econômico': 'rgba(23, 162, 220, 0.7)',
            'Direitos Humanos e Inclusão social': 'rgba(217, 27, 139, 0.7)',
            'Educação': 'rgba(101, 45, 144, 0.7)',
            'Esporte e lazer': 'rgba(94, 50, 9, 0.7)',
            'Gestão Pública': 'rgba(237, 29, 36, 0.7)',
            'Infraestrutura': 'rgba(6, 32, 132, 0.7)',
            'Liberdades civis': 'rgba(26, 228, 183, 0.7)',
            'Segurança Pública': 'rgba(246, 164, 28, 0.7)',
            'Meio-ambiente': 'rgba(56, 153, 12, 0.7)',
            'Política Econômica': 'rgba(46, 40, 29, 0.7)',
            'Política Externa e Defesa Nacional': 'rgba(255, 205, 6, 0.7)',
            'Políticas Sociais': 'rgba(149, 149, 149, 0.7)',
            'Saúde': 'rgba(255, 171, 236, 0.7)',
            'Outros': 'rgba(26, 228, 183, 0.7)'
          };
          var LegendOptions = [
            'Cultura e Turismo',
            'Democracia e Reforma Política',
            'Desenvolvimento Econômico',
            'Direitos Humanos e Inclusão social',
            'Educação',
            'Esporte e lazer',
            'Gestão Pública',
            'Infraestrutura',
            'Liberdades civis',
            'Segurança Pública',
            'Meio-ambiente',
            'Política Econômica',
            'Política Externa e Defesa Nacional',
            'Políticas Sociais',
            'Saúde',
            'Outros'
          ];

          // Create the legend
          var legend = svg.append('g')
                .attr('class', 'legend')
                .attr('height', 100)
                .attr('width', 200)
                .attr('transform', 'translate(-510,-300)')
                ;
                //Create colour squares
                legend.selectAll('rect')
                  .data(LegendOptions)
                  .enter()
                  .append('rect')
                  .attr('x', width - 65)
                  .attr('y', function(d, i){ return i * 20;})
                  .attr('width', 10)
                  .attr('height', 10)
                  .style('fill', function(d, i){ return LegendColors[d];})
                  ;
                //Create text next to squares
                legend.selectAll('text')
                  .data(LegendOptions)
                  .enter()
                  .append('text')
                  .attr('x', width - 52)
                  .attr('y', function(d, i){ return i * 20 + 9;})
                  .attr('font-size', '11px')
                  .attr('fill', function(d, i){ return i * 20 + 9;})
                  .text(function(d) { return d; })
                  ;

          function zoom(d) {
            var focus0 = focus; focus = d;

            var transition = d3.transition()
                .duration(d3.event.altKey ? 7500 : 750)
                .tween("zoom", function(d) {
                  var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
                  return function(t) { zoomTo(i(t)); };
                });

            transition.selectAll("text")
              .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
                .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
                .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
                .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
          }

          function zoomTo(v) {
            var k = diameter / v[2]; view = v;
            node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
            circle.attr("r", function(d) { return d.r * k; });
          }
        }

        d3.select(self.frameElement).style("height", diameter + "px");

      }
    };
  }]);
