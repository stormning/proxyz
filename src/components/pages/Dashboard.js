import React, {Component} from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Panel from '../ui/Pannel';


import {Line} from 'react-chartjs';

const chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};

const chartOptions = {
    responsive: true,
    title: {
        display: true,
        text: 'No Step Interpolation',
    }
};

const labels = [{
    color: chartColors.blue,
    label: "使用量(M)"
}, {
    color: chartColors.red,
    label: "本月剩余(M)"
}
];

const getData = ({days, used, left}) => (
    {
        labels: days || [],
        datasets: [
            {
                label: "使用量",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: chartColors.blue,
                pointColor: chartColors.blue,
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: chartColors.green,
                data: used || []
            },
            {
                label: "本月剩余",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: chartColors.red,
                pointColor: chartColors.red,
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: chartColors.orange,
                data: left || []
            }
        ]
    }
);

const Dashboard = ({usageData}) => {
    const {totalUsed, weekUsed, totalLeft} = usageData;
    return (
        <div>
           {/* <Panel style={{marginBottom: '30px'}} key="panel0">
                <div>
                    已用
                    {totalUsed}
                </div>
                <div>
                    本周
                    {weekUsed}
                </div>
                <div>
                    剩余
                    {totalLeft}
                </div>
            </Panel>*/}
            <Panel title="流量统计" more="/more" labels={labels} key="panel1">
                <Line data={getData(usageData)} options={chartOptions}/>
            </Panel>
        </div>
    )
};

export default Dashboard;