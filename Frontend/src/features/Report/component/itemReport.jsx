import React, { useEffect, useMemo, useState } from 'react'
import Table from '../../../components/Table'
import dummyData from '../data/dummyData'
import Columns from '../data/columns'
// import globalConstantUtil from '../../../utils/globalConstantUtil'
// import axios from 'axios'
const ItemReport = () => {
   
    const sortedData = useMemo(() => {
        return [...dummyData].sort((a, b) => b.orderCount - a.orderCount);
    }, [dummyData]);
    
    return (
        <div>
            <Table
                data={sortedData}
                columns={
                    useMemo(
                        () => [Columns],
                        [],
                    )
                }
                


            />
        </div>
    )
}

export default ItemReport