import React, { Component } from 'react'
import CanvasJSReact from '../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let expandedDetails = {
    animationEnabled: true,
    backgroundColor: "#e2ecfa",
    title: { 
        text: "Detailed Breakdown",
        fontFamily: 'Merriweather'
    },
    data: [{
        type: "pie",
        indexLabelLineThickness: 3,
        indexLabelFontSize: 16,
        indexLabelFontFamily: 'Merriweather',
        indexLabel: "{name}: {y}%",
        indexLabelPlacement: "outside",
        dataPoints: []
    }]
}

export default class DonutChart extends Component {

    constructor(props){
        super(props);
        this.twoBreakdown = null;
    }

    componentDidMount(){
        let originalOptions = this.chart.options;
        this.twoBreakdown = originalOptions;
    }

    formatData(breakdown, type) {
        let total;
        let labelNames;
        if(type === "ongoing") {
            total = this.props.data[0];
            labelNames = Object.keys(breakdown).map((name) => {return name.slice(0,1).toUpperCase() + name.slice(1)})
        } else {
            total = this.props.data[1];
            labelNames = ["Gear", "Activity Equipment", "Nursery", "Feeding", "Breastfeeding", "Bathing/Grooming", "Other"];
        }

        let pieChartFormat = [];

        let colorSet = 
            ["teal", "lightcyan", "paleturquoise", "steelblue", "mediumaquamarine",
                "skyblue", "cadetblue", "lightblue", "lightskyblue", "#6396BD", "#56D2DB" ];

        let currentCountNum = 0;
        for(let i in breakdown) {
            let percent = (breakdown[i]/total * 100).toFixed(2);
            
            let currentColor = colorSet[currentCountNum];
            let name = labelNames[currentCountNum];
            
            let converted = { 
                name: name, 
                y: percent, 
                label: name, 
                color: currentColor, 
                indexLabelFontColor: "black"};
                
                pieChartFormat.push(converted);
                
            currentCountNum++;
        }
        return pieChartFormat;
    }

    drillDown(e) {
        let backButton = document.getElementById("pieChartBackBtn");
        backButton.style.display = "block";

        let newOptions = e.chart.options[e.dataPoint.name];
        let chart = e.chart;
        chart.options = expandedDetails;
        chart.options.data[0].dataPoints = newOptions[0].dataPoints;
        chart.render();
    }

    backUp(e) {
        let backButton = document.getElementById("pieChartBackBtn");
        backButton.style.display = "none";
        let chart = this.chart;
        chart.options = this.twoBreakdown;
        chart.render();
    }

  render() {

    let pieChartOngoingData = this.formatData(this.props.ongoingBreakdown, "ongoing");
    let pieChartOneTimeData = this.formatData(this.props.oneTimeBreakdown, "oneTime");

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
            indexLabelLineThickness: 3,
            yValueFormatString: "#.###'%'",
            dataPoints: [
                { name: "Ongoing Total", y: ongoingVal, color: "teal"},
                { name: "One Time Total", y: oneTimeVal, color: "steelblue"} 
            ]
        }],

        "Ongoing Total": [{
            name: "Ongoing Total",
            type: "pie",
            dataPoints: pieChartOngoingData
        }],
    
        "One Time Total": [{
            name: "One Time Total",
            type: "pie",
            dataPoints: pieChartOneTimeData
        }]
      }
    return (
      <div>
        <CanvasJSChart 
            options={options}
            onRef={ref => this.chart = ref} />

        <button 
            className="formButtons" 
            id="pieChartBackBtn"
            onClick={(e) => this.backUp(e)}>
            Back to Previous Breakdown</button>
      </div>
    )
  }
}
