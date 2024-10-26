import React, { useEffect, useState } from 'react';
import styles from './styles/events.module.css';

function MaterialsTable({ onTotalCostChange, onMaterialsCountChange }) {
    const [rows, setRows] = useState([{ id: 1, item: '', assigned: '', cost: '' }]);

    const addRow = () => {
        const newRow = { id: rows.length + 1, item: '', assigned: '', cost: '' };
        setRows([...rows, newRow]);
    };

    const handleInputChange = (id, field, value) => {
        setRows(rows.map(row =>
            row.id === id ? { ...row, [field]: value } : row
        ));
    };

    const calculateTotalCost = () => {
        return rows.reduce((total, row) => total + (parseFloat(row.cost) || 0), 0);
    };

    // Calculate the number of materials (rows) and update the count
    const calculateMaterialsCount = () => {
        return rows.length;
    };

    useEffect(() => {
        const totalCost = calculateTotalCost();
        const materialsCount = calculateMaterialsCount();

        if (onTotalCostChange) {
            onTotalCostChange(totalCost); // Pass total cost up to Events
        }
        if (onMaterialsCountChange) {
            onMaterialsCountChange(materialsCount); // Pass materials count up to Events
        }
    }, [rows, onTotalCostChange, onMaterialsCountChange]);


    return (
        <div className={styles.items}>
            <p>Materials</p>
            <table>
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Assigned</th>
                    <th>Cost</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td>
                            <input
                                type="text"
                                value={row.item}
                                onChange={(e) => handleInputChange(row.id, 'item', e.target.value)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                value={row.assigned}
                                onChange={(e) => handleInputChange(row.id, 'assigned', e.target.value)}
                            />
                        </td>
                        <td>
                            <label>$</label>
                            <input
                                type="number"
                                step="any"
                                value={row.cost}
                                onChange={(e) => handleInputChange(row.id, 'cost', e.target.value)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={addRow}>Add Row</button>
        </div>
    );
}

export default MaterialsTable;
