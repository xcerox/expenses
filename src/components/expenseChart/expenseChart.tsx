import React from 'react';
import { Point } from "../../models/chart.type";
import { ExpenseChartProps } from "../../models/expenseChart.props";
import { Chart } from "..";


const ExpensesChart = ({expenses}: ExpenseChartProps) => {

    const chartPoints: Point[] = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    expenses.forEach(expense => {
        const month = expense.date.getMonth();
        chartPoints[month].value += expense.amount;
    });

    const max = Math.max(...chartPoints.map(point => point.value));

    return <Chart points={chartPoints} max={max}/>;
}



export default ExpensesChart;