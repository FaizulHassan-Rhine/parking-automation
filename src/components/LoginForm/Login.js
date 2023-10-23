import React, { useContext, useState } from "react";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
// import { Link } from "react-router-dom";
import login from "../../images/login.jpg";
import { users } from "../FakeData/FakeData";
import { userContextManager } from "../../App";
import { useNavigate } from "react-router";
import QrCodeGen from "../QrCodeGen/QrCodeGen";

const Login = () => {
  const [getUserInfo, setUserInfo] = useContext(userContextManager);
  const navigate = useNavigate();

  const [getFormData, setFormData] = useState({
    email: {
      value: '',
      required: true,
      msg: 'Please input your email address'
    },
    pass: {
      value: '',
      required: true,
      msg: 'Please input your password'
    },
    formValid: true
  })

  const singUpFunc = (e) => {
    e.preventDefault();
    if (getFormData.email.value.length > 0) {
       if (getFormData.pass.value.length > 0) {
          setUserInfo(checkCredentials(getFormData.email.value, getFormData.pass.value))
          console.log(checkCredentials(getFormData.email.value, getFormData.pass.value))
          navigate('/search/parking')
          // console.log(getFormData)
      }
    } else {
      setFormData({ ...getFormData, formValid: false })
    }
  }

  function checkCredentials(email, password) {
    for (const user of users) {
        if (user.email === email && user.password === password) {
            return user; // Return the user object if credentials match
        }
    }
    return null; // Return null if no match is found
}

  return (
    <div>
      <div>
        <QrCodeGen/>
        <section className="container mx-auto">
          <div className="px-6 h-full text-gray-800">
            <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div className="grow-0 pt-8 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img src={login} className="w-full rounded-lg" alt="Sample image" />
              </div>
              <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form onSubmit={singUpFunc}>
                  <div className="mb-6">
                    <input
                      type="text"
                      className={"form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" +
                        (getFormData.formValid == false && getFormData.email.required && getFormData.email.value === '' ? 'border-red-500' : 'border-gray-300')}
                      id="exampleFormControlInput2"
                      placeholder="Email address"
                      onChange={(e) => setFormData({ ...getFormData, email: { ...getFormData.email, value: e.target.value } })}
                    />
                    <p className={'text-xs font-normal text-red-500 pt-[2px] ' +
                      (getFormData.formValid == false && getFormData.email.required && getFormData.email.value === '' ? 'visible' : 'invisible')}>
                      {getFormData.email.msg}
                    </p>
                  </div>

                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Password"
                      onChange={(e) => setFormData({ ...getFormData, pass: { ...getFormData.pass, value: e.target.value } })}
                    />
                    <p className={'text-xs font-normal text-red-500 pt-[2px] ' +
                      (getFormData.formValid == false && getFormData.pass.required && getFormData.pass.value === '' ? 'visible' : 'invisible')}>
                      {getFormData.pass.msg}</p>
                  </div>

                  <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-[#59E4A8] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#59E4A8] hover:shadow-lg focus:bg-[#59E4A8]focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </button>
                    {/* <p className="text-sm font-semibold mt-2 pt-1  mb-0">
                      Don't have an account?
                      <a href="/signup">
                        <a
                          href="#!"
                          className="text-red-600 hover:text-[#59E4A8] focus:text-red-700 transition duration-200 ease-in-out"
                        >
                          Sign up
                        </a>
                      </a>
                    </p> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
