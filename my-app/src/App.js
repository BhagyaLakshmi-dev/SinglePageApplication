import React, { useState } from "react";
import CSVReader from 'react-csv-reader'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);



function App() {
  const [data, setData] = useState(null);
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

  const formChartData = (fileData) => {
    let scatterData = [];
    let rowCount=0;
    for (let eachItem of fileData) {
      if(rowCount!=0){
        scatterData.push({ x:eachItem[0]  , y: eachItem[1] })
      }
      rowCount++;
     
    }
   
    let newdata = {
      datasets: [
        {
          label: 'A dataset',
          data: scatterData,
          backgroundColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    };
    setData(newdata);
  }

  return (
    <div>
      <h1>Dataset Upload and Scatter Plot</h1>
      <CSVReader onFileLoaded={(data, fileInfo, originalFile) => { formChartData(data) }} />
     {data &&( <Scatter options={chartOptions} data={data} />)}
    </div>
  );
}

export default App;