
import React, { useContext, useState } from 'react';
import { userContextManager } from '../../App';
import VehicleSearch from './VehicleSearch';
import DetailsSearch from '../DetailsSearch/DetailsSearch';
import Navbar from '../Navbar/Navbar';


const Search = () => {
    const [getUserInfo, setUserInfo] = useContext(userContextManager);

    return (
        <>
            <Navbar />
            <div className='flex justify-center pt-3'>
                <h1 className='text-3xl font-bold'>Queue Details</h1>
            </div>
            {
                getUserInfo.role == 'security' ? <VehicleSearch /> : <DetailsSearch />
            }
        </>

    );
};

export default Search;