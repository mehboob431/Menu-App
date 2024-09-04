import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import AddItem from '../../../../features/menu/components/addItem'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add New Item"}))
      }, [])


    return(
        <AddItem/>

    )
}

export default InternalPage