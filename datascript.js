
var White = {
  x: [2000, 2004, 2008, 2012, 2016],
  y: [0, 6.7, 0.9, -3.4, 2.9],
  mode: 'lines+markers',
  marker: {
    color: 'rgb(219, 64, 82)',
    size: [5, 10, 15, 20, 25]
  },
    line: {
      color: 'rgb(219, 64, 82)',
      width: 2
  },
  name: "White"
};

var Black = {
  x: [2000, 2004, 2008, 2012, 2016],
  y: [0, 8.5, 7.7, -1.7, -7.5],
  mode: 'lines+markers',
  marker: {
    color: 'rgb(55, 128, 191)',
    size: 12
  },
  line: {
    color: 'rgb(55, 128, 191)',
    width: 2
  },
  name: "Black"
};

var Hispanic = {
  x: [2000, 2004, 2008, 2012, 2016],
  y: [0, 4, 3.6, -3.4, 1.8],
  mode: 'lines+markers',
  marker: {
    color: 'rgb(128, 0, 128)',
    size: 8
  },
  line: {
    color: 'rgb(128, 0, 128)',
    width: 2
  },
  name: "Hispanic"
};

var Other = {
  x: [2000, 2004, 2008, 2012, 2016],
  y: [0, 5.1, 3.1, -2.6, .9],
  mode: 'lines+markers',
  marker: {
    color: 'rgb(16, 224, 19)',
    size: 8
  },
  line: {
    color: 'rgb(16, 224, 19)',
    width: 2
  },
  name: "Other"
};

var data = [White, Black, Hispanic, Other];

var layout = {
  title: 'Presidential Election Voter Turnout',

yaxis: {
  title: {
    text: '% Change in Turnout Rate',
    font: {
      family: 'Courier New, monospace',
      size: 18,
      color: '#000'
    }
  }
},

shapes: [
        {
            type: 'rect',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'paper',
            x0: '2000',
            y0: 0,
            x1: '2008',
            y1: 1,
            fillcolor: '#FF0000',
            opacity: 0.3,
            line: {
                width: 0
            }
        },
        {
            type: 'rect',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'paper',
            x0: '2008',
            y0: 0,
            x1: '2016',
            y1: 1,
            fillcolor: '#0400F5',
            opacity: 0.3,
            line: {
                width: 0
            }
        },
        {
            type: 'rect',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'paper',
            x0: '1999',
            y0: 0,
            x1: '2000',
            y1: 1,
            fillcolor: '#0400F5',
            opacity: 0.3,
            line: {
                width: 0
            }
        },
        {
            type: 'rect',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'paper',
            x0: '2016',
            y0: 0,
            x1: '2017',
            y1: 1,
            fillcolor: '#FF0000',
            opacity: 0.3,
            line: {
                width: 0
            }
        },
]
};

Plotly.newPlot('myDiv', data, layout);
