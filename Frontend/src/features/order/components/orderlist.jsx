import React, { useState, useEffect, useMemo } from 'react'
import Table from '../../../components/Table'
import axios from 'axios';
import globalConstantUtil from '../../../utils/globalConstantUtil';
import columns from '../data/columns';
import Actions from '../data/Actions';

const OrderList = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        try {
            await axios.get(globalConstantUtil.baseUrl + '/orders/')
                .then((res) => {
                    console.log('res', res.data)
                    setData(res.data)
                })

        }
        catch (error) {
            console.error('error in fetching orders', error)
        }

    }

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
            />
        </div>
    )
}

export default OrderList;