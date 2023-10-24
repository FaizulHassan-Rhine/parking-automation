import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { parkingList } from '../FakeData/FakeData';

const AdminPageThree = () => {
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

    },[])
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto pt-12">
                        <h2 className="mb-10 text-3xl text-center uppercase font-extrabold">S.O Details</h2>
                        <div className="mx-auto rounded-lg">
                            <table className="mx-auto w-[900px] bg-white text-[12px] border rounded-lg">
                                <thead>
                                    <tr className='h-16'>
                                        
                                        <th className="px-6 py-3 bg-gray-200 text-center  font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Sales Order (SO) Number
                                        </th>
                                       
                                        <th className="px-6 py-3 bg-gray-200 text-center  font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Queue No
                                        </th>
                                        <th className="px-6 py-3 bg-gray-200 text-center font-medium text-gray-500 uppercase tracking-wider border-b">
                                            Queue Status
                                        </th>
                                        <th className="px-6 py-3 bg-gray-200 text-center font-medium text-gray-500 uppercase tracking-wider border-b">
                                        Vehicle Number
                                        </th>
                                        <th className="px-6 py-3 bg-gray-200 text-center font-medium text-gray-500 uppercase tracking-wider border-b">
                                        Entry Time
                                        </th>
                                        <th className="px-6 py-3 bg-gray-200 text-center font-medium text-gray-500 uppercase tracking-wider border-b">
                                        Exit Time
                                        </th>
                                        {/* <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Details
                                </th>
                                */}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-300">
                                    {getStockLocation.map((examinee, index) => (
                                        <tr key={index}>
                                           
                                            <td className="pl-6 py-3 whitespace-nowrap">
                                                {examinee.salesOrderNumber}
                                            </td>
                                           
                                            <td className="pl-6 py-3 whitespace-nowrap">
                                                {examinee.queueNo}
                                                {/* Pending */}
                                            </td>
                                            <td className="pl-6 py-3 whitespace-nowrap">
                                                {examinee.queueStatus}
                                                {/* Pending */}
                                            </td>
                                            <td className="pl-6 py-3 whitespace-nowrap">
                                                {examinee.vehicleNumber}
                                                {/* Pending */}
                                            </td>
                                            <td className="pl-6 py-3 whitespace-nowrap">
                                                {examinee.entryTime}
                                                {/* Pending */}
                                            </td>
                                            <td className="pl-6 py-3 whitespace-nowrap">
                                                {examinee.exitTime}
                                                {/* Pending */}
                                            </td>
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

                    </div>
        </div>
    );
};

export default AdminPageThree;