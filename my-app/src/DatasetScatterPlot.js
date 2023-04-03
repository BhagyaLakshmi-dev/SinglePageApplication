import React from 'react';
import { Scatter } from 'react-chartjs-2';

function DatasetScatterPlot({ data }) {
  const chartData = {
    datasets: [
      {
        label: 'Data',
        data: data,
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
  };

  return <Scatter data={chartData} options={chartOptions} />;
}

export default DatasetScatterPlot;