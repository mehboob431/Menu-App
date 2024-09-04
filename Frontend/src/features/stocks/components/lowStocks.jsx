import React, { useMemo } from 'react'
import Table from '../../../components/Table'
import dummyData from '../data/stocks/dummyData'
import columns from '../data/stocks/StockColumns'

const LowStocks = () => {
    const topButton = {
        name: "All Stocks",
        path: "/stocks",
    }
    const data = dummyData.filter((item) => item.quantity < 20)
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
                topButton={topButton}
            />
        </div>
    )
}

export default LowStocks