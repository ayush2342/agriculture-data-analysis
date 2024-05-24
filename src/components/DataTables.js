import React, { useEffect, useState } from 'react';
import { Table, Container } from '@mantine/core';
import { processData } from '../utils/dataProcessor';
import data from '../data.js'; 

const TABLE_STYLE = {
  borderCollapse: 'collapse',
  border: '1px solid black',
  width: '100%',
  marginBottom: '1rem',
  textAlign: 'center',
};

const CELL_BORDER_STYLE = {
  border: '1px solid black',
  textAlign: 'center',
};

const DataTables = () => {
  const [aggregatedData, setAggregatedData] = useState([]);
  const [averageData, setAverageData] = useState([]);

  
  useEffect(() => {
    const { aggregated, averages } = processData(data);
    setAggregatedData(aggregated);
    setAverageData(averages);
  }, []);

  return (
    <Container className="table-container">
      <h2>Aggregated Crop Data</h2>
      <Table style={TABLE_STYLE}>
        <thead>
          <tr>
            <th style={CELL_BORDER_STYLE}>Year</th>
            <th style={CELL_BORDER_STYLE}>Crop with Maximum Production</th>
            <th style={CELL_BORDER_STYLE}>Crop with Minimum Production</th>
          </tr>
        </thead>
        <tbody>
          {aggregatedData.map(({ year, maxCrop, minCrop }) => (
            <tr key={year}>
              <td style={CELL_BORDER_STYLE}>{year}</td>
              <td style={CELL_BORDER_STYLE}>{maxCrop}</td>
              <td style={CELL_BORDER_STYLE}>{minCrop}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Average Crop Data (1950-2020)</h2>
      <Table style={TABLE_STYLE}>
        <thead>
          <tr>
            <th style={CELL_BORDER_STYLE}>Crop</th>
            <th style={CELL_BORDER_STYLE}>Average Yield</th>
            <th style={CELL_BORDER_STYLE}>Average Cultivation Area</th>
          </tr>
        </thead>
        <tbody>
          {averageData.map(({ crop, avgYield, avgArea }) => (
            <tr key={crop}>
              <td style={CELL_BORDER_STYLE}>{crop}</td>
              <td style={CELL_BORDER_STYLE}>{avgYield}</td>
              <td style={CELL_BORDER_STYLE}>{avgArea}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DataTables;
