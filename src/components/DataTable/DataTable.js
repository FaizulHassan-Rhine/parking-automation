import React, { useContext, useEffect, useState } from 'react';
import { FaSortUp, FaSortDown, FaFilter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaPrint } from "react-icons/fa";
import { userContextManager } from '../../App';
// import { UserContextManager, apiUrlContextManager } from '../../../App';


const DataTable = ({ vehicle = [] }) => {
    const [getUserInfo, setUserInfo] = useContext(userContextManager);

    const [examinees, setExaminees] = useState([
        { SL: "1", So_No: 1, Customer: 'Jhon Wick', C_Address: "789 Elm Road, Villagetown, NY 67890", D_Address: "789 Elm Road, Villagetown, NY 67890", Product: "Gadget Y", Quantity: "5", Stock_Location: "Packer-3", Queue_No: "2", Queue_Status: "In Queue" },
        { SL: "1", So_No: 1, Customer: 'Jhon Wick', C_Address: "789 Elm Road, Villagetown, NY 67890", D_Address: "789 Elm Road, Villagetown, NY 67890", Product: "Gadget Y", Quantity: "5", Stock_Location: "Packer-3", Queue_No: "2", Queue_Status: "In Queue" },
        { SL: "1", So_No: 1, Customer: 'Jhon Wick', C_Address: "789 Elm Road, Villagetown, NY 67890", D_Address: "789 Elm Road, Villagetown, NY 67890", Product: "Gadget Y", Quantity: "5", Stock_Location: "Packer-3", Queue_No: "2", Queue_Status: "In Queue" },

    ]);

    const [sortDirection, setSortDirection] = useState('asc');
    const [filterStatus, setFilterStatus] = useState("all");
    const [showFilterButtons, setShowFilterButtons] = useState(false);
    const [getExamneeData, setExamneeData] = useState([]);


    const  handlePrintWindow = () => {
        const date = new Date();
        // const currentTime = new Date().toLocaleString();
        // const currentDate = new Date().toLocaleDateString();
        document.title = 'DAS_' + date.getTime();
        window.print();
      }


    const sortNumbers = () => {
        const sortedExaminees = [...getExamneeData];

        if (sortDirection === 'asc') {
            sortedExaminees.sort((a, b) => a.result - b.result);
            console.log(sortedExaminees)
            setSortDirection('desc');
        } else {
            sortedExaminees.sort((a, b) => b.result - a.result);
            setSortDirection('asc');
            console.log(sortedExaminees)

        }

        setExamneeData(sortedExaminees);
    };

    const filterExaminees = (status) => {
        setFilterStatus(status);
    };


    const filteredExaminees =
        filterStatus === "all"
            ? getExamneeData
            : getExamneeData.filter((examinee) => examinee.result_status === filterStatus);



    return (

                <>
                    <div className="container mx-auto px-3 md:px-0 ">
                        <div className='flex justify-end mb-4'>
                            <div className='flex items-center justify-center cursor-pointer  p-2 gap-2 bg-blue-400 rounded-full'>
                                <p onClick={handlePrintWindow} className='text-white text-xl'><FaPrint /></p>
                            </div>
                        </div>
                        <div className="mx-auto rounded-lg ">
                            {/* <h2 className='printViewTitle invisible h-0'>Queue Details</h2> */}
                           <div className='w-full  overflow-x-scroll sm:overflow-auto mt-12 sm:mt-0' >
                           <table className="mx-auto   bg-white text-[12px] border rounded-lg">
                                <thead>
                                    <tr className='h-12 text-[12px] bg-par-blue-dark text-white'>
                                        <th className="px-6 py-3  text-center  font-medium uppercase tracking-wider border-b">
                                            SL
                                        </th>
                                        <th className="px-6 py-3 text-center  font-medium  uppercase tracking-wider border-b">
                                            SO.No
                                        </th>
                                        <th
                                            className="px-6 py-3  text-center  font-medium  uppercase tracking-wider cursor-pointer border-b"
                                          
                                        >
                                            Customer

                                        </th>


                                        <th className="px-6 py-3  text-center  font-medium  uppercase tracking-wider border-b">
                                            Customer Address
                                        </th>
                                        <th className="px-6 py-3  text-center font-medium uppercase tracking-wider border-b">
                                            Delivery Address
                                        </th>
                                        <th className="px-6 py-3  text-center font-medium  uppercase tracking-wider border-b">
                                            Product
                                        </th>
                                        <th className="px-6 py-3  text-center  font-medium  uppercase tracking-wider border-b">
                                            Quantity
                                        </th>
                                        {/* <th className="px-6 py-3  text-center  font-medium  uppercase tracking-wider border-b">
                                            Storage
                                        </th>
                                        <th className="px-6 py-3  text-center  font-medium uppercase tracking-wider border-b">
                                            Que.No
                                        </th>
                                        <th className="px-6 py-3  text-center font-medium  uppercase tracking-wider border-b">
                                            Status
                                        </th> */}
                                        {/* <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Details
                                </th>
                                */}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-300  text-[12px]">
                                    {vehicle.map((examinee, index) => (
                                        <tr key={index}>
                                            <td className="pl-6 py-3 whitespace-nowrap">
                                                {/* {examinee.sl} */}
                                                {index + 1}
                                            </td>
                                            <td className="pl-6 py-3 whitespace-nowrap">
                                                {examinee.salesOrderNumber}
                                            </td>
                                            <td className="px-6 py-3 whitespace-nowrap">
                                                {examinee.Customer}
                                            </td>
                                            <td className="pl-6 py-3 whitespace-nowrap">
                                                {examinee.customerAddress}
                                                {/* Pending */}
                                            </td>
                                            <td className="pl-6 py-3 whitespace-nowrap">
                                                {examinee.deliveryAddress}
                                                {/* Pending */}
                                            </td>
                                            <td className="pl-8 py-3 whitespace-nowrap">
                                                {getUserInfo.role == 'storage' && examinee.Product}
                                                {getUserInfo.role == 'checker' && <p>******</p>}
                                            </td>
                                            <td className="pl-8 py-3 whitespace-nowrap">
                                                {getUserInfo.role == 'storage' && examinee.Quantity}
                                                {getUserInfo.role == 'checker' && <p>******</p>}
                                                {/* Pending */}
                                            </td>
                                            {/* <td className="pr-3 py-3 whitespace-nowrap">
                                                <p className="border rounded-2xl text-center p-1 border-green-500 first-letter:uppercase"> {examinee.stockLocation}</p>
                                        
                                            </td>
                                            <td className="pr-3 py-3 whitespace-nowrap">
                                                <p className="border rounded-2xl text-center p-1 border-green-500 first-letter:uppercase">  {examinee.queueNo}</p>

                                             
                                            </td>
                                            <td className="pr-3 py-3 whitespace-nowrap">
                                                <p className="border rounded-2xl text-center p-1 border-green-500 first-letter:uppercase"> {examinee.queueStatus} </p>
                                          
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
                        </div>

                    </div>
        </>

    );
};

export default DataTable;
