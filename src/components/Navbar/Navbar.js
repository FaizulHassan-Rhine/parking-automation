import React, { useContext, useState } from 'react';
import avatar from "../../images/avatarProfile.png"
import logo from "../../images/logo2.png"
import { userContextManager } from '../../App';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { redirect } from "react-router-dom";

const Navbar = () => {
  const [getUserInfo, setUserInfo] = useContext(userContextManager);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const signOut = () => {


    setUserInfo({})
  }

  let navigate = useNavigate();

  const FileUploadFunc = (e) => {
    const data = e.target.value;

    // Allowing file type
    var allowedExtensions =
      /(\.xls|\.xlsl)$/i;

    if (!allowedExtensions.exec(data)) {
      console.log("valid file");
      navigate('/stock-data');
      closeModal(); 
    } else { console.log("invalid file") }
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
                  <li className='hover:border-b-2 hover:border-green-600 py-1  font-semibold  border-b-2 border-white transition-all duration-300 '><Link onClick={openModal} >Stock Entry</Link></li>

                </ul>
              }
            </div>

            <div>


              {isOpen && (
                <div className="main-modal fixed w-full inset-0 z-50  overflow-hidden flex justify-center items-center">
                  <div className="modal-container bg-white shadow-xl w-5/12  mx-auto rounded-xl z-50 ">
                    <div className="modal-content py-4 text-left px-6">
                      <div className="flex justify-end items-center pb-3">

                        <div className="modal-close cursor-pointer  z-50" onClick={closeModal}>
                          <svg
                            className="fill-current bg-red-400 rounded-full text-white "
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                          >
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                          </svg>
                        </div>

                      </div>
                      <div className='flex justify-center gap-8 mb-5'>
                        <Link to="/dashboard/stock-entry" onClick={closeModal} className='p-16 font-semibold bg-slate-200 hover:bg-green-200 shadow-lg rounded-2xl  cursor-pointer '>
                          <p className='text-xl font-bold'>Manually</p>
                        </Link>
                        <button onClick={() => document.getElementById("fileupload").click()} className='p-16  bg-slate-200 hover:bg-green-200 shadow-lg rounded-2xl cursor-pointer'>
                          <p className='text-xl font-bold'>Choose File</p>
                        </button>
                      </div>

                    </div>
                  </div>
                  <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40'>

                  </div>
                </div>
              )}
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
          <input onChange={FileUploadFunc} id='fileupload' type='file' className='hidden' accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
        </div>
      }


    </>
  );
};

export default Navbar;