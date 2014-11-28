var margin = {top: 50, right: 10, bottom: 10, left: 10},
    width = 350
    //960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    barHeight = 20;

var chartWidth = width / 4,
    chartHeight = height / 4;

var x = d3.scale.linear()
    .range([0, width])

var y = d3.scale.linear()
    .range([0, height]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("top");

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//d3.tsv("liberdades-civis.tsv", type, function(error, data) {
d3.json("cultura.json", function(error, data) {
  console.log(error);
  x.domain(d3.extent(data, function(d) { return +d.value * 1.2; })).nice();

  // container de barras
  var bar = svg.selectAll("g")
      .data(data)
    .enter().append("g")
      .attr("x", function(d) { return x(Math.min(0, d.value)); })
      .attr("y", function(d, i) { return (i * barHeight * 1); })
      .attr("height", barHeight+3);

  bar.append("rect")
    .attr("class", function(d) { return d.value < 0 ? "bar negative" : "bar positive"; })
    .attr("x", function(d) { return x(Math.min(0, d.value)); })
    .attr("y", function(d, i) { return (i * barHeight * 1); })
    .attr("transform", 'translate(0, 2)')
    .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })
    .attr("height", barHeight-2);

  bar.append("text")
        .attr("x", function(d) { return x(Math.min(0, d.value)) - 3; })
        .attr("y", function(d, i) { return ((i+1) * barHeight ); })
        .attr("height", barHeight)
        //.attr("dy", ".35em")
        .attr("text-anchor", "begin")
        .text(function(d) { return d.name; });


  /*svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", function(d) { return d.value < 0 ? "bar negative" : "bar positive"; })
      .attr("x", function(d) { return x(Math.min(0, d.value)); })
      .attr("y", function(d, i) { return (i * barHeight * 1); })
      .attr("width", function(d) { return Math.abs(x(d.value) - x(0)); })
      .attr("height", barHeight);
  */


  svg.append("g")
      .attr("class", "x axis")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
    .append("line")
      .attr("x1", x(0))
      .attr("x2", x(0))
      .attr("y2", barHeight * data.length);

});

function type(d) {
  d.value = +d.value;
  return d;
}