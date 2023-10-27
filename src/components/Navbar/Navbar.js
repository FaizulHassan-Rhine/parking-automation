import React, { useContext } from 'react';
import avatar from "../../images/avatarProfile.png"
import logo from "../../images/logo2.png"
import { userContextManager } from '../../App';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [getUserInfo, setUserInfo] = useContext(userContextManager);
  const signOut = () => {
    setUserInfo({})
  }

  return (
    <div className="navbar py-0 shadow-sm2 bg-white">
      <div className='container mx-auto'>
        <div className="navbar-start">
          <div className='flex'>
            <Link to="/" className='w-24'>
              <img className='w-full' src={logo} />
            </Link>
          </div>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <li><a>Page 2</a></li>

            <li><a>Page 3</a></li>
          </ul>
        </div> */}
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

  );
};

export default Navbar;