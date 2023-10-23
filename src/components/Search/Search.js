
import React, { useState } from 'react';
import qrCode from "../../images/qr-code.png"
import avatar from "../../images/avatarProfile.png"
import { parkingList } from '../FakeData/FakeData';
import QrCodeGen from '../QrCodeGen/QrCodeGen';

const Search = () => {
    const [getSearchString, setSearchString] = useState("")
    const [getParkingList, setParkingList] = useState({}); 
    const [getFoundCar, setFoundCar] = useState(false); 
    const searchFunc = (e) => {
        e.preventDefault()

            const foundCar = parkingList.find(car => car.licensePlate === getSearchString);

            if (foundCar) {
                console.log("Car found:", foundCar);
                setParkingList(foundCar); 
            } else {
                console.log("Car not found");
            }
    }


    return (

        <div className='container mx-auto '>
            <div className='relative'>
                <div class="flex justify-center  relative p-2 py-6 ">
                    <div class="bg-white items-center justify-between w-[60%] flex rounded-full shadow-lg p-2 mb-5 sticky" >

                        <input onChange={(e) => setSearchString(e.target.value)} class="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="Search" />

                        <div onClick={searchFunc} class="bg-gray-400 p-2 hover:bg-[#59E4A8] cursor-pointer mx-2 rounded-full">

                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>

                        </div>
                    </div>

                    <div className="dropdown dropdown-bottom drop  absolute top-8 right-10 ">
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
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {Object.keys(getParkingList).length > 0 ? (
                       <div className='flex flex-col items-center pt-12'>
                        <QrCodeGen qrString={getParkingList.licensePlate}/>
                       {/* <img src={qrCode} alt='' /> */}
                       <p className='text-xl font-semibold'>{getParkingList.licensePlate}</p>
                   </div>
            ) : (
                <p>No car found</p>
            )
        }
     
        </div>
    );
};

export default Search;