import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../features/common/headerSlice'
import OrderList from '../../../features/order/components/deliveredOrder'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Delivered Orders"}))
      }, [])


    return(
        <OrderList/>

    )
}

export default InternalPage