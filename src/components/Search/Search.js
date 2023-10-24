
import React, { useContext, useState } from 'react';
import { userContextManager } from '../../App';
import VehicleSearch from './VehicleSearch';
import DetailsSearch from '../DetailsSearch/DetailsSearch';


const Search = () => {
    const [getUserInfo, setUserInfo] = useContext(userContextManager);

    return (
        <>
            {
                getUserInfo.role == 'security' ? <VehicleSearch /> : <DetailsSearch />
            }
        </>

    );
};

export default Search;