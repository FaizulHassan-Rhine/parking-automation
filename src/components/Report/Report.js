import React from "react";

import qrcode from '../../images/qr-code.png'

const Report = () => {



    return (
        <div className="container mx-auto">
            <div >
                <div className="bg-white flex flex-col items-center mt-10">
                    {/* <img className="h-8 w-44 mb-2" src={logo} alt="" /> */}
                    <p className="text-3xl font-bold">QR CODE DETAILS</p>
                </div>
                <div>
                    <div className="flex flex-col  md:flex md:flex-row md:justify-center mx-auto mt-10 md:gap-28 gap-5 border-black border py-5 md:w-[620px] w-80  ">
                    <div className="flex md:justify-between gap-5 ml-5 md:ml-0">
                        <div>
                            <p className="font-semibold">SL/N:</p>
                            <p className="font-semibold">Date:</p>
                            <p className="font-semibold">Entry Time:</p>
                            <p className="font-semibold">Exit Time:</p>
                                                   
                           
                        </div>

                        <div>
                            <p>#SL-001</p>
                            <p>23-October-23</p>
                            <p>10:30 A.M</p>
                            <p>16:45 P.M</p>                          
                                            
                           
                        </div>

                    </div>
                    <div className="flex md:justify-between gap-5 ml-5 md:ml-0">
                        <div>
                        <p className="font-semibold">Vehicle No: </p> 
                        <p className="font-semibold">Vehicle Status: </p>
                            <p className="font-semibold">Service Type: </p>

                            <p className="font-semibold">QR Check: </p>
                        </div>

                        <div>
                        <p> LMN-456</p> 
                            <p>In Queue</p>
                            <p>Automation</p>
                           
                            <p>Done</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="flex justify-center pt-6">
                    <img className="w-60" src={qrcode}/>
                </div>
               
                <div className=" md:w-[700px] mx-auto mt-10 " >
                    <hr className="mb-3"></hr>
                    <p className="text-xs text-center  mb-5"> <span className="font-bold">Address:</span> 1600 Amphitheatre Parkway Mountain View, CA 94043, USA <span className="font-bold"> Phone:</span> (650) 253-0000 <span className="font-bold">Email:</span> google@gmail.com</p>
                </div>
            </div>

        </div>
    )
}
export default Report;
