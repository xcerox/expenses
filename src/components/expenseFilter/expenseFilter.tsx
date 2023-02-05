
import React from "react";
import { expenseFilterProps } from "../../models/expenseFilter.props";
import './expenseFilter.css';

const ExpenseFilter = (props: expenseFilterProps) => {

    const dropdownChangeHandler = (event: any) => {
        event.preventDefault();
        props.onChangeFilter(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value="All">All</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
}

export default React.memo(ExpenseFilter);