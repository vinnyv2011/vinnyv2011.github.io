

var White = {
  x: [2000, 2004, 2008, 2012, 2016],
  y: [0, 6.7, 0.9, -3.4, 2.9],
  mode: 'lines+markers',
  marker: {
    color: '#F59301',
    size: [90, 80, 80, 70, 60]
  },
    line: {
      color: '#F59301',
      width: 2
  },
  name: "White"
};

var Black = {
  x: [2000, 2004, 2008, 2012, 2016],
  y: [0, 8.5, 7.7, -1.7, -7.5],
  mode: 'lines+markers',
  marker: {
    color: '#ECF501',
    size: [22.4, 22.2, 24.6, 26.4, 24.6]
  },
  line: {
    color: '#ECF501',
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
    size: [10.8, 11.8, 14.6, 16.6, 18.2]
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
    size: [4.8, 7.2, 7.6, 8.8, 10]
  },
  line: {
    color: 'rgb(16, 224, 19)',
    width: 2
  },
  name: "Other"
};

var data = [White, Black, Hispanic, Other];

var layout = {
  title: {
    text: 'Presidential Election Voter Turnout',
  font: {
    family: 'Courier New, monospace',
    size: 30,
    color: '#000'
  }
},
yaxis: {
  title: {
    text: '% Change in Turnout Rate Cycle to Cycle',
    font: {
      family: 'Courier New, monospace',
      size: 14,
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
            opacity: 0.2,
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
            opacity: 0.2,
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
            opacity: 0.2,
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
            opacity: 0.2,
            line: {
                width: 0
            }
        },
]
};

Plotly.newPlot('myDiv', data, layout, {scrollZoom: true});
