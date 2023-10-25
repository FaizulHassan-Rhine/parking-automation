import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';
import Navbar from '../Navbar/Navbar';
import PieChartData from './PieChartData';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const AdminPageFour = () => {



    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <div className=' p-4 '>
                    <RangePicker size='small' className='p-2 w-60 bg-gray-200' defaultValue={[dayjs('2023-10-25', dateFormat), dayjs('2023-10-26', dateFormat)]}  />
                </div>

                <PieChartData/>
                
            </div>
        </>
    );
};

export default AdminPageFour;




