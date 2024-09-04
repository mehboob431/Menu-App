import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import StocksList from '../../../../features/stocks/components/stocksList'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Stocks"}))
      }, [])


    return(
        <StocksList/>

    )
}

export default InternalPage