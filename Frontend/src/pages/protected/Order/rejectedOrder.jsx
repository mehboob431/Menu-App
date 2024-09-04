import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../features/common/headerSlice'
import OrderList from '../../../features/order/components/rejectedOrder'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Rejected Orders"}))
      }, [])


    return(
        <OrderList/>

    )
}

export default InternalPage