
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
            {
                getUserInfo.role == 'security' ? <VehicleSearch /> : <DetailsSearch />
            }
        </>

    );
};

export default Search;