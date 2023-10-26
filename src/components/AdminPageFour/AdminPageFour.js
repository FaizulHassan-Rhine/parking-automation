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
                <div className='flex flex-col  md:flex-row md:items-center md:justify-between'>
                    <div className='flex justify-center  '>
                        <h className=" font-semibold text-4xl  ">Gate-in Gate-out Summary</h>
                    </div>
                    <div className=' p-4 flex justify-center md:justify-end'>
                        <RangePicker size='small' className='p-2 w-60 bg-gray-200' defaultValue={[dayjs('2023-10-25', dateFormat), dayjs('2023-10-26', dateFormat)]} />
                    </div>
                </div>

                <div className="flex justify-center mt-0 md:mt-10">
                    <PieChartData />
                </div>

            </div>
        </>
    );
};

export default AdminPageFour;




