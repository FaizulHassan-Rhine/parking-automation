import React, { useContext, useEffect, useState } from 'react';
import { FaSortUp, FaSortDown, FaFilter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

// import { UserContextManager, apiUrlContextManager } from '../../../App';


const DataTable = () => {
    const [examinees, setExaminees] = useState([
        {SL: "1", Vehicle_No:1, Name: 'Examinee 1', Entry_Time: "9:00 A.M.", Exit_Time: "8:00 P.M."},
        {SL: "1", Vehicle_No:1, Name: 'Examinee 2', Entry_Time: "9:00 A.M.", Exit_Time: "8:00 P.M."},
        {SL: "1", Vehicle_No:1, Name: 'Examinee 3', Entry_Time: "9:00 A.M.", Exit_Time: "8:00 P.M."},
        {SL: "1", Vehicle_No:1, Name: 'Examinee 4', Entry_Time: "9:00 A.M.", Exit_Time: "8:00 P.M."},
        {SL: "1", Vehicle_No:1, Name: 'Examinee 5', Entry_Time: "9:00 A.M.", Exit_Time: "8:00 P.M."},
        {SL: "1", Vehicle_No:1, Name: 'Examinee 6', Entry_Time: "9:00 A.M.", Exit_Time: "8:00 P.M."},
        {SL: "1", Vehicle_No:1, Name: 'Examinee 7', Entry_Time: "9:00 A.M.", Exit_Time: "8:00 P.M."},
        {SL: "1", Vehicle_No:1, Name: 'Examinee 8', Entry_Time: "9:00 A.M.", Exit_Time: "8:00 P.M."},
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
                <h2 className="mb-10 text-3xl text-center uppercase font-extrabold">User Data</h2>
                <div className="mx-auto rounded-lg">
                    <table className="mx-auto w-[900px] bg-white border rounded-lg">
                        <thead>
                            <tr className='h-16'>
                                <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    SL.No
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Vehicle No
                                </th>
                                <th
                                    className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                    onClick={sortNumbers}
                                >
                                    Name
                                    {/* {sortDirection === 'asc' ? (
                                        <FaSortUp className="h-6 w-6 mt-3 inline ml-1 text-gray-500" />
                                    ) : (
                                        <FaSortDown className="h-6 w-6 mb-3 inline ml-1 text-gray-500" />
                                    )} */}
                                </th>
                                {/* <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b relative">
                                    Entry Time
                                    <span
                                        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer"
                                        data-tip="Filter Results"
                                        data-for="filterTooltip"
                                        onClick={() => setShowFilterButtons(!showFilterButtons)}
                                    >
                                        <FaFilter className="h-4 w-4 mr-2 inline text-gray-500" />
                                    </span>

                                    {showFilterButtons && (
                                        <div className="flex mt-1 ml-3 gap-1  ">
                                            <button
                                                className={` py-1 rounded-full h-8 w-8 ${filterStatus === "all"
                                                    ? "bg-cyan-400 text-white"
                                                    : "bg-gray-300"
                                                    }`}
                                                onClick={() => filterExaminees("all")}
                                            >
                                                All
                                            </button>
                                            <button
                                                className={` py-1 rounded-full h-8 w-8 ${filterStatus === "Pass"
                                                    ? "bg-cyan-400 text-white"
                                                    : "bg-gray-300"
                                                    }`}
                                                onClick={() => filterExaminees("PASS")}
                                            >
                                                Pass
                                            </button>
                                            <button
                                                className={` py-1 rounded-full h-8 w-8 ${filterStatus === "Fail"
                                                    ? "bg-cyan-400 text-white"
                                                    : "bg-gray-300"
                                                    }`}
                                                onClick={() => filterExaminees("FAIL")}
                                            >
                                                Fail
                                            </button>
                                        </div>
                                    )}
                                </th> */}
                                <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Entry Time
                                </th>
                                <th className="px-6 py-3 bg-gray-200 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                                    Exit Time
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
                                    <td className="pl-16 py-3 whitespace-nowrap">
                                        {examinee.SL}
                                    </td>
                                    <td className="pl-16 py-3 whitespace-nowrap">
                                        {examinee.Vehicle_No}
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        {examinee.Name}
                                    </td>
                                    <td className="pl-16 py-3 whitespace-nowrap">
                                        {examinee.Entry_Time}
                                        {/* Pending */}
                                    </td>
                                    <td className="pl-16 py-3 whitespace-nowrap">
                                        {examinee.Exit_Time}
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
