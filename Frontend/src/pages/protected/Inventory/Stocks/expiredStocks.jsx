import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import ExpiredStocks from '../../../../features/stocks/components/expiredStocks'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Expired Stocks"}))
      }, [])


    return(
        <ExpiredStocks/>

    )
}

export default InternalPage