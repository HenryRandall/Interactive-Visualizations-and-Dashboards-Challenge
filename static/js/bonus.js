function gauge(wfreq) {
    // Use Trig to calculate the angle assuming max is 9
    // Made with help from tutorial on https://com2m.de/blog/technology/gauge-charts-with-plotly/
    var value = parseFloat(wfreq) * 20;
    var degrees = 180 - value;
    var radians = degrees * Math.PI / 180;
    var aX = 0.025 * Math.cos((degrees-90) * Math.PI / 180);
    var aY = 0.025 * Math.sin((degrees-90) * Math.PI / 180);
    var bX = -0.025 * Math.cos((degrees-90) * Math.PI / 180);
    var bY = -0.025 * Math.sin((degrees-90) * Math.PI / 180);
    var cX = 0.5 * Math.cos(radians);
    var cY = 0.5 * Math.sin(radians);
    var path = 'M ' + aX + ' ' + aY + ' L ' + bX + ' ' + bY + ' L ' + cX + ' ' + cY + ' Z';

    // Create Data object
    var data = [
        {
        type: "scatter",
        x: [0],
        y: [0],
        marker: { size: 14, color: "850000" },
        showlegend: false,
        name: "Wash Frequency",
        text: wfreq,
        hoverinfo: "text+name"
        },
        // Create Sections of the gauge
        {
        values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
        rotation: 90,
        text: ["9", "8", "7", "6", "5", "4", "3", "2", "1", ""],
        textinfo: "text",
        textposition: "inside",
        marker: {
            colors: [
            "rgba(0, 105, 11, .5)",
            "rgba(10, 120, 22, .5)",
            "rgba(14, 127, 0, .5)",
            "rgba(110, 154, 22, .5)",
            "rgba(170, 202, 42, .5)",
            "rgba(202, 209, 95, .5)",
            "rgba(210, 206, 145, .5)",
            "rgba(232, 226, 202, .5)",
            "rgba(240, 230, 215, .5)",
            "rgba(255, 255, 255, 0)"
            ]
        },
        hoverinfo: 'none',
        hole: 0.5,
        type: "pie",
        showlegend: false
        }
    ];
    // Create Layout object
    var layout = {
        shapes: [
        {
            type: "path",
            path: path,
            fillcolor: "850000",
            line: {
            color: "850000"
            }
        }
        ],
        title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week",
        height: 500,
        width: 700,
        xaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
        },
        yaxis: {
        zeroline: false,
        showticklabels: false,
        showgrid: false,
        range: [-1, 1]
        }
    };
    Plotly.newPlot("gauge", data, layout);
}