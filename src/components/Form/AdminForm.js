import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminForm = () => {
    let navigate = useNavigate();
    const singUpFunc = (e) => {
        navigate('/dashboard/stock-info')

    }
    // const submitFunc = ()=>{
    //     navigate('/admin-stock-file')
    // }
    return (
        <>

            <div className='bg-[#f5f5f5] pt-4 pb-6'>
                <div className='container mx-auto'>
                    <div className='flex flex-col'>
                        <div className='flex justify-center pt-3'>
                            <h1 className='text-3xl font-bold uppercase'>Manual Stock Entry</h1>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='mt-4'>
                            <form onSubmit={singUpFunc} className='flex flex-col gap-10 p-10 w-[300px] sm:w-[500px] md:w-[700px] bg-white rounded-lg shadow-sm2'>
                                <div className='flex flex-col  gap-[20px]'>

                                    <div className='flex flex-col gap-[20px]'>
                                        <h5 className='text-base font-medium'>Packer/Warehouse
                                        </h5>

                                        <div className={'relative w-full px-[14px] py-[10px] flex gap-2 border-[1px] border-solid rounded-lg border-[#98A2B3]'} >
                                            <select
                                                className='w-full focus:outline-none bg-white'>
                                                <option>Packer 1</option>
                                                <option>Packer 2</option>
                                                <option>Packer 3</option>
                                                <option>Warehouse 1</option>
                                                <option>Warehouse 2</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-[20px]'>
                                        <h5 className='text-base font-medium'>Product
                                        </h5>

                                        <div className={'relative w-full px-[14px] py-[10px] flex gap-2 border-[1px] border-solid rounded-lg border-[#98A2B3]'} >
                                            <select
                                                className='w-full focus:outline-none bg-white'>
                                                <option>Product 1</option>
                                                <option>Product 2</option>
                                                <option>Product 3</option>
                                                <option>Product 4</option>
                                               
                                            </select>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-[20px]'>
                                        <h5 className='text-base font-medium'>Quantity
                                        </h5>
                                        <div className="flex gap-5" >
                                            <div className={'relative w-3/4 px-[14px] py-[10px] flex gap-2 border-[1px] border-solid rounded-lg border-[#98A2B3]'} >
                                            <input className='w-full focus:outline-none' type="text" />
                                            </div>
                                            <div className={'relative w-1/4 px-[14px] py-[10px] flex gap-2 border-[1px] border-solid rounded-lg border-[#98A2B3]'} >
                                            <select
                                                className='w-full focus:outline-none bg-white'>
                                                <option>KG</option>
                                                <option>TON</option>
                                             
                                            </select>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>


                                <div className='flex flex-col gap-4'>
                                    <button className='w-full rounded-lg text-white text-base font-semibold bg-par-blue-dark py-3 px-5'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminForm;