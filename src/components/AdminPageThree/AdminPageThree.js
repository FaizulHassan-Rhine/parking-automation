import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { parkingList } from '../FakeData/FakeData';
import { Pagination } from 'antd';
import { getSerializer } from 'localforage';
const AdminPageThree = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [getNextData, setNextData] = useState();
    const [getSuggest, setSuggest] = useState([]);
    const [examinees, setExaminees] = useState([
        {

            Sales: "#SO-MN-0001",
            Queue_No: "01",
            Queue_Status: "In Queue",
            Vehicle_Number: "DHA-MET-6754",
            entryTime: "10:30 A.M",
            exitTime: "03:45 P.M",
        },
        {

            Sales: "#SO-MN-0001",
            Queue_No: "01",
            Queue_Status: "In Queue",
            Vehicle_Number: "DHA-MET-6754",
            entryTime: "10:30 A.M",
            exitTime: "03:45 P.M",
        },
        {

            Sales: "#SO-MN-0001",
            Queue_No: "01",
            Queue_Status: "In Queue",
            Vehicle_Number: "DHA-MET-6754",
            entryTime: "10:30 A.M",
            exitTime: "03:45 P.M",
        },

    ]);

    const [getStockLocation, setStockLocation] = useState([]);
    const [getSearchString, setSearchString] = useState("");
    const param = useParams();


    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // const currentImages = actionStatus == "filter" ? getSuggest.slice(indexOfFirstItem, indexOfLastItem) : fileInfo.length > getProccessImgIndex ? fileInfo.slice(indexOfFirstItem, indexOfLastItem) : getAfterBeforeImg.slice(indexOfFirstItem, indexOfLastItem) ;
    const currentImages = getStockLocation.slice(indexOfFirstItem, indexOfLastItem);



    const onChange = (page) => {
        console.log(page);
        setCurrentPage(page);
    };

    const searchFunc = (e) => {
        // setSearchString(e.target.value);
        console.log(e.target.value);
        if (e.target.value.length > 0) {
            const allLockData = parkingList.filter(car => car.stockLocation.toLowerCase() === param.stocklocation.toLowerCase());

            const vicleData = allLockData.filter(car => car.vehicleNumber.toLowerCase() === e.target.value.toLowerCase());

            setStockLocation(vicleData);
            setCurrentPage(1)
            console.log(vicleData);
        } else {
            stockLocationFunc(param.stocklocation);
        }

    }

    const stockLocationFunc = (stockLocation) => {
        console.log(stockLocation);
        const allLockData = parkingList.filter(car => car.stockLocation.toLowerCase() === stockLocation.toLowerCase());
        setStockLocation(allLockData);
    }

    useEffect(() => {

        stockLocationFunc(param.stocklocation);

    }, [])
    return (
        <div>
            <Navbar />
            <div className='bg-2'>
                <div className="container mx-auto pt-4">

                    <h2 className="mb-10 text-3xl text-center pt-6 uppercase font-extrabold">Packer 1 Queue Details</h2>
                    <div class='max-w-md mx-auto'>

                    </div>
                    <div className="mx-auto rounded-lg">
                        <div className='mx-auto w-[900px] flex flex-col gap-3'>
                            <div>
                                <div className='flex items-center gap-7 -mb-10'>
                                <div className='flex items-center gap-3'>
                                   <div>
                                   <h2 className="text-[16px] leading-[56px] font-semibold ">No. of Vehicle Served </h2>
                                    <span className="w-[160px] h-1 bg-[#01BFBF] rounded-full block mt-[-22px]"></span>
                                   </div>
                                   <div className='flex items-center justify-center cursor-pointer p-2 bg-[#01BFBF] rounded-full'>
                                    <p className='h-6 w-6 text-white font-semibold text-center'>10</p>
                                   </div>
                                    
                                </div>
                                <div className='flex items-center gap-3'>
                                   <div>
                                   <h2 className="text-[16px] leading-[56px] font-semibold ">Loading Time Per Vehicle </h2>
                                    <span className="w-[185px] h-1 bg-[#F49880] rounded-full block mt-[-22px]"></span>
                                   </div>
                                   <div className='flex items-center justify-center cursor-pointer p-2 bg-[#F49880] rounded-full'>
                                    <p className='h-6 w-6 text-white font-semibold text-center'>20s</p>
                                   </div>
                                    
                                </div>
                                </div>
                                <div>
                                    <div className='flex justify-end'>
                                        <div class="relative py-1 flex gap-2 items-center w-60 border-2 border-gray-200 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                                            <div class="grid place-items-center h-full w-12 text-gray-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </div>

                                            <input
                                                onChange={searchFunc}
                                                class=" h-full w-full outline-none text-sm text-gray-700 pr-2"
                                                type="text"
                                                id="search"
                                                placeholder="Search Vehicle" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <table className="text-[12px]">
                                <thead className='rounded-2xl'>
                                    <tr className='bg-[#1d242d] text-white font-bold  border-b border-black leading-7'>

                                        <th className="text-center  py-2 font-medium uppercase tracking-wider">
                                            Vehicle No
                                        </th>

                                        <th className="px-6 py-2 text-center  font-medium  uppercase tracking-wider">
                                            Queue No
                                        </th>
                                        <th className="px-6 py-2 text-center font-medium  uppercase tracking-wider">
                                            Queue Status
                                        </th>
                                        <th className="px-6 py-2 text-center font-medium uppercase tracking-wider">
                                            SO No
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="[&>tr:nth-child(odd)]:bg-[#28333e] [&>tr:nth-child(even)]:bg-[#212a33] text-gray-200">
                                    {currentImages.map((examinee, index) => (
                                        <tr key={index}>
                                            <td className=" py-3  whitespace-nowrap">
                                                <p className='text-center'> {examinee.vehicleNumber}</p>
                                            </td>
                                            <td className=" py-3 whitespace-nowrap">
                                                <p className='text-center'> {examinee.queueNo}</p>
                                            </td>
                                            <td className=" py-3 whitespace-nowrap">
                                                <p className='text-center'> {examinee.queueStatus}</p>
                                            </td>
                                            <td className=" py-3 whitespace-nowrap">
                                                <p className='text-center'> {examinee.salesOrderNumber}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='flex justify-center pt-5'>
                        <Pagination current={currentPage} onChange={onChange} defaultPageSize={itemsPerPage} total={getStockLocation.length} />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminPageThree;
