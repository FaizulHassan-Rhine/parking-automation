import React from 'react';

import { Pie } from '@ant-design/plots';

const PieChartData = () => {
  const data = [
    {
      type: 'Security Check to Check-In',
      value: 2.52,
       
   
    },
    {
      type: 'Check-In to Packer/WH',
      value: 4.2,
   
    },
    {
      type: 'Packer In-time to Packer Out-time',
      value: 5.3,
    
    },
    {
      type: 'Packer to Check-out',
      value: 10.05,
      
    },
   
  ];
  const config = {
    appendPadding: 10,
    data,
    
    angleField: 'value',
    colorField: 'type',
    
    radius: 1,
    color: ['#F49880',
    '#01BFBF',
    '#008BDE',
    '#FF9C00',],
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 24,
   
        
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize:'40px',
         
        },
        content: '22.07m',
      },
    },
  };
  return <Pie className='w-80 text-5xl md:w-[820px] ' {...config} />;
};

export default PieChartData;