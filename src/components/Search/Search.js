
import React, { useContext, useState } from 'react';
import { userContextManager } from '../../App';
import VehicleSearch from './VehicleSearch';
import DetailsSearch from '../DetailsSearch/DetailsSearch';
import Navbar from '../Navbar/Navbar';
import AdminPageTwoV3 from '../AdminPageTwo/AdminPageTwoV3';


const Search = () => {
    const [getUserInfo, setUserInfo] = useContext(userContextManager);

    return (
        <>
            <Navbar />

            {
                getUserInfo.role === "security" &&

                <div className='flex justify-center pt-3'>
                    <h1 className='text-3xl font-bold uppercase'>Security & Adminstration</h1>
                </div>
            }
            {
                getUserInfo.role === 'checker' &&

                <div className='flex justify-center pt-3'>
                    <h1 className='text-3xl font-bold uppercase '>Vehicle Checking Details</h1>
                </div>
            }
            {
                getUserInfo.role === 'storage' &&

                <div className='flex justify-center pt-3'>
                    <h1 className='text-3xl font-bold uppercase'>Storage Checking Details</h1>
                </div>
            }
            {
                getUserInfo.role === 'security' ? <VehicleSearch /> : getUserInfo.role === 'admin' ? <AdminPageTwoV3 /> : <DetailsSearch />
            }
        </>

    );
};

export default Search;