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


    const itemsPerPage = 20;

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

            var term = e.target.value; // search term (regex pattern)
            var search = new RegExp(term , 'i'); // prepare a regex object
            // let b = a.filter(item => search.test(item));

            // const allLockData = parkingList.filter(car => search.test(car.stockLocation.toLowerCase()));
            const allLockData = parkingList.filter(car => car.stockLocation.toLowerCase() === param.stocklocation.toLowerCase());

            const vicleData = allLockData.filter(car => search.test(car.vehicleNumber.toLowerCase()) || search.test(car.sl.toLowerCase()) || search.test(car.queueNo.toLowerCase())  || search.test(car.queueStatus.toLowerCase()) || search.test(car.LoadingStatus.toLowerCase()) || search.test(car.LoadingTime.toLowerCase()) );
            // const vicleData = allLockData.filter(car => car.vehicleNumber.toLowerCase() === e.target.value.toLowerCase());

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
        <div className='flex flex-col h-screen bg-[#f5f5f5]'>
            {/* <Navbar /> */}
            {/* {bg-2 } */}
            <div>
                <div className="container mx-auto pt-4">

                    <h2 className="mb-10 text-3xl text-center pt-6 uppercase font-extrabold">{param.stocklocation} Queue Details</h2>
                    <div class='max-w-md mx-auto'>

                    </div>
                    <div className='w-full lg:w-[900px] mx-auto overflow-x-scroll sm:overflow-auto mt-12 sm:mt-0'>
                        <div className="mx-auto rounded-lg">
                            <div className='mx-auto  flex flex-col gap-3'>
                                <div className='flex flex-col-reverse gap-5  md:flex-row'>
                                    {/* <div className='flex flex-col md:flex-row gap-4 md:gap-16'>
                                    <div className='flex gap-[10px] items-center w-40 md:w-full bg-par-blue-light text-white font-bold relative rounded-tl-lg rounded-bl-lg'>
                                        <div className='whitespace-nowrap px-4'>
                                            <h2 className="md:text-sm text-xs py-1">No. of Vehicle Served </h2>
                                            <span className=""></span>
                                        </div>
                                        <div className='bg-par-blue-dark flex justify-center  items-center md:py-[7px] md:px-[13px] md:text-xl px-2  py-1 text-white absolute left-[99%] rounded-lg'>
                                            <p className=''>10</p>
                                        </div>
                                    </div>

                                    <div className='flex gap-[10px] items-center  w-40 md:w-full bg-par-blue-light text-white font-bold relative rounded-tl-lg rounded-bl-lg'>
                                        <div className='whitespace-nowrap px-4'>
                                            <h2 className="md:text-sm text-xs py-1">Loading Time Per Vehicle </h2>
                                            <span className=""></span>
                                        </div>
                                        <div className='bg-par-blue-dark flex justify-center items-center md:py-[7px] md:px-[13px] px-2 md:text-xl py-1  text-white absolute left-[99%] rounded-lg'>
                                            <p className=''>20s</p>
                                        </div>
                                    </div>
                                </div> */}
                                    <div className='w-full'>
                                        <div className='flex justify-start md:justify-end'>
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



                                <table className="text-[12px] shadow-md">
                                    <thead className='rounded-2xl'>
                                        <tr className='bg-par-blue-dark text-white font-bold  border-b border-black leading-7'>
                                        <th className="px-6 py-2 text-center font-medium uppercase tracking-wider">
                                                Date
                                            </th>
                                            <th className="px-6 py-2 text-center font-medium uppercase tracking-wider">
                                                SL No
                                            </th>
                                            <th className="text-center  py-2 font-medium uppercase tracking-wider">
                                                Vehicle No
                                            </th>

                                            <th className="px-6 py-2 text-center  font-medium  uppercase tracking-wider">
                                                Queue No
                                            </th>
                                            <th className="px-6 py-2 text-center font-medium  uppercase tracking-wider">
                                                Queue Status
                                                {/* {param.stocklocation.toLowerCase()} */}
                                            </th>
                                            {
                                                // param.stocklocation.toLowerCase() == "parking" && <>
                                                param.stocklocation.toLowerCase() !== "parking" && <>

                                                    <th className="px-6 py-2 text-center font-medium  uppercase tracking-wider">
                                                        loading status
                                                    </th>

                                                    <th className="px-6 py-2 text-center font-medium  uppercase tracking-wider">
                                                        loading time
                                                    </th>

                                                </>
                                            }
                                        </tr>
                                    </thead>
                                    <tbody className="[&>tr:nth-child(odd)]:bg-gray-50 [&>tr:nth-child(even)]:bg-gray-200 text-gray-950">
                                        {currentImages.map((examinee, index) => (
                                            <tr key={index}>
                                                <td className=" py-3 whitespace-nowrap">
                                                    <p className='text-center'> {examinee.date.split(" ")[0]}</p>
                                                </td>
                                                <td className=" py-3 whitespace-nowrap">
                                                    <p className='text-center'> {examinee.sl}</p>
                                                </td>
                                                <td className=" py-3  whitespace-nowrap">
                                                    <p className='text-center'> {examinee.vehicleNumber}</p>
                                                </td>
                                                <td className=" py-3 whitespace-nowrap">
                                                    <p className='text-center'> {examinee.queueNo}</p>
                                                </td>
                                                <td className=" py-3 whitespace-nowrap">
                                                    <p className='text-center'> {examinee.queueStatus}</p>
                                                </td>
                                                {
                                                    param.stocklocation.toLowerCase() !== "parking" &&
                                                    <>
                                                        <td className=" py-3 whitespace-nowrap">
                                                            <p className='text-center'> {examinee.LoadingStatus}</p>
                                                        </td>
                                                        <td className=" py-3 whitespace-nowrap">
                                                            <p className='text-center'> {examinee.LoadingTime}</p>
                                                        </td>

                                                    </>
                                                }
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
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
