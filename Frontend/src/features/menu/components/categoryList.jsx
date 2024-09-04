import React, { useEffect, useMemo, useState } from 'react'
import Table from '../../../components/Table'
import dummyData from '../data/category/dummyData'
import Actions from '../data/category/Actions'
import categoryColumns from '../data/category/categoryColumns'
import globalConstantUtil from '../../../utils/globalConstantUtil'
import axios from 'axios'
const CategoryList = () => {
    const topButton = {
        name: "Add New Category",
        path: "/add-category"
    }

    const [data, setData] = useState([])

    const getData = async () => {
        try {
            await axios.get(globalConstantUtil.baseUrl + '/categories/')
                .then((res) => {
                    // console.log('res', res)
                    setData(res.data)
                })

        }
        catch (error) {
            console.error('error in fetching categories', error)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    const handleSave = async ({ values, table, row}) => {
        try {
            // Here you can add the logic to save the edited data, e.g., send it to the server
            await axios.put(`${globalConstantUtil.baseUrl}/categories/${row.original._id}`, values)
                .then(() => {
                    table.setEditingRow(null); // exit editing mode
                })

        } catch (error) {
            console.error('Error saving user:', error);
        }
    }
    const handleDelete = async (id) => {
        try {
            console.log('row', id)
            // Here you can add the logic to save the edited data, e.g., send it to the server
            await axios.delete(`${globalConstantUtil.baseUrl}/categories/${id}`)
                .then(() => {
                    setData((prevData)=>prevData.filter((data)=>data._id !== id))
                })

        } catch (error) {
            console.error('Error saving user:', error);
        }
    }
    
    return (
        <div>
            <Table
                data={data}
                columns={
                    useMemo(
                        () => [categoryColumns],
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

export default CategoryList