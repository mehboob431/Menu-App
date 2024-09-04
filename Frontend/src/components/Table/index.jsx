import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

//MRT Imports
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
} from 'material-react-table';

//Material UI Imports
import {
  Box,
  IconButton,
  lighten,
  Button,

} from '@mui/material';

//Icons Imports
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Mock Data
// import { data } from './makeData';

const Example = ({ data, columns, topButton, actions: Actions, handleSave, handleDelete, handleUpdate }) => {

  const [validationErrors, setValidationErrors] = useState({});

  const Navigate = useNavigate()

  const handleSaveUser = async ({ values, table }) => {
    console.log('values', values)
    // const newValidationErrors = validateUser(values);
    // if (Object.values(newValidationErrors).some((error) => error)) {
    //   setValidationErrors(newValidationErrors);
    //   return;
    // }
    // setValidationErrors({});
    // await updateUser(values);
    table.setEditingRow(null); //exit editing mode
  };
  const openDeleteConfirmModal = (row) => {
    if (window.confirm(`Are you sure you want to delete this ${row.original.name}? `)) {
      // deleteUser(row.original.id);
      console.log('successfully deleted', row.original.name)

    }
  };



  // function validateUser(user) {
  //   return {
  //     name: !validateRequired(user.name)
  //       ? 'First Name is Required'
  //       : '',
  //     lastName: !validateRequired(user.lastName) ? 'Last Name is Required' : '',
  //     email: !validateEmail(user.email) ? 'Incorrect Email Format' : '',
  //   };
  // }

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableColumnFilterModes: true,
    enableColumnOrdering: false,
    enableGrouping: true,
    enableColumnPinning: false,
    enableFacetedValues: true,
    enableRowActions: Actions ? true : false,
    enableRowSelection: false,
    editDisplayMode: 'row', // ('modal', 'cell', 'table', and 'custom' are also available)
    enableEditing: Actions ? true : false,
    initialState: {
      showColumnFilters: false,
      showGlobalFilter: true,
      columnPinning: {
        left: ['mrt-row-expand', 'mrt-row-select'],
        right: ['mrt-row-actions'],
      },
    },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    muiSearchTextFieldProps: {
      size: 'small',
      variant: 'outlined',
    },
    muiPaginationProps: {
      color: 'secondary',
      rowsPerPageOptions: [10, 20, 30],
      shape: 'rounded',
      variant: 'outlined',
    },

    onEditingRowSave: (props) => handleSave ? handleSave({ ...props, setValidationErrors }) : undefined,

    renderRowActions: Actions ? ({ table, row }) => (<Actions table={table} row={row} handleSave={handleSave ? handleSave : undefined} handleDelete={handleDelete ? handleDelete : undefined} handleUpdate={handleUpdate ? handleUpdate : undefined} />) : undefined,

    renderTopToolbar: ({ table }) => {
      const handleAddNewClick = () => {
        Navigate(topButton.path);
      };

      //   const handleActivate = () => {
      //     table.getSelectedRowModel().flatRows.map((row) => {
      //       alert('activating ' + row.getValue('name'));
      //     });
      //   };

      //   const handleContact = () => {
      //     table.getSelectedRowModel().flatRows.map((row) => {
      //       alert('contact ' + row.getValue('name'));
      //     });
      //   };

      return (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: 'flex',
            gap: '0.5rem',
            p: '8px',
            justifyContent: 'space-between',
          })}
        >
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {/* import MRT sub-components */}
            <MRT_GlobalFilterTextField table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Box>
          <Box>
            {topButton && <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <Button
                // color="error"
                // disabled={!table.getIsSomeRowsSelected()}
                onClick={handleAddNewClick}
                variant="contained"
              >
                {topButton.name}
              </Button>
              {/* <Button
                color="success"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleActivate}
                variant="contained"
              >
                Activate
              </Button>
              <Button
                color="info"
                disabled={!table.getIsSomeRowsSelected()}
                onClick={handleContact}
                variant="contained"
              >
                Contact
              </Button> */}
            </Box>}
          </Box>
        </Box>
      );
    },


  });

  return <MaterialReactTable className={" bg-black"} table={table} />;
};

//Date Picker Imports - these should just be in your Context Provider

const Table = ({ data, columns, topButton, actions, handleSave, handleDelete, handleUpdate }) => (
  //App.tsx or AppProviders file
  <LocalizationProvider dateAdapter={AdapterDayjs} >
    <Example data={data} columns={columns} topButton={topButton} actions={actions} handleSave={handleSave} handleDelete={handleDelete} handleUpdate={handleUpdate} />
  </LocalizationProvider>
);

export default Table;
