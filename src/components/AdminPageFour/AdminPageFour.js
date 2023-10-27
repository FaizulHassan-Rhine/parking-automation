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
            <div className='container mx-auto'>
               
                    <div className='flex justify-center mt-3 '>
                        <h className=" font-semibold text-4xl  ">Gate-in Gate-out Summary</h>
                    </div>
                    <div className=' p-4 flex justify-center md:justify-end'>
                        <RangePicker size='small' className='p-2 w-60 bg-gray-200' defaultValue={[dayjs('2023-10-25', dateFormat), dayjs('2023-10-26', dateFormat)]} />
                    </div>
               

                <div className="flex justify-start ">
                    <PieChartData/>
                </div>

            </div>
        </>
    );
};

export default AdminPageFour;




