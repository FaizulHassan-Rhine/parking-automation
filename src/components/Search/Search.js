
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
                getUserInfo.role !== 'admin' &&

                <div className='flex justify-center pt-3'>
                    <h1 className='text-3xl font-bold'>Queue Details</h1>
                </div>
            }
            {
                getUserInfo.role == 'security' ? <VehicleSearch /> : getUserInfo.role == 'admin' ? <AdminPageTwoV3 /> : <DetailsSearch />
            }
        </>

    );
};

export default Search;