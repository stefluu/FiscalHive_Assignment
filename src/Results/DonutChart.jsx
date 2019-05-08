import React, { Component } from 'react'
import CanvasJSReact from '../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let expandedDetails = {
    animationEnabled: true,
    backgroundColor: "#e2ecfa",
    title: { text: "Detailed Breakdown"},
    data: [{
        type: "pie",
        indexLabelFontSize: 16,
        indexLabelFontFamily: 'Merriweather',
        indexLabel: "{y}%",
        indexLabelPlacement: "outside",
        dataPoints: []
    }]
}

export default class DonutChart extends Component {

    componentDidMount(){
        console.log(this.props.ongoingBreakdown)
        console.log(this.props.oneTimeBreakdown)
    }

    formatData(breakdown, type) {
        let total;
        if(type === "ongoing") {
            total = this.props.data[0];
        } else {
            total = this.props.data[1];
        }

        let pieChartFormat = [];
        let colorSet = 
            ["teal", "lightcyan", "paleturquoise", "steelblue", "mediumaquamarine",
                "skyblue", "cadetblue", "lightblue", "lightskyblue", "#6396BD", "#56D2DB" ];
        let currentColorNum = 0;
        for(let i in breakdown) {
            let keyStr = i.toString().toUpperCase();
            let percent = (breakdown[i]/total * 100).toFixed(2);
            let currentColor = colorSet[currentColorNum];
            currentColorNum++;
            let converted = {y: percent, label: keyStr, color: currentColor };
            pieChartFormat.push(converted);
            // console.log(pieChartFormat)
            // debugger
        }
        // console.log("final", pieChartFormat)
        return pieChartFormat;
    }

    drillDown(e) {
        let newOptions = e.chart.options[e.dataPoint.name];
        let chart = e.chart;
        chart.options = expandedDetails;
        chart.options.data[0].dataPoints = newOptions[0].dataPoints;
        chart.render();
    }

  render() {

    let pieChartOngoingData = this.formatData(this.props.ongoingBreakdown, "ongoing");
    let pieChartOneTimeData = this.formatData(this.props.oneTimeBreakdown, "oneTime");

    console.log("ongoing", pieChartOngoingData);
    console.log("onetime", pieChartOneTimeData);

      let total = this.props.data.reduce((accum, num) => {return accum += num});
      let ongoingVal = (this.props.data[0]/total) * 100;
      let oneTimeVal = (this.props.data[1]/total) * 100;

      const options = {
          animationEnabled: true,
          backgroundColor: "#e2ecfa",
          subtitles: [{
              text: "Click to expand section",
              verticalAlign: "center",
              fontSize: 16,
              fontFamily: 'Merriweather',
              dockInsidePlotArea: true
          }],

          data: [{
              type: "doughnut",
              click: this.drillDown,
              showInLegend: true,
              indexLabel: "{name}: {y}",
              yValueFormatString: "#.###'%'",
              dataPoints: [
                  { name: "Ongoing Total", y: ongoingVal, color: "teal"},
                  { name: "One Time Total", y: oneTimeVal, color: "#b5e6fc"} 
              ]
          }],

          "Ongoing Total": [{
              name: "Ongoing Total",
              type: "pie",
              dataPoints: pieChartOngoingData
          }] 
      }
    return (
      <div>
        <CanvasJSChart 
            options={options}
            onRef={ref => this.chart = ref} />

        <button className="button invisible">Back</button>
      </div>
    )
  }
}
