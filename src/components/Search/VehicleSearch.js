
import React, { useContext, useState } from 'react';
import qrCode from "../../images/barcode.jpg"
import avatar from "../../images/avatarProfile.png"
import { parkingList } from '../FakeData/FakeData';
import QrCodeGen from '../QrCodeGen/QrCodeGen';
import ReportDownload from '../ReportDownload/ReportDownload';
import { userContextManager } from '../../App';
import DataTable from '../DataTable/DataTable';
import { FaCheckCircle, } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import DataTableVehicle from '../DataTable/DataTableVehicle';


const VehicleSearch = () => {
    const [getSearchString, setSearchString] = useState("")
    const [getParkingList, setParkingList] = useState([]);
    const [getUserInfo, setUserInfo] = useContext(userContextManager);

    const signOut = () => {
        setUserInfo({})
    }

    const searchFunc = (e) => {

        e.preventDefault()
        setSearchString(e.target.value);

        const foundCar = parkingList.filter(car => car.vehicleNumber === e.target.value);

        if (foundCar) {
            console.log("Car found:", foundCar);
            setParkingList(foundCar);
        } else {
            setParkingList({});

            console.log("Car not found");
        }
    }


    return (
        <div className='container mx-auto '>
            <div className='relative'>
                <div className="flex justify-center  relative p-2 py-6 ">
                    <div className="bg-white items-center justify-between w-[60%] flex rounded-full shadow-lg p-2 mb-5 sticky" >

                        <input onChange={searchFunc} className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search" />

                        <div className="bg-gray-400 p-2 hover:bg-[#59E4A8] cursor-pointer mx-2 rounded-full">

                            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>

                        </div>
                    </div>

                    {/* <div className="dropdown dropdown-bottom drop  absolute top-8 right-10 ">
                        <label tabIndex={0} className="btn  btn-circle avatar">
                            <div className="w-16 rounded-full">
                                <img src={avatar} alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-32">
                            <li>
                                <a className="justify-between ">Profile</a>
                            </li>

                            <li>
                                <button onClick={signOut}>Logout</button>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>


            {Object.keys(getParkingList).length > 0 ? (
                <div className='flex flex-col'>
                    <div className='flex items-center justify-center'>
                        {/* <QrCodeGen qrString={getParkingList.licensePlate}/> */}
                        <div>
                            <img className='w-[180px]' src={qrCode} alt='' />
                            <p className='text-xs text-center font-semibold'>Vehicle No: {getParkingList[0].vehicleNumber}</p>
                        </div>
                        {/* <div className='flex items-center mt-0 font-semibold gap-3 text-xs'>
                        <p className='text-green-500 text-center'>Vehicle Found</p>
                        <p><FaCheckCircle className='text-green-400'/></p>
                        </div> */}
                        <ReportDownload vehicle={getParkingList} />
                    </div>
                    <DataTableVehicle vehicle={getParkingList} />

                </div>

            ) : (
                getSearchString.length > 0 &&
                <div className='flex items-center justify-center gap-2 text-red-600 text-5xl font-semibold pt-40'>
                    <p className=''>No Results Found</p>
                    <p><CgDanger /></p>
                </div>


            )
            }



        </div>
    );
};

export default VehicleSearch;