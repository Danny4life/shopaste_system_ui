import React from 'react'

const AddEmployee = () => {
  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
       <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add New Employee</h1>
            </div>
            {/* form */}
            <div className='items-center justify-center h-14 w-full my-4'>
                <labe className="block text-gray-600 text-sm font-normal">First Name</labe>
                <input className='h-10 w-96 border mt-2 px-2 py-2' type="text" />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <labe className="block text-gray-600 text-sm font-normal">Last Name</labe>
                <input className='h-10 w-96 border mt-2 px-2 py-2' type="text" />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <labe className="block text-gray-600 text-sm font-normal">Email</labe>
                <input className='h-10 w-96 border mt-2 px-2 py-2' type="email" />
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
               <button>Save</button>
            </div>
       </div>
    </div>
  )
}

export default AddEmployee