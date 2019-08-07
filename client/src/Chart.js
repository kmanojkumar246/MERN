import React from 'react';



import CanvasJSReact from './canvasjs.react';
import { CanvasJS } from './canvasjs.react';
import { CanvasJSChart} from './canvasjs.react';

function getDataPoints(data) {
    var res = [];
    if (data == undefined) {
        return null;
    }
    data.forEach(element => {
        if (element.hours != null && element.area != null) {
            res.push({ x: element.hours, y: element.area });
        }
    });
    return res;
}

export default function Chart(props) {
    var myDataPoints = getDataPoints(props.data);

    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Area to Hours"
        },
        axisY: {
            title: "Area (Sq Foot)",
            includeZero: false,
            suffix: " ft" //+ "2".sup(),
        },
        axisX: {
            title: "Hours",
            suffix: "h",
            //interval: 2
        },
        data: [{
            type: "scatter",
            toolTipContent: "Hours - {x}, Area - {y}",
            dataPoints: myDataPoints
        }]
    }

    return (   
        <div>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
}