import React, { useState, useEffect, useMemo } from 'react'
import Table from '../../../components/Table'
import columns from '../data/menu/columns'
import dummyData from '../data/menu/dummyData';
import Actions from '../data/menu/Actions';
import axios from 'axios';
import globalConstantUtil from '../../../utils/globalConstantUtil';

const MenuList = () => {
    const topButton = {
        name: "Add New Item",
        path: "/add-menu-item",
    }

    const [data, setData] = useState([])

    const getData = async () => {
        try {
            await axios.get(globalConstantUtil.baseUrl + '/foodItems/')
                .then((res) => {
                    console.log('res', res.data)
                    setData(res.data)
                })

        }
        catch (error) {
            console.error('error in fetching foodItems', error)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    const handleSave = async ({ values, table, row }) => {
        try {
            // Here you can add the logic to save the edited data, e.g., send it to the server
            await axios.put(`${globalConstantUtil.baseUrl}/foodItems/${row.original._id}`, values)
                .then(() => {
                    table.setEditingRow(null); // exit editing mode
                })

        } catch (error) {
            console.error('Error saving foodItems:', error);
        }
    }
    const handleDelete = async (id) => {
        try {
            console.log('row', id)
            // Here you can add the logic to save the edited data, e.g., send it to the server
            await axios.delete(`${globalConstantUtil.baseUrl}/foodItems/${id}`)
                .then(() => {
                    setData((prevData) => prevData.filter((data) => data._id !== id))
                })

        } catch (error) {
            console.error('Error saving foodItems:', error);
        }
    }

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
                topButton={topButton}
                handleSave={handleSave}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default MenuList