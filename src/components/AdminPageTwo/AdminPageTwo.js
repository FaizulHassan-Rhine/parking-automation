import React from 'react';
import { Button, Popover } from 'antd';
import Navbar from '../Navbar/Navbar';
const AdminPageTwo = () => {
    const content = (
        <div className='w-[300px] h-[200px] overflow-scroll overflow-x-hidden'>
            <p><b>Queue No:</b> 02</p>
            <p><b>Sales Order Number:</b> #SO-MN-0002</p> 
            <p><b>Vehicle Number:</b> CHA-MET-2309</p>
            <p><b>Entry Time:</b> 10:30 A.M</p>
            <p><b>Exit Time:</b> 03:45 P.M</p>

        </div>
    );
    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <div className='grid grid-cols-3 items-center gap-20 pt-20'>
                    <Popover placement="bottom" content={content} title="Title">


                        <div className="card  bg-orange-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Packer 1</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>


                            </div>
                        </div>


                    </Popover>
                    <Popover placement="bottom" content={content} title="Title">


                        <div className="card  bg-orange-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Packer 2</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>


                            </div>
                        </div>


                    </Popover>
                    <Popover placement="bottom" content={content} title="Title">


                        <div className="card  bg-orange-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Packer 3</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>


                            </div>
                        </div>


                    </Popover>
                    <Popover placement="bottom" content={content} title="Title">


                        <div className="card  bg-blue-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Warehouse 1</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>


                            </div>
                        </div>


                    </Popover>
                    <Popover placement="bottom" content={content} title="Title">


                        <div className="card bg-blue-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Warehouse 2</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>


                            </div>
                        </div>


                    </Popover>
                    <Popover placement="bottom" content={content} title="Title">


                        <div className="card  bg-red-50 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Parking </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>


                            </div>
                        </div>


                    </Popover>
                </div>
            </div>
        </>
    );
};

export default AdminPageTwo;