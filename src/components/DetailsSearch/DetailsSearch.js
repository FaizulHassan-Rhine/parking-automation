import React, { useContext, useState } from 'react';
import avatar from "../../images/avatarProfile.png"
import { userContextManager } from '../../App';
import DataTable from '../DataTable/DataTable';
import { parkingList } from '../FakeData/FakeData';

const DetailsSearch = () => {
    const [getSearchString, setSearchString] = useState("")
    const [getParkingList, setParkingList] = useState([]);
    const [getUserInfo, setUserInfo] = useContext(userContextManager);

    const signOut = () => {
        setUserInfo({})
    }
    const searchFunc = (e) => {

        e.preventDefault()
        console.log(e.target.value);
        const foundCar = parkingList.filter(car => car.vehicleNumber === e.target.value);

        if (foundCar) {
            console.log("Car found:", foundCar);
            setParkingList(foundCar);
        } else {
            setParkingList([]);
            console.log("Car not found");
        }
    }

    return (
        <div>
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

                        <div className="dropdown dropdown-bottom drop  absolute top-8 right-14 ">
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
                        </div>
                    </div>
                </div>

                <DataTable vehicle={getParkingList} />

            </div>
        </div>
    );
};

export default DetailsSearch;