import React from 'react';
import Navbar from '../Navbar/Navbar';
import { parkingList } from '../FakeData/FakeData';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';


const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';

const AdminPageTwoV3 = () => {

    const dataTable = [
        {"location": "Parking"},
        {"location": "Warehouse-1"},
        {"location": "Warehouse-2"},
        {"location": "Packer-1"},
        {"location": "Packer-2"},
        {"location": "Packer-3"},
    ]

    const countStockLocation = (location, status) => {

        const countParking = parkingList.filter(car => car.stockLocation.toLowerCase() === location.toLowerCase()).length;
        const count = parkingList.filter(car => car.stockLocation.toLowerCase() === location.toLowerCase() && car.LoadingStatus === status ).length;
        
        if(location === status){
            return countParking > 0 ? countParking : 0;
        }else{
            return count > 0 ? count : 0;
        }
    }
    const avarageLoadTime = (location) => {
        console.log("test : " + location)
        const countParking = parkingList.filter(car => car.stockLocation.toLowerCase() === location.toLowerCase());
        const count = parkingList.filter(car => car.stockLocation.toLowerCase() === location.toLowerCase() && car.LoadingStatus === "Completed" ).length;
        let countTotalTime = 0;

        countParking.length > 0 &&   countParking.map(item => {
            console.log(item.LoadingStatus); 
            if(item.LoadingStatus === "Completed"){
                countTotalTime += parseFloat(item.LoadingTime);
                console.log(countTotalTime);
            }
        })
       
        return (countTotalTime / count).toFixed(2); 
        // return Math.floor(countTotalTime / count);
    }


    return (
        <div className='flex flex-col'>

            {/* <Navbar /> */}
            <div className='bg-[#f5f5f5] pt-5 pb-12'>
                <div className='container mx-auto px-3 md:px-0'>
                    <div className='flex flex-col gap-0'>

                        <div className='flex justify-center mt-4'>
                            <h1 className='text-3xl font-bold uppercase'>Queue Tracking </h1>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <div className='flex justify-center md:justify-end'>
                                    <RangePicker size='small' className='p-2 w-80 text-sm bg-gray-200' defaultValue={[dayjs('2023-10-25', dateFormat), dayjs('2023-10-26', dateFormat)]} showTime />
                                </div>
                            </div>
                            <div className='grid  sm:grid-cols-2  lg:grid-cols-3  items-center gap-4'>

                            {
                                dataTable.map((item, index) => (
                             
                            <Link to={"/dashboard/so-detail/"+item.location.toLowerCase()}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation(`${item.location}`, "Pending")}</h1>
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">{item.location}</h2>
                                        <div className='text-sm text-center text-gray-100 bg-par-blue-dark group-hover:bg-white p-3 rounded-md gap-1 group-hover:text-gray-700 flex flex-col'>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Number of Vehicles Assisted</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark leading-[0px]'>{countStockLocation(`${item.location}`, "Completed")}</span></div>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Loading Time Per Vehicle</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark  leading-[0px]'>{avarageLoadTime(`${item.location}`)} m</span></div>
                                        </div>
                                    </div>
                                </Link>
       
       ))
    }
{/* 
                                <Link to={"/dashboard/so-detail/parking"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark  group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("parking", "Pending")}</h1>
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Parking</h2>
                                        <div className='text-sm text-center text-gray-100 bg-par-blue-dark group-hover:bg-white p-3 rounded-md gap-1 group-hover:text-gray-700 flex flex-col'>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Number of Vehicles Assisted</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark leading-[0px]'>10</span></div>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Loading Time Per Vehicle</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark  leading-[0px]'>20m</span></div>
                                        </div>
                                    </div>
                                </Link>

                                
                                <Link to={"/dashboard/so-detail/warehouse-1"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("Warehouse-1")}</h1>
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Warehouse-1</h2>
                                        <div className='text-sm text-center text-gray-100 bg-par-blue-dark group-hover:bg-white p-3 rounded-md gap-1 group-hover:text-gray-700 flex flex-col'>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Number of Vehicles Assisted</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark leading-[0px]'>{countStockLocation("Warehouse-1", "Completed")}</span></div>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Loading Time Per Vehicle</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark  leading-[0px]'>{avarageLoadTime("Warehouse-1")} m</span></div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to={"/dashboard/so-detail/warehouse-2"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("warehouse-2")}</h1>
                                    </div>
                                    <div className='flex flex-col gap-3 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Warehouse-2</h2>
                                        <div className='text-sm text-center text-gray-100 bg-par-blue-dark group-hover:bg-white p-3 rounded-md gap-1 group-hover:text-gray-700 flex flex-col'>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Number of Vehicles Assisted</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark leading-[0px]'>14</span></div>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Loading Time Per Vehicle</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark  leading-[0px]'>30m</span></div>
                                        </div>
                                    </div>

                                </Link>

                                <Link to={"/dashboard/so-detail/packer-1"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("packer-1")}</h1>
                                    </div>

                                    <div className='flex flex-col gap-3 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Packer-1</h2>
                                        <div className='text-sm text-center text-gray-100 bg-par-blue-dark group-hover:bg-white p-3 rounded-md gap-1 group-hover:text-gray-700 flex flex-col'>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Number of Vehicles Assisted</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark leading-[0px]'>24</span></div>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Loading Time Per Vehicle</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark  leading-[0px]'>27m</span></div>
                                        </div>
                                    </div>

                                </Link>

                                <Link to={"/dashboard/so-detail/packer-2"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("packer-2")}</h1>
                                    </div>

                                    <div className='flex flex-col gap-3 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Packer-2</h2>
                                        <div className='text-sm text-center text-gray-100 bg-par-blue-dark group-hover:bg-white p-3 rounded-md gap-1 group-hover:text-gray-700 flex flex-col'>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Number of Vehicles Assisted</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark leading-[0px]'>9</span></div>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Loading Time Per Vehicle</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark  leading-[0px]'>30m</span></div>
                                        </div>
                                    </div>

                                </Link>

                                <Link to={"/dashboard/so-detail/packer-3"}
                                    className="group bg-white flex flex-col p-10 rounded-lg shadow-md gap-5 bg-gradient-to-br  hover:from-[#0d3a5f] hover:to-[#0881a3] ">
                                    <div className="w-[70px] h-[70px] self-center bg-par-blue-dark group-hover:bg-white group-hover:text-par-blue-dark rounded-lg text-white">
                                        <h1 className='font-bold text-6xl text-center'>{countStockLocation("packer-3")}</h1>
                                    </div>

                                    <div className='flex flex-col gap-3 justify-center items-center'>
                                        <h2 className="text-xl font-bold group-hover:text-gray-100">Packer-3</h2>
                                        <div className='text-sm text-center text-gray-100 bg-par-blue-dark group-hover:bg-white p-3 rounded-md gap-1 group-hover:text-gray-700 flex flex-col'>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Number of Vehicles Assisted</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark leading-[0px]'>5</span></div>
                                            <div className='grid grid-cols-[181px_2px_auto] items-center gap-3 text-left'><span>Loading Time Per Vehicle</span><span> : </span> <span className='text-lg font-bold text-white group-hover:text-par-blue-dark  leading-[0px]'>25m</span></div>
                                        </div>
                                    </div>
                                </Link> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPageTwoV3;