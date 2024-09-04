import React from 'react'
import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const Actions = ({ table, row, handleDelete, handleSave }) => {
    const openDeleteConfirmModal = (row) => {
        if (window.confirm(`Are you sure you want to delete this ${row.original.name}? `)) {
            handleDelete(row.original._id);
            console.log('successfully deleted', row.original.name)

        }
    };
    return (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
            <IconButton
                color="secondary"
                onClick={() => {
                    table.setEditingRow(row);
                }}
            >
                <EditIcon />

            </IconButton>
            <IconButton
                color="error"
                onClick={
                    () => openDeleteConfirmModal(row)
                }
            //   }
            >
                <DeleteIcon />
            </IconButton>
        </Box >
    )
}

export default Actions