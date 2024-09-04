import React from 'react'
import Button from '../Button'
import { Send, Clear } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
const FormButtons = ({path}) => {
    const Navigate = useNavigate();
    
    const handleCancel = () => {
        Navigate(path)
    }
    return (
        <div className='flex items-center justify-end gap-3 py-5' >
            <Button color="btn-error" icon={<Clear />} onClick={handleCancel} >Cancel</Button>
            <Button type="submit" color="btn-info" icon={<Send />} >Submit</Button>
        </div>
    )
}

export default FormButtons