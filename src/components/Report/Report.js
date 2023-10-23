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
                <div className="flex justify-center mx-auto mt-10 gap-36 border-black border py-5 w-[600px] ">
                    <div className="flex justify-between gap-5">
                        <div><p className="font-semibold">Date:</p>
                            <p className="font-semibold">Vehicle No: </p>
                            <p className="font-semibold">Order Status: </p>
                            <p className="font-semibold">Entry: </p>
                        </div>

                        <div>
                            <p>23-October-23</p>
                            <p> DHK M-KA 00-0001</p>
                            <p>In Queue</p>
                            <p>2</p>
                        </div>

                    </div>
                    <div className="flex justify-between gap-5">
                        <div>
                            <p className="font-semibold">Service Type: </p>
                            <p className="font-semibold">Subscription: </p>
                            <p className="font-semibold">Payment Status: </p>
                        </div>

                        <div>

                            <p>Manual</p>
                            <p>AI Premium</p>
                            <p>Pending</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center pt-10">
                    <img className="w-60" src={qrcode}/>
                </div>
               
                <div className="w-[700px] mx-auto mt-10 " >
                    <hr className="mb-3"></hr>
                    <p className="text-xs text-center  mb-5"> <span className="font-bold">Address:</span> 1600 Amphitheatre Parkway Mountain View, CA 94043, USA 
 <span className="font-bold"> Phone:</span> (650) 253-0000 <span className="font-bold">Email:</span> google@gmail.com</p>
                </div>

                


            </div>

        </div>
    )
}
export default Report;
