import React from 'react'
import { Box, IconButton } from '@mui/material';
// import { VisibilityOutlinedIcon } from '@mui/icons-material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useNavigate } from 'react-router-dom';

const Actions = ({ table, row }) => {
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
        </Box >
    )
}

export default Actions