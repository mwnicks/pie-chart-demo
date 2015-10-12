(function($) {
  var pie_options = {responsive: true};

  var pie_data = [
    {value: 29,color:"#F7464A",highlight: "#FF5A5E",label: "Spotify (%)"},
    {value: 20,color: "#46BFBD",highlight: "#5AD3D1",label: "iTunes UK (%)"},
    {value: 13,color: "#102031",highlight: "#243445",label: "iTunes Americas (%)"},
    {value: 7,color: "#8da65a",highlight: "#A1BA6E",label: "iTunes Australia (%)"},
    {value: 6,color: "#FDB45C",highlight: "#FFC870",label: "Amazon.co.uk (%)"},
    {value: 4,color: "#78A9FF",highlight: "#8CBDFF",label: "iTunes Canada (%)"},
    {value: 4,color: "#345678",highlight: "#486A8C",label: "Amazon (%)"},
    {value: 3,color: "#E463A2",highlight: "#F877B6",label: "Google Music (%)"},
    {value: 3,color: "#6ea090",highlight: "#82B4A4",label: "boomkat (%)"},
    {value: 3,color: "#8F1F7F",highlight: "#A33393",label: "iTunes EU (%)"},
    {value: 2,color: "#5FFF5F",highlight: "#73FF73",label: "RDIO (%)"},
    {value: 6,color: "#646464",highlight: "#787878",label: "Other (%)"}
] 

  var pieGraph = function(canvas) {
    this.canvas = canvas;
    this.setup();
  }

  pieGraph.prototype = {
    setup: function() {
      var myPieChart = new Chart(this.canvas.getContext("2d"))
                                  .Pie(pie_data,pie_options);
    },
  };


  function init() {
    if ($('#homepage').length !== 0){
      var canvas = $('canvas');
      new pieGraph(canvas[0]);
    }
  }
  $(document).on('page:load', init);
  $(init)
})(jQuery)
