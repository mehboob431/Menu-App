import React from 'react'
import { Box, IconButton } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useNavigate } from 'react-router-dom';


const Actions = ({ table, row, handleUpdate }) => {
    const Navigate = useNavigate()
    
    return (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
            <IconButton
                color="secondary"
                onClick={() => {
                    Navigate(`/order/${row.original._id}`)
                }}
            >
                <VisibilityOutlinedIcon />

            </IconButton>

            <IconButton
                color="success"
                onClick={() => {
                    handleUpdate(row.original._id, 'confirmed', row);
                }}
            >
                <CheckCircleOutlineIcon />
            </IconButton>

            <IconButton
                color="error"
                onClick={() => {
                    handleUpdate(row.original._id, 'rejected', row);
                }}
            >
                <CancelOutlinedIcon />
            </IconButton>

        </Box >
    )
}

export default Actions