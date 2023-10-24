import React from 'react';
import Navbar from '../Navbar/Navbar';

const AdminPageTwo2 = () => {
    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <div className='grid grid-cols-3 items-center gap-20 pt-20'>
                    <div className="card  bg-orange-50 shadow-xl cursor-pointer">
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-center">Packer 1</h2>

                            <div className="flex justify-center ">
                                {/* <button className="text-sm px-4 w-32 py-1 rounded-2xl bg-orange-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>06</h1>
                            </div>
                        </div>
                    </div>

                    <div className="card  bg-orange-50 shadow-xl cursor-pointer">
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-center">Packer 2</h2>

                            <div className="flex justify-center ">
                                {/* <button className="text-sm px-4 w-32 py-1 rounded-2xl bg-orange-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>11</h1>
                            </div>

                        </div>
                    </div>

                    <div className="card  bg-orange-50 shadow-xl cursor-pointer">
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-center">Packer 3</h2>

                            <div className="flex justify-center ">
                                {/* <button className="text-sm px-4 w-32 py-1 rounded-2xl bg-orange-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>07</h1>
                            </div>

                        </div>
                    </div>

                    <div className="card  bg-blue-50 shadow-xl cursor-pointer">
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-center">Warehouse 1</h2>

                            <div className="flex justify-center ">
                                {/* <button className="text-sm px-4 w-32 py-1 rounded-2xl bg-blue-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>18</h1>
                            </div>

                        </div>
                    </div>

                    <div className="card bg-blue-50 shadow-xl cursor-pointer">
                        <div className="card-body">
                            <h2 className="font-bold text-2xl text-center">Warehouse 2</h2>

                            <div className="flex justify-center ">
                                {/* <button className="text-sm px-4 w-32 py-1 rounded-2xl bg-blue-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>22</h1>
                            </div>

                        </div>
                    </div>

                    <div className="card  bg-red-50 shadow-xl cursor-pointer">
                        <div className="card-body ">
                            <h2 className="font-bold text-2xl text-center">Parking </h2>

                            <div className="flex justify-center">
                                {/* <button className="text-sm px-4  w-32 py-1 rounded-2xl bg-red-200 text-white">Show Details</button> */}
                                <h1 className='font-bold text-6xl text-center'>32</h1>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AdminPageTwo2;