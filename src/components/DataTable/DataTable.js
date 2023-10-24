import React, { useContext, useEffect, useState } from 'react';
import { FaSortUp, FaSortDown, FaFilter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

// import { UserContextManager, apiUrlContextManager } from '../../../App';


const DataTable = () => {
    const [examinees, setExaminees] = useState([
        {SL: "1", So_No:1, Customer: 'Jhon Wick', C_Address: "789 Elm Road, Villagetown, NY 67890", D_Address: "789 Elm Road, Villagetown, NY 67890",Product:"Gadget Y",Quantity:"5",Stock_Location:"Packer-3",Queue_No:"2",Queue_Status:"In Queue"},
        {SL: "1", So_No:1, Customer: 'Jhon Wick', C_Address: "789 Elm Road, Villagetown, NY 67890", D_Address: "789 Elm Road, Villagetown, NY 67890",Product:"Gadget Y",Quantity:"5",Stock_Location:"Packer-3",Queue_No:"2",Queue_Status:"In Queue"},
        {SL: "1", So_No:1, Customer: 'Jhon Wick', C_Address: "789 Elm Road, Villagetown, NY 67890", D_Address: "789 Elm Road, Villagetown, NY 67890",Product:"Gadget Y",Quantity:"5",Stock_Location:"Packer-3",Queue_No:"2",Queue_Status:"In Queue"},
      
    ]);

    const [sortDirection, setSortDirection] = useState('asc');
    const [filterStatus, setFilterStatus] = useState("all");
    const [showFilterButtons, setShowFilterButtons] = useState(false);
    const [getExamneeData, setExamneeData] = useState([]);

   
    


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
       
            <div className="container mx-auto pt-12">
                <h2 className="mb-10 text-3xl text-center uppercase font-extrabold">S.O Details</h2>
                <div className="mx-auto rounded-lg">
                    <table className="mx-auto w-[900px] bg-white text-[12px] border rounded-lg">
                        <thead>
                            <tr className='h-16'>
                                <th className="px-6 py-3 bg-gray-200 text-center  font-medium text-gray-500 uppercase tracking-wider border-b">
                                    SL.No
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center  font-medium text-gray-500 uppercase tracking-wider border-b">
                                Sales Order (SO) Number
                                </th>
                                <th
                                    className="px-6 py-3 bg-gray-200 text-left  font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={sortNumbers}
                                >
                                   Customer
                                   
                                </th>
                               
                             
                                <th className="px-6 py-3 bg-gray-200 text-center  font-medium text-gray-500 uppercase tracking-wider border-b">
                                Customer Address
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center font-medium text-gray-500 uppercase tracking-wider border-b">
                                Delivery Address
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center font-medium text-gray-500 uppercase tracking-wider border-b">
                                Product
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center  font-medium text-gray-500 uppercase tracking-wider border-b">
                                Quantity
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center  font-medium text-gray-500 uppercase tracking-wider border-b">
                                Stock Location
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center  font-medium text-gray-500 uppercase tracking-wider border-b">
                                Queue No
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center font-medium text-gray-500 uppercase tracking-wider border-b">
                                Queue Status
                                </th>
                                {/* <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Details
                                </th>
                                */}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-300">
                            {examinees.map((examinee, index) => (
                                <tr key={index}>
                                    <td className="pl-6 py-3 whitespace-nowrap">
                                        {examinee.SL}
                                    </td>
                                    <td className="pl-6 py-3 whitespace-nowrap">
                                        {examinee.So_No}
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        {examinee.Customer}
                                    </td>
                                    <td className="pl-6 py-3 whitespace-nowrap">
                                        {examinee.C_Address}
                                        {/* Pending */}
                                    </td>
                                    <td className="pl-6 py-3 whitespace-nowrap">
                                        {examinee.D_Address}
                                        {/* Pending */}
                                    </td>
                                    <td className="pl-6 py-3 whitespace-nowrap">
                                        {examinee.Product}
                                        {/* Pending */}
                                    </td>
                                    <td className="pl-6 py-3 whitespace-nowrap">
                                        {examinee.Quantity}
                                        {/* Pending */}
                                    </td>
                                    <td className="pl-6 py-3 whitespace-nowrap">
                                        {examinee.Stock_Location}
                                        {/* Pending */}
                                    </td>
                                    <td className="pl-6 py-3 whitespace-nowrap">
                                        {examinee.Queue_No}
                                        {/* Pending */}
                                    </td>
                                    <td className="pl-6 py-3 whitespace-nowrap">
                                        {examinee.Queue_Status}
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
      
    );
};

export default DataTable;
