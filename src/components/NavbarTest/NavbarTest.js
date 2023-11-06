import React, { useContext, useState } from 'react';
import avatar from "../../images/avatarProfile.png"
import logo from "../../images/logo2.png"
import { userContextManager } from '../../App';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import "../Navbar/Navbar.css";
import { redirect } from "react-router-dom";


const NavbarTest = () => {

    const [navbar, setNavbar] = useState(false);
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
            navigate('/dashboard/stock-data');
            closeModal();
            e.target.value = '';
        } else { console.log("invalid file") }

        console.log(data)
    }




    return (
        <>
            {location.pathname !== '/' &&
                <div className="w-full bg-white sticky shadow-md top-0 z-[999]">
                    <div className="container mx-auto">


                        <nav className="w-full bg-white ">
                            <div className="flex justify-between px-4 mx-auto w-full lg:items-center lg:flex lg:px-8">
                                <div>
                                    <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                                        <Link to="/" >
                                            <img className='w-24' src={logo} />
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className={`flex-1  flex-col items-center text-center justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                                            }`}
                                    >
                                        {getUserInfo.role === 'admin' &&

                                            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                                                <li>
                                                    <NavLink
                                                        className={({ isActive, isPending }) =>
                                                            isActive ? "hover:border-b-2 border-green-600 py-1  font-semibold  border-b-2 transition-all duration-300" : "hover:border-b-2 hover:border-green-600 py-1  font-semibold  border-b-2 border-white transition-all duration-300"
                                                        }
                                                        to="/dashboard/queue-info">Queue Info</NavLink></li>

                                                <li>
                                                    <NavLink to="/dashboard/gigo"
                                                        className={({ isActive, isPending }) =>
                                                            isActive ? "hover:border-b-2 border-green-600 py-1  font-semibold  border-b-2 transition-all duration-300" : "hover:border-b-2 hover:border-green-600 py-1  font-semibold  border-b-2 border-white transition-all duration-300"
                                                        }
                                                    >GIGO Summary</NavLink></li>

                                                <li><NavLink
                                                    className={({ isActive, isPending }) =>
                                                        isActive ? "hover:border-b-2 border-green-600 py-1  font-semibold  border-b-2 transition-all duration-300" : "hover:border-b-2 hover:border-green-600 py-1  font-semibold  border-b-2 border-white transition-all duration-300"
                                                    }
                                                    to="/dashboard/stock-info">Stock Info</NavLink></li>
                                                <li><NavLink
                                                    className={({ isActive, isPending }) =>
                                                        isActive ? "hover:border-b-2 hover:border-green-600 py-1  font-semibold  border-b-2 border-white transition-all duration-300" : "hover:border-b-2 hover:border-green-600 py-1  font-semibold  border-b-2 border-white transition-all duration-300"
                                                    }
                                                    onClick={openModal} >Stock Entry</NavLink></li>
                                                <li className='flex justify-center'>
                                                    <div className={`flex  lg:hidden justify-center dropdown dropdown-bottom navbar navbar-end w-[150px]`}>
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
                                                </li>
                                            </ul>
                                        }

                                    </div>
                                </div>
                                <div>

                                    <div className={`dropdown dropdown-bottom navbar navbar-end 
                                     ${getUserInfo.role == 'admin' ? "hidden lg:block" : ""}`}>
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
                                    {isOpen && (
                                        <div className="main-modal fixed w-full inset-0 z-50  overflow-hidden flex justify-center items-center">
                                            <div className="modal-container bg-white shadow-xl lg:w-5/12  mx-auto rounded-xl z-50 ">
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
                                                        <Link to="/dashboard/stock-entry" onClick={closeModal} className='p-4 md:p-16 font-semibold bg-slate-200 hover:bg-green-200 shadow-lg rounded-2xl  cursor-pointer '>
                                                            <p className='text-xl font-bold'>Manual</p>
                                                        </Link>
                                                        <button onClick={() => document.getElementById("fileupload").click()} className='p-4 md:p-16  bg-slate-200 hover:bg-green-200 shadow-lg rounded-2xl cursor-pointer'>
                                                            <p className='text-xl font-bold'>Excel File</p>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                            <a href={require('./file/sample.xlsx')} download="sample.xlsx" className='absolute flex flex-col items-center z-50  bottom-[10px] right-[10px] p-[10px] pt-5 rounded-lg bg-par-blue-dark '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" className='animate-bounce'>
                                                    <path d="M8 12L12 16M12 16L16 12M12 16V8M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p className='text-sm text-white'>Sample Excel File</p>
                                            </a>
                                            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40'></div>
                                        </div>
                                    )}
                                </div>

                                        {/* mobile menu triger button */}
                                            
                                        <div className={`${getUserInfo.role == 'admin' ? "lg:hidden" : "hidden"}`}>
                                            <button
                                                className="p-2 mt-[10px] text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                                onClick={() => setNavbar(!navbar)}
                                            >
                                                {navbar ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6 text-black"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-6 h-6 text-black"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4 6h16M4 12h16M4 18h16"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>

                            </div>
                        </nav>

                        {/* <div className="flex justify-center items-center mb-8 ">
                 


                </div> */}

                    </div >
                    <input onChange={FileUploadFunc} id='fileupload' type='file' className='hidden' accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                </div >
            }
        </>
    )

}

export default NavbarTest;