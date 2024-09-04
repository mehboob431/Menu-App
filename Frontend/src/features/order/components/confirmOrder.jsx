import React, { useState, useEffect, useMemo } from 'react'
import Table from '../../../components/Table'
import axios from 'axios';
import globalConstantUtil from '../../../utils/globalConstantUtil';
import columns from '../data/columns';
import Actions from '../data/ConfirmedActions';

const OrderList = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        try {
            await axios.get(globalConstantUtil.baseUrl + '/orders/')
                .then((res) => {
                    console.log('res', res.data)
                    setData(res.data.filter((item)=>item.status === "confirmed"))
                })

        }
        catch (error) {
            console.error('error in fetching orders', error)
        }

    }

    const updateOrderStatus = async (orderId, newStatus, row) => {
        try {

            await axios.put(globalConstantUtil.baseUrl + `/orders/${orderId}`, { ...row.original, status: newStatus })
                .then((res) => {
                    console.log('res.data', res.data)
                    setData(prevData => prevData.filter(data => data._id !== orderId))
                })
        } catch (error) {
            console.error('Failed to update order status:', error);
        }
    };

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Table
                data={data}
                columns={
                    useMemo(
                        () => [columns],
                        [],
                    )
                }
                actions={Actions}
                handleUpdate={updateOrderStatus}
            />
        </div>
    )
}

export default OrderList;