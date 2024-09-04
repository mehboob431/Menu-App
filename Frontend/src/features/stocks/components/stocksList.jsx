import React from 'react'
import Table from '../../../components/Table'
import columns from '../data/stocks/StockColumns'
import { useMemo } from "react";
import dummyData from '../data/stocks/dummyData';
import Actions from '../data/stocks/Actions';

const StocksList = () => {
    const topButton = {
        name: "Add New Stock",
        path: "/add-stock",
    }
    return (
        <div>
            <Table
                data={dummyData}
                columns={
                    useMemo(
                        () => [columns],
                        [],
                    )
                }
                actions={Actions}
                topButton={topButton}
            />
        </div>
    )
}

export default StocksList