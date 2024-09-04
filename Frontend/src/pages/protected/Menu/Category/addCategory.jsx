import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import AddCategory from '../../../../features/menu/components/addCategory'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add New Category"}))
      }, [])

  return (
    <div>
        <AddCategory/>
    </div>
  )
}

export default InternalPage