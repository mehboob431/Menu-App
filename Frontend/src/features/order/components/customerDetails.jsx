import React from 'react'

const customerDetails = ({ name, phone, address }) => {
  return (
    <div className="max-w-sm mx-auto shadow-md rounded-lg border-b overflow-hidden">
      <div className="p-4">
        <div className="flex items-center">
          <div className="ml-3 ">
            <h2 className="text-lg font-semibold ">Customer Info</h2>
            <p className=" p-3">Name: {name}</p>
            <p className="p-3">Phone No: {phone}</p>
            <p className="p-3">Address: {address}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default customerDetails