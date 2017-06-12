import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Panel from '../ui/Pannel';

import Grid from 'material-ui/Grid';
import LoginForm from './Login';

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

const randomScalingFactor = function () {
    return Math.round(Math.random() * 1000)
};

const fetchData = ()=>(
    [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
);

const lineChartData = {
    labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    datasets: [
        {
            label: "使用量",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: chartColors.blue,
            pointColor: chartColors.blue,
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: chartColors.green,
            data: fetchData()
        },
        {
            label: "本月剩余",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: chartColors.red,
            pointColor: chartColors.red,
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: chartColors.orange,
            data: fetchData()
        }
    ]
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

const Dashboard = () => (
    <div>
        <Panel title="流量统计" more="/more" labels={labels}>
            <Line data={lineChartData} options={chartOptions}/>
        </Panel>
    </div>
);

export default Dashboard;