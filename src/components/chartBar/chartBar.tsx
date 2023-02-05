import React from 'react';
import { ChartBarProps } from '../../models/chartBar.props';
import './chartBar.css';

const ChartBar = ({point, max}: ChartBarProps) => {
    let barFillHeight = '0%';

    if (max > 0) {
        barFillHeight = `${Math.round((point.value / max) * 100)}%`; 
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barFillHeight, background: 'red'}}></div>
            </div>
            <div className='chart-bar__label'>{point.label}</div>
        </div>

    );
}

export default ChartBar;