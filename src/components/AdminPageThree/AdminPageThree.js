import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { parkingList } from '../FakeData/FakeData';
import { Pagination } from 'antd';
const AdminPageThree = () => {
    const [current, setCurrent] = useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
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
    const param = useParams();

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
                       <div className='flex justify-end'>
                       <div class="relative flex gap-5 items-center w-60 border-2 border-gray-200 h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                            <div class="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>

                            <input
                                class=" h-full w-full outline-none text-sm text-gray-700 pr-2"
                                type="text"
                                id="search"
                                placeholder="Search Vehicle" />
                        </div>
                       </div>
                    <h2 className="mb-10 text-3xl text-center -mt-9 uppercase font-extrabold">Packer 1 Queue Details</h2>
                    <div class='max-w-md mx-auto'>
                        
                    </div>
                    <div className="mx-auto rounded-lg">
                        <table className="mx-auto w-[900px] bg-white text-[12px] border rounded-lg">
                            <thead className='rounded-2xl'>
                                <tr className='h-16'>

                                    <th className="text-center  py-3 bg-gray-200  font-medium text-gray-500 uppercase tracking-wider border-b">
                                        Vehicle No
                                    </th>

                                    <th className="px-6 py-3 bg-gray-200 text-center  font-medium text-gray-500 uppercase tracking-wider border-b">
                                        Queue No
                                    </th>
                                    <th className="px-6 py-3 bg-gray-200 text-center font-medium text-gray-500 uppercase tracking-wider border-b">
                                        Queue Status
                                    </th>
                                    <th className="px-6 py-3 bg-gray-200 text-center font-medium text-gray-500 uppercase tracking-wider border-b">
                                        SO No
                                    </th>
                                    {/* <th className="px-6 py-3 bg-gray-200 text-center font-medium text-gray-500 uppercase tracking-wider border-b">
                                        Entry Time
                                    </th>
                                    <th className="px-6 py-3 bg-gray-200 text-center font-medium text-gray-500 uppercase tracking-wider border-b">
                                        Exit Time
                                    </th> */}
                                    {/* <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Details
                                </th>
                                */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y  divide-gray-300">
                                {getStockLocation.map((examinee, index) => (
                                    <tr key={index}>

                                        <td className=" py-3  whitespace-nowrap">
                                           <p className='text-center'> {examinee.vehicleNumber}</p>
                                        </td>

                                        <td className=" py-3 whitespace-nowrap">
                                        <p className='text-center'> {examinee.queueNo}</p>
                                           
                                            {/* Pending */}
                                        </td>
                                        <td className=" py-3 whitespace-nowrap">
                                        <p className='text-center'> {examinee.queueStatus}</p>
                                           
                                            {/* Pending */}
                                        </td>
                                        <td className=" py-3 whitespace-nowrap">
                                        <p className='text-center'> {examinee.salesOrderNumber}</p>
                                            
                                            {/* Pending */}
                                        </td>
                                        {/* <td className="pl-16 py-3 whitespace-nowrap">
                                            {examinee.entryTime}
                                            
                                        </td>
                                        <td className="pl-16 py-3 whitespace-nowrap">
                                            {examinee.exitTime}
                                            
                                        </td> */}
                                        {/* <td className="px-6 py-3 whitespace-nowrap">
                                        <Link to={`/dashboard/examinee-exam-details/${examinee.id}`} state={{ totalQuestions: examinee.totalQuestion, rightAnswers:examinee.total_right_ans }} className='px-2 py-1 rounded-lg text-white font-semibold bg-cyan-400'>
                                            View Details
                                        </Link>
                                    </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div>
                    <Pagination current={current} onChange={onChange} total={50} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminPageThree;
