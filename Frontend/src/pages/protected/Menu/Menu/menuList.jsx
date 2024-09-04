import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../../../features/common/headerSlice'
import MenuList from '../../../../features/menu/components/menunList'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Menu"}))
      }, [])


    return(
        <MenuList/>

    )
}

export default InternalPage