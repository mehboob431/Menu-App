import { Box } from "@mui/material";
import { format } from 'date-fns';

const columns = {
    id: 'order-list', // id used to define `group` column
    header: 'Order-list',
    columns: [
        {
            accessorKey: 'createdAt',
            header: 'Order Date',
            size: 150,
            Cell: ({ cell }) => {
                const date = new Date(cell.getValue());
                return format(date, 'dd MMM yyyy, hh:mm a');
            },
            enableEditing: false, // Disable editing for Order Date
        },
        {
            accessorKey: 'name',
            header: 'Customer Info',
            size: 160,
            Cell: ({ cell, row }) => (
                <Box>
                    <div>{row.original.name}</div>
                    <div>{row.original.phone}</div>
                </Box>
            ),
            enableEditing: false, // Disable editing for Customer Info
        },
        {
            accessorKey: 'total',
            header: 'Total Amount',
            size: 100,
            Cell: ({ cell }) => (
                <Box>
                    Rs {cell.getValue()}
                </Box>
            ),
            enableEditing: false, // Disable editing for the Total Amount
        },
        {
            accessorKey: 'status',
            header: 'Status',
            size: 100,
            Cell: ({ cell }) => {
                const status = cell.getValue();
                const statusStyles = {
                    pending: 'bg-orange-500 text-orange-700 bg-opacity-50',
                    confirmed: 'bg-blue-500 text-blue-700 bg-opacity-50',
                    delivered: 'bg-green-500 text-green-700 bg-opacity-50',
                    rejected: 'bg-red-500 text-red-700 bg-opacity-50',
                    canceled: 'bg-red-500 text-red-700 bg-opacity-50',
                };
                return (
                    <Box className={`px-2 py-1 rounded-lg max-w-max ${statusStyles[status] || ''}`}>
                        {status}
                    </Box>
                );
            },
            enableEditing: false, // Disable editing for Status
        },
        {
            accessorKey: 'paymentMethod',
            header: 'Payment Method',
            size: 100,
            Cell: ({ cell }) => (
                <Box>
                    {cell.getValue() === 'cod' ? 'Cash on Delivery' : cell.getValue()}
                </Box>
            ),
            enableEditing: false, // Disable editing for the Payment Method
        },
    ],
};

export default columns;
