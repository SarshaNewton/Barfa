import React, { useState } from 'react';
import "./styles/haufe.css";
import styles from "./styles/events.module.css";
import logo from "./assets/logo.png"
import { Link } from "react-router-dom";
import TaskTable from "./TaskTable";
import MaterialsTable from "./MaterialsTable";
import { useParams } from 'react-router-dom';


function Events() {
    const [budget, setBudget] = useState(0); // State for user-defined budget
    const [remainingBudget, setRemainingBudget] = useState(0); // State for remaining budget
    const [totalCost, setTotalCost] = useState(0); // State for total cost from MaterialsTable
    const [materialsCount, setMaterialsCount] = useState(0); // State for count of materials
    const { eventName } = useParams();

    // Update budget when user input changes
    const handleBudgetChange = (e) => {
        const newBudget = parseFloat(e.target.value) || 0;
        setBudget(newBudget);
        setRemainingBudget(newBudget - totalCost); // Update remaining budget immediately
    };

    // Function to update total cost from MaterialsTable
    const updateTotalCost = (cost) => {
        setTotalCost(cost);
        setRemainingBudget(budget - cost); // Update remaining budget when total cost changes
    };

    // Function to update materials count from MaterialsTable
    const updateMaterialsCount = (count) => {
        setMaterialsCount(count);
    };

    return (
        <div className="row" id="indexy">
            <div className="twenty" id="sideBar">
                <img src={logo} />
                <p>Profile</p>
                <Link to="/Events"><p>Events</p></Link>
            </div>
            <div className="eighty" id="main">
                <div class={styles.eventDeets}>
                    <h1 id="eventName">{eventName}</h1>
                    <div id="online" className="row"></div>
                </div>
                <div id="details">
                    <div className="row">
                        <div className="twenty"><p>Budget</p></div>
                        <div className="eighty">
                            <label className={styles.budget}>$</label>
                            <input
                                id="budgy"
                                className={styles.budget}
                                type="number"
                                step="any"
                                placeholder="Enter budget"
                                onChange={handleBudgetChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="thirty">
                            <div className="row">
                                <p className="fifty">Remaining Budget</p>
                                <p className="fifty">${remainingBudget.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="thirty">
                            <div className="row">
                                <p className="fifty">Tasks Outstanding</p>
                                <p className="fifty"></p>
                            </div>
                        </div>
                        <div className="thirty">
                            <div className="row">
                                <p className="fifty">Materials Needed</p>
                                <p className="fifty">{materialsCount}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <TaskTable />
                </div> */}
                <br/>
                <div className={styles.items}>
                    <MaterialsTable onTotalCostChange={updateTotalCost} />
                </div>

            </div>
        </div>
    );
}

export default Events;
