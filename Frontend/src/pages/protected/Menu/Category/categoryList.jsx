import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import CategoryList from '../../../../features/menu/components/categoryList'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Categories"}))
      }, [])


    return(
        <CategoryList/>

    )
}

export default InternalPage