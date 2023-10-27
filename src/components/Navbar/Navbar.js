import React, { useContext } from 'react';
import avatar from "../../images/avatarProfile.png"
import logo from "../../images/logo2.png"
import { userContextManager } from '../../App';
import { Link, useLocation } from 'react-router-dom';
const Navbar = () => {
  const [getUserInfo, setUserInfo] = useContext(userContextManager);
  const location = useLocation();

  const signOut = () => {
    setUserInfo({})
  }

  return (
    <>
    {location.pathname !== '/' && 
    
    <div className="navbar py-0 shadow-sm2 bg-white">
      <div className='container mx-auto'>
        <div className="navbar-start">
          <div className='flex'>
            <Link to="/" className='w-24'>
              <img className='w-full' src={logo} />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          {getUserInfo.role === 'admin' && 
          
          <ul className="flex gap-8 cursor-pointer">
            <li className='hover:border-b-2 hover:border-green-600 py-1  font-semibold  border-b-2 border-white transition-all duration-300'><Link to="/dashboard/queue-info">Queue Info</Link></li>
            <li className='hover:border-b-2 hover:border-green-600 py-1  font-semibold  border-b-2 border-white transition-all duration-300'><Link to="/dashboard/gigo">GIGO Summary</Link></li>
            <li className='hover:border-b-2 hover:border-green-600 py-1  font-semibold  border-b-2 border-white transition-all duration-300 '><Link to="/dashboard/stock-info">Stock Info</Link></li>
          </ul>
          }
        </div>
        <div className="dropdown dropdown-bottom navbar navbar-end  ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={avatar} />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-28">
            <li>
              <a className="justify-between">
                Profile

              </a>
            </li>

            <li> <button onClick={signOut}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  }
    </>
  );
};

export default Navbar;