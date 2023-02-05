
import React from 'react';
import { ChartProps } from '../../models/chart.props';
import ChartBar from '../chartBar/chartBar';
import './chart.css';

const Chart = ({points, max}: ChartProps) => {
    return (
        <div className='chart'>
            {points.map(point => <ChartBar point={point} key={point.label} max={max}/>)}
        </div>
    );
}

export default Chart;