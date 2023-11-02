import React from 'react';
import Navbar from '../Navbar/Navbar';
import { parkingList } from '../FakeData/FakeData';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';


const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

const AdminPageTwoV3 = () => {

    const countStockLocation = (location) => {
        const count = parkingList.filter(car => car.stockLocation.toLowerCase() === location.toLowerCase()).length;
        return count > 0 ? count : 0;
    }


    return (
        <div className='flex flex-col'>

            {/* <Navbar /> */}
            <div className='bg-[#f5f5f5] pt-5 pb-12'>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-4'>

                        <div className='flex justify-center mt-4'>
                            <h1 className='text-3xl font-bold uppercase'>Queue Tracking </h1>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <div className='flex justify-center md:justify-end'>
                                    <RangePicker size='small' className='p-2 w-80 text-sm bg-gray-200' defaultValue={[dayjs('2023-10-25', dateFormat), dayjs('2023-10-26', dateFormat)]} showTime />
                                </div>
                            </div>

                            <div className='grid  sm:grid-cols-2  lg:grid-cols-3  items-center gap-20'>

                                <Link to={"/so-detail/packer-1"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark  group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("Packer-1")}</h1>
                                    </div>
                                    <div className='flex flex-col gap-1 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Packer 1</h2>
                                        {/* <p className='text-sm text-center text-gray-500 group-hover:text-gray-300'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p> */}
                                    </div>
                                </Link>
                                <Link to={"/so-detail/packer-2"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("Packer-2")}</h1>
                                    </div>
                                    <div className='flex flex-col gap-1 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Packer 2</h2>
                                        {/* <p className='text-sm text-center text-gray-500 group-hover:text-gray-300'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p> */}
                                    </div>
                                </Link>

                                <Link to={"/so-detail/packer-3"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("Packer-3")}</h1>
                                    </div>
                                    <div className='flex flex-col gap-1 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Packer 3</h2>
                                        {/* <p className='text-sm text-center text-gray-500 group-hover:text-gray-300'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p> */}
                                    </div>
                                </Link>

                                <Link to={"/so-detail/warehouse-1"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("warehouse-1")}</h1>
                                    </div>
                                    <div className='flex flex-col gap-1 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Warehouse-1</h2>
                                        {/* <p className='text-sm text-center text-gray-500 group-hover:text-gray-300'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p> */}
                                    </div>
                                </Link>

                                <Link to={"/so-detail/warehouse-2"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("warehouse-2")}</h1>
                                    </div>
                                    <div className='flex flex-col gap-1 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Warehouse-2</h2>
                                        {/* <p className='text-sm text-center text-gray-500 group-hover:text-gray-300'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p> */}
                                    </div>
                                </Link>

                                <Link to={"/so-detail/parking"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("parking")}</h1>
                                    </div>
                                    <div className='flex flex-col gap-1 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Parking</h2>
                                        {/* <p className='text-sm text-center text-gray-500 group-hover:text-gray-300'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to </p> */}
                                    </div>
                                </Link>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPageTwoV3;