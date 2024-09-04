import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../features/common/headerSlice'
import OrderDetail from '../../../features/order/components/orderDetail'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Order Detail" }))
    }, [])


    return (

        <OrderDetail />
    )
}

export default InternalPage