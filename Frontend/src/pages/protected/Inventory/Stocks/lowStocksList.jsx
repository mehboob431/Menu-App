import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import LowStocks from '../../../../features/stocks/components/lowStocks'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Low Stocks" }))
    }, [])


    return (
        <LowStocks/>
    )
}

export default InternalPage