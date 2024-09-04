import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import AddStock from '../../../../features/stocks/components/addStock'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add Stock"}))
      }, [])

  return (
    <div>
        <AddStock/>
    </div>
  )
}

export default InternalPage