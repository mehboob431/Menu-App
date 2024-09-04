import React, { useState, useEffect, useRef } from 'react';
import CustomerDetails from './customerDetails';
import { useParams } from 'react-router-dom';
import globalConstantUtil from '../../../utils/globalConstantUtil';
import axios from 'axios';
import { format } from 'date-fns';
import { useReactToPrint } from 'react-to-print';  // Import the hook
import './print.css'

const OrderDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const receiptRef = useRef();  // Reference to the printable area

  const getData = async () => {
    try {
      await axios.get(globalConstantUtil.baseUrl + `/orders/${id}`)
        .then((res) => {
          // console.log('res', res.data)
          setData(res.data)
          // console.log('data', data)
        })

    }
    catch (error) {
      console.error('error in fetching orders', error)
    }

  }
  useEffect(() => {
    getData()
  }, [])

  const updateOrderStatus = async (newStatus) => {
    try {

      await axios.put(globalConstantUtil.baseUrl + `/orders/${data._id}`, { ...data, status: newStatus, timeTake: data.timeTake })
        .then((res) => {
          console.log('res.data', res.data)
          setData({ ...data, status: newStatus })
        })
    } catch (error) {
      console.error('Failed to update order status:', error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => receiptRef.current,  // Specify the content to print
  });

  const renderStars = (rating) => {
    const maxStars = 5;
    const filledStars = '★'.repeat(rating); // Filled stars
    const emptyStars = '☆'.repeat(maxStars - rating); // Empty stars
    return filledStars + emptyStars;
  };


  return (

    <div className='flex item-start space-x-2'>
      {data &&
        <>
          <div className="  p-5  rounded-md shadow-lg w-full max-w-lg">
            <div className='mb-4 flex items-start justify-between w-full'>
              <div>
                <h2 className='text-lg font-medium'>Order Id: {data._id}</h2>
                <p>Order Date:
                  {format(Date(data.createdAt), 'dd MMM yyyy, hh:mm a')}
                </p>
                <span>Payment Method: {data.paymentMethod === 'cod' ? "Cash on Delivery" : "Online"}</span>
                {data.orderDescription && <span>Additional Instructions: {data.orderDescription}</span>}
              </div>
              <div className='flex flex-col items-center justify-start gap-2'>
                <div>Status</div>
                <div className={`px-2 py-1 rounded-lg max-w-max
                ${data.status === "pending" ? 'bg-orange-400 text-orange-800 bg-opacity-50' :
                    data.status === "confirmed" ? 'bg-blue-400 text-blue-800 bg-opacity-50' :
                      data.status === "delivered" ? 'bg-green-400 text-green-800 bg-opacity-50' :
                        data.status === ("rejected" || "canceled") ? 'bg-red-400 text-red-800 bg-opacity-50' : ""}
                    `}
                >{data.status}
                </div>
                {data.status === "pending" || data.status === "confirmed" && <div>Actions</div>}
                {data.status === "pending" ?

                  <div className='flex items-center justify-center gap-2'>
                    <button onClick={() => { updateOrderStatus("rejected") }} className='p-1 rounded-lg bg-red-400'>Reject</button>
                    <div className="flex items-center space-x-2 px-3" >
                      <button
                        className="text-xl font-medium px-2 py-1 bg-gray-300"
                        onClick={() => {
                          if (data.timeTake > 36)
                            setData({ ...data, timeTake: data.timeTake - 5 })
                        }}
                      >
                        -5
                      </button>
                      <span className=" text-xl font-medium">{data.timeTake}</span>
                      <button
                        className="text-xl bg-gray-300 px-2 py-1 font-medium"
                        onClick={() => {
                          if (data.timeTake < 56) {
                            setData({ ...data, timeTake: data.timeTake + 5 })
                          }
                        }}
                      >
                        +5
                      </button>
                    </div>
                    <button onClick={() => { updateOrderStatus("confirmed") }} className='p-1 rounded-lg bg-green-400'>Accept</button>
                  </div>
                  :
                  data.status === "confirmed" ?
                    <button onClick={() => { updateOrderStatus("delivered") }} className='p-1 rounded-lg bg-green-400'>Delivered</button>
                    : <></>
                }
              </div>
            </div>
            <div className='text-xl font-semibold '> <h2 >Items Detail</h2>
              <div className="flex justify-between border-b pb-4 mb-4">

              </div>
              {/* {console.log('data.items', data.items)} */}
              {data.items && data.items.map((item, i) => (


                <div key={i} className="flex pb-2">

                  <img
                    src={item.imageUrl} // Replace with your image URL
                    alt="grilled lemon herb Medite..."
                    className="w-16 h-16 rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className=" text-lg font-semibold">{item.title}</h3>
                    <p className="">Size : {item.description}</p>
                    <div className="flex justify-between">
                      <span>Price : </span>
                      <span>{item.price}</span>
                    </div>
                    <p className="text-sm">
                      Qty : <span className="font-semibold"> {item.quantity}</span>
                    </p>
                  </div>
                  <div className="text-lg  font-semibold">Item total : {item.price * item.quantity}</div>
                </div>
              ))
              }
            </div>

            <div className="space-y-2 ">

              <div className="flex justify-between font-semibold text-lg border-t pt-4">
                <span>Total:</span>
                <span>Rs {data.total}</span>
              </div>
            </div>
            <button onClick={handlePrint} className="mt-4 float-right max-w-max px-2 py-2 bg-blue-500 text-white rounded-lg">Print Receipt</button>

          </div>
          <div className='flex flex-col items-start gap-3'>
            <div className='relative'><CustomerDetails name={data.name} phone={data.phone} address={data.address} /></div>
            <div>
              {data.feedback && <div className=" min-w-max max-w-sm mx-auto  p-4 shadow-md rounded-lg border-b">
                {/* Card Title */}
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">Feedback</h3>

                {/* Rating Display */}
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-semibold">Rating:</p>
                  <p className="text-yellow-400">{renderStars(data.feedback.stars)}</p>
                </div>

                {/* Feedback Text Display */}
                <div className=''>
                  <p className="pl-2">{data.feedback.text}</p>
                </div>
              </div>}
            </div>
          </div>
        </>

      }
      {/* Printable Receipt Section */}
      <div className="hidden print:block receipt-container" ref={receiptRef}>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Delivery Order</h2>
        </div>
        <div className="text-sm mb-2">
          <p>Date: {format(Date(data.createdAt), 'dd MMM yyyy, hh:mm a')}</p>
        </div>
        <div className="text-sm mt-4">
          <p>Address: {data.address}</p>
        </div>
        {data.orderDescription && (
          <div className="text-sm mt-4">
            <p>Additional Instructions:</p>
            <p>{data.orderDescription}</p>
          </div>
        )}

        <div>
          {/* Order Details Table */}
          <table className="receipt-table text-sm mb-4">
            <thead className="border-b border-black">
              <tr>
                <th className="text-left">Article</th>
                <th className="text-center">Qty.</th>
              </tr>
            </thead>
            <tbody>
              {data.items && data.items.map((item, i) => (
                <tr key={i} className="border-b border-dashed border-gray-400">
                  <td className="text-left">{item.title}</td>
                  <td className="text-center">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className=" flex items-center justify-between text-lg font-bold border-t border-black pt-4">
            <div>
              Total
            </div>
            <div>
              Rs {data.total}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OrderDetail;
