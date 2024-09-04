import React from 'react'
import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

const Actions = ({ table, row }) => {
    const openDeleteConfirmModal = (row) => {
        if (window.confirm(`Are you sure you want to delete this ${row.original.name}? `)) {
            // deleteUser(row.original.id);
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
                    //   console.log(`The product ${row.name}  deleted successfully`)
                    //   // data.splice(row.index, 1); //assuming simple data table
                    // setData([...data]);
                }
            //   }
            >
                <DeleteIcon />
            </IconButton>
        </Box >
    )
}

export default Actions