import React from 'react';

import { Pie } from '@ant-design/plots';

const PieChartData = () => {
  const data = [
    {
      type: 'Security Check to Check-In',
      value: 5,
    },
    {
      type: 'Check-In to Packer/WH',
      value: 4,
    },
    {
      type: 'Packer In-time to Packer Out-time',
      value: 5,
    },
    {
      type: 'Packer to Check-out',
      value: 10,
    },
   
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
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
          fontSize:'60px'
        },
        content: '10s',
      },
    },
  };
  return <Pie className='w-80 md:w-[770px]' {...config} />;
};

export default PieChartData;