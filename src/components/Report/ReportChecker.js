import React, { useContext } from 'react';

import qrcode from '../../images/barcode.jpg'
import checked from '../../images/checked.jpg'
import { userContextManager } from '../../App';
const ReportChecker = ({ vehicle = [] }) => {
    const [getUserInfo, setUserInfo] = useContext(userContextManager);
    return (
        <div className='printView '>
            <div className="container mx-auto">
                <div >
                    <div className="font-bold flex flex-col items-center mt-10">
                        {/* <img className="h-8 w-44 mb-2" src={logo} alt="" /> */}
                        <div className="flex items-center gap-10">
                        {
                getUserInfo.role === 'checker' &&

                <div >
                    <h1 className="text-3xl font-bold uppercase">Vehicle Checking Details</h1>
                </div>
            }
                      {
                getUserInfo.role === 'storage' &&

                <div >
                    <h1 className="text-3xl font-bold uppercase">Storage Checking Details</h1>
                </div>
            }
                            
                            <div className="flex justify-center pt-6">
                                <img className="w-40" src={qrcode} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center pt-5'>
                        <div className="grid grid-cols-2 gap-[280px] px-[40px] border-black border py-5 w-[900px]   ">
                            <div className="flex md:justify-between gap-5 ml-5 md:ml-0">
                                <div>
                                    <p className="font-semibold whitespace-nowrap">SL/N:</p>
                                    <p className="font-semibold whitespace-nowrap">Date:</p>
                                    <p className="font-semibold whitespace-nowrap">Storage:</p>
                                    <p className="font-semibold whitespace-nowrap">Vehicle Weight:</p>
                                    <p className="font-semibold whitespace-nowrap">Vehicle Max Weight:</p>
                               
                                   
                                    


                                </div>

                                <div>
                                    <p className='whitespace-nowrap'>{vehicle[0].sl}</p>
                                    <p className=' whitespace-nowrap'>{vehicle[0].date}</p>
                                    <p className=' whitespace-nowrap'>{vehicle[0].stockLocation}</p>
                                    <p className=' whitespace-nowrap'>1600 kg</p>
                                    <p className=' whitespace-nowrap'>{vehicle[0].vehicleMaximumWeight}</p>
                                    
                                </div>

                            </div>
                            <div className="flex md:justify-between gap-5 ml-5 md:ml-0">
                                <div>
                                <p className="font-semibold whitespace-nowrap">Queue No:</p>
                                    <p className="font-semibold  whitespace-nowrap">Vehicle No: </p>
                                    <p className="font-semibold whitespace-nowrap">Vehicle Status: </p>
                                  
                                    <p className="font-semibold whitespace-nowrap">Service Type: </p>
                                    <p className="font-semibold whitespace-nowrap">Security Check: </p>
                                </div>

                                <div>
                                <p className='whitespace-nowrap'>{vehicle[0].queueNo}</p>
                                    <p className='whitespace-nowrap'>{vehicle[0].vehicleNumber}</p>

                                    <p className='whitespace-nowrap'> 
                                    {getUserInfo.role == 'storage' ? 'Loading Products' : 'In Queue'}
                                    </p>
                                    
                                    <p className='whitespace-nowrap'>Automation</p>
                                    <p className='whitespace-nowrap'>Done</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-32">
                        <table className="mx-auto w-[900px] bg-white text-[12px] border rounded-lg">
                            <thead>
                                <tr className='h-12 text-[12px] bg-par-blue-dark text-white'>
                                    <th className="px-6 py-3  text-center  font-bold uppercase tracking-wider border-b">
                                        SL
                                    </th>
                                    <th className="px-6 py-3 text-center  font-bold  uppercase tracking-wider border-b">
                                        SO.No
                                    </th>
                                    <th
                                        className="px-6 py-3  text-center  font-bold  uppercase tracking-wider cursor-pointer border-b"

                                    >
                                        Customer

                                    </th>


                                    <th className="px-6 py-3  text-center  font-bold  uppercase tracking-wider border-b">
                                        Customer Address
                                    </th>
                                    <th className="px-6 py-3  text-center font-bold uppercase tracking-wider border-b">
                                        Delivery Address
                                    </th>
                                    <th className="px-6 py-3  text-center font-bold  uppercase tracking-wider border-b">
                                        Product
                                    </th>
                                    <th className="px-6 py-3  text-center  font-bold  uppercase tracking-wider border-b">
                                        Quantity
                                    </th>
                                    {/* <th className="px-6 py-3  text-center  font-bold  uppercase tracking-wider border-b">
                                        Storage
                                    </th>
                                    <th className="px-6 py-3  text-center  font-bold uppercase tracking-wider border-b">
                                        Que.No
                                    </th>
                                    <th className="px-6 py-3  text-center font-bold  uppercase tracking-wider border-b">
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
                                            {/* Pending  */}
                                        </td>
                                        {/* <td className="pr-3 py-3 whitespace-nowrap">
                                            <p className="border rounded-2xl text-center p-1 border-green-500"> {examinee.stockLocation}</p>
                                         
                                        </td>
                                        <td className="pr-3 py-3 whitespace-nowrap">
                                            <p className="border rounded-2xl text-center p-1 border-green-500">  {examinee.queueNo}</p>

                                           
                                        </td>
                                        <td className="pr-3 py-3 whitespace-nowrap">
                                            <p className="border rounded-2xl text-center p-1 border-green-500"> {examinee.queueStatus} </p>
                                          
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

                    <div className="pt-[120PX] hidden">
                        <div className=" md:w-[700px] mx-auto mt-10 " >
                            <hr className="mb-3"></hr>
                            <p className="text-xs text-center  mb-5"> <span className="font-bold">Address:</span> 1600 Amphitheatre Parkway Mountain View, CA 94043, USA <span className="font-bold"> Phone:</span> (650) 253-0000 <span className="font-bold">Email:</span> google@gmail.com</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ReportChecker;