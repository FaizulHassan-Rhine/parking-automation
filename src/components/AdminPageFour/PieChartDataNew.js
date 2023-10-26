import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js

const PieChartDataNew = () =>  {
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;

    const data = {
      labels: ['Security Check to Check-In', 'Check-In to Packer/WH', 'Packer In-time to Packer Out-time', 'Packer to Check-out',],
      datasets: [{
        label: "",
        data: [7, 6, 3, 5],
        backgroundColor: [
          '#F49880',
          '#01BFBF',
          '#008BDE',
          '#FF9C00',
          
        ],
        hoverOffset: 4,
      }],
    };

    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
      aspectRatio: 1,
      cutout: '50%',
      animation: {
        animateRotate: false,
      },
    };

    new Chart(canvas, {
      type: 'doughnut',
      data: data,
      options: options,
    });
  }, []);

  return (
    <div className="w-96 h-96">
      <canvas id="donut-chart" ref={chartRef}></canvas>
    </div>
  );
};

export default PieChartDataNew;
