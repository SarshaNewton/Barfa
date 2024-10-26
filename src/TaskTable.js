import React, { useState } from 'react';

function TaskTable() {
    // Step 1: Set up the initial state for rows
    const [rows, setRows] = useState([
        { id: 1, task: '', completed: false } // Initial row with empty values
    ]);

    // Step 2: Define the function that adds a new row
    const addRow = () => {
        // The new row is created with an incremented `id`, and empty fields
        const newRow = { id: rows.length + 1, task: '', completed: false };
        // Update the state by adding the new row to the existing rows array
        setRows([...rows, newRow]);
    };

    // Step 3: Handle input change for the task field
    const handleTaskChange = (id, value) => {
        const updatedRows = rows.map(row =>
            row.id === id ? { ...row, task: value } : row
        );
        setRows(updatedRows);
    };

    // Step 4: Handle checkbox change for completed status
    const handleCheckboxChange = (id, checked) => {
        const updatedRows = rows.map(row =>
            row.id === id ? { ...row, completed: checked } : row
        );
        setRows(updatedRows);
    };

    return (
        <div>
            {/* Table structure */}
            <table>
                <thead>
                <tr>
                    <th>To Do:</th>
                    <th>In Progress:</th>
                    <th>Completed:</th>
                </tr>
                </thead>
                <tbody>
                {/* Step 5: Render each row from the `rows` array */}
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="toDo">
                            <table className="innerTab">
                                <tbody>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            value={row.task}
                                            onChange={(e) => handleTaskChange(row.id, e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={row.completed}
                                            onChange={(e) => handleCheckboxChange(row.id, e.target.checked)}
                                        />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td className="inProg"></td>
                        <td className="completed"></td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/* Step 6: Add a button that triggers `addRow` on click */}
            <button onClick={addRow}>Add Task</button>
        </div>
    );
}

export default TaskTable;
