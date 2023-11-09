import React, { useContext, useEffect, useState } from 'react';
import avatar from "../../images/avatarProfile.png"
import { userContextManager } from '../../App';
import DataTable from '../DataTable/DataTable';
import { parkingList } from '../FakeData/FakeData';
import { CgDanger } from "react-icons/cg";
import ReportChecker from '../Report/ReportChecker';

const DetailsSearch = () => {
    const [getSearchString, setSearchString] = useState("")
    const [getParkingList, setParkingList] = useState([]);
    const [getUserInfo, setUserInfo] = useContext(userContextManager);

    const signOut = () => {
        setUserInfo({})
    }
    const searchFunc = (e) => {

        e.preventDefault()
        // console.log(e.target.value);
        setSearchString(e.target.value);
        const foundCar = parkingList.filter(car => car.vehicleNumber.toLocaleLowerCase() === e.target.value.toLocaleLowerCase() || car.sl.toLocaleLowerCase() === e.target.value.toLocaleLowerCase());

        // setParkingList(() => parkingList.filter(car => car.vehicleNumber === e.target.value || car.sl === e.target.value))
        if (foundCar) {
            console.log("Car found:", foundCar);
            setParkingList(()=>foundCar);
        } else {
            setParkingList([]);
            console.log("Car not found");
        }
    }

    // useEffect(()=>{
    //     const foundCar = parkingList.filter(car => car.vehicleNumber.toLocaleLowerCase() === getSearchString.toLocaleLowerCase() || car.sl.toLocaleLowerCase() === getSearchString.toLocaleLowerCase());
    //     console.log(getSearchString);
    //     if (foundCar) {
    //         console.log("Car found:", foundCar);
    //         setParkingList(()=>foundCar);
    //     } else {
    //         setParkingList([]);
    //         console.log("Car not found");
    //     }
    // },[getSearchString])

    return (
        <div>
            <div className='container mx-auto '>
                <div className='relative'>
                    <div className="flex justify-center  relative p-2 pt-6 pb-1">
                        <div className="bg-white items-center justify-between w-[60%] flex rounded-full shadow-lg p-2 mb-5 sticky" >

                            <input onChange={searchFunc} className="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search" />

                            <div className="bg-gray-400 p-2 hover:bg-[#59E4A8] cursor-pointer mx-2 rounded-full">

                                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>

                            </div>
                        </div>

                    </div>
                </div>

                {getParkingList.length > 0 ? (
                    <>
                        <DataTable vehicle={getParkingList} />
                        <div className='fixed left-[-9999px]'>
                            <ReportChecker vehicle={getParkingList} />
                        </div>
                    </>
                ) : (

                    getSearchString.length > 0 &&
                    <div className='flex items-center justify-center gap-2 text-red-600 text-5xl font-semibold pt-40'>
                        <p className=''>No Results Found</p>
                        <p><CgDanger /></p>
                    </div>

                )
                }

            </div>
        </div>
    );
};

export default DetailsSearch;