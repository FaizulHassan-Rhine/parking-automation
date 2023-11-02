import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import { parkingList } from '../FakeData/FakeData';
import { Pagination } from 'antd';
import { getSerializer } from 'localforage';
const AdminStockFile = () => {
    const [stockFile, setStockFile] = useState([
        {
            date: "11/1/2023",
            storage: "Packer-1",
            product: "Product-1",
            quantity: 5,
            unit: "Ton",
        },
        {
            date: "11/1/2023",
            storage: "Packer-1",
            product: "Product-1",
            quantity: 15,
            unit: "Ton",
        },
        {
            date: "11/1/2023",
            storage: "Packer-2",
            product: "Product-2",
            quantity: 25,
            unit: "Ton",

        },
        {
            date: "11/1/2023",
            storage: "Packer-3",
            product: "Product-3",
            quantity: 25,
            unit: "Ton",
        }

    ]);


    let navigate = useNavigate();

    const submitFunc = ()=>{
        navigate('/dashboard/stock-info');
    }
    return (
        <div className='flex flex-col h-screen bg-[#f5f5f5]'>
            {/* <Navbar /> */}
            {/* {bg-2 } */}
            <div>
                <div className="container mx-auto pt-4">

                    <h2 className="mb-10 text-3xl text-center pt-6 uppercase font-extrabold">Stock file upload detail</h2>
                    <div className='max-w-md mx-auto'>

                    </div>
                    <div className="mx-auto rounded-lg">
                        <div className='mx-auto w-[900px] flex flex-col gap-3'>

                            <table className="text-[12px] shadow-md">
                                <thead className='rounded-2xl'>
                                    <tr className='bg-par-blue-dark text-white font-bold  border-b border-black leading-7'>
                                        <th className="text-center  py-2 font-medium uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-2 text-center  font-medium  uppercase tracking-wider">
                                            Storage
                                        </th>
                                        <th className="px-6 py-2 text-center font-medium  uppercase tracking-wider">
                                            Product
                                        </th>
                                        <th className="px-6 py-2 text-center font-medium uppercase tracking-wider">
                                            Quantity
                                        </th>
                                        <th className="px-6 py-2 text-center font-medium uppercase tracking-wider">
                                            Unit
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="[&>tr:nth-child(odd)]:bg-gray-50 [&>tr:nth-child(even)]:bg-gray-200 text-gray-950">
                                    {stockFile.map((data, index) => (
                                        <tr key={index}>
                                            <td className=" py-3  whitespace-nowrap">
                                                <p className='text-center'>{data.date}</p>
                                            </td>
                                            <td className=" py-3 whitespace-nowrap">
                                                <p className='text-center'>{data.storage}</p>
                                            </td>
                                            <td className=" py-3 whitespace-nowrap">
                                                <p className='text-center'>{data.product}</p>
                                            </td>
                                            <td className=" py-3 whitespace-nowrap">
                                                <p className='text-center'>{data.quantity}</p>
                                            </td>
                                            
                                            <td className=" py-3 whitespace-nowrap">
                                                <p className='text-center'>{data.unit}</p>
                                            </td>
                                        </tr>
                                     ))} 
                                </tbody>
                            </table>
                            
                            <div className='flex justify-center pt-2'>
                            <button onClick={submitFunc} className='bg-par-blue-dark text-white px-14 py-2 rounded-lg'>Submit</button>
                            </div>
                        </div>

                    </div>

                    {/* <div className='flex justify-center pt-5'>
                        <Pagination current={currentPage} onChange={onChange} defaultPageSize={itemsPerPage} total={getStockLocation.length} />

                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default AdminStockFile;
