import React, { useState } from 'react'

const AddEmployee = () => {

  const [employeeModel, setEmployeeModel] = useState({

    id: "",
    firstName : "",
    lastName : "",
    emailId : "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setEmployeeModel({...employeeModel,[e.target.name] : value});
  }
  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
       <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1 className=''>Add New Employee</h1>
            </div>
            {/* form */}
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className="block text-gray-600 text-sm font-normal">First Name</label>
                <input 
                className='h-10 w-96 border mt-2 px-2 py-2' 
                type="text" 
                name='firstName'
                value={employeeModel.firstName}
                onChange={(e) => handleChange(e)}
                />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                <input 
                className='h-10 w-96 border mt-2 px-2 py-2' 
                type="text" 
                name='lastName'
                value={employeeModel.lastName}
                onChange={(e) => handleChange(e)}
                />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className="block text-gray-600 text-sm font-normal">Email</label>
                <input 
                className='h-10 w-96 border mt-2 px-2 py-2' 
                type="email"
                name='emailId'
                value={employeeModel.emailId}
                onChange={(e) => handleChange(e)}
                 />
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
               <button className='bg-green-400 hover:bg-green-700 rounded text-white font-semibold py-2 px-6'>Save</button>
               <button className='bg-red-400 hover:bg-red-700 rounded text-white font-semibold py-2 px-6'>Clear</button>
            </div>
       </div>
    </div>
  )
}

export default AddEmployee