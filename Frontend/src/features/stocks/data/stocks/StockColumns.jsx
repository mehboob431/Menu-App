import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';


const columns =
{
    id: 'stocks-list', // id used to define `group` column
    header: 'Stocks-list',
    columns: [
        {
            accessorKey: 'name', // Category column
            header: 'Name',
            enableEditing: true,
            size: 100,
        },
        {
            accessorKey: 'category', // Category column
            header: 'Category',
            enableEditing: false,
            size: 100,
        },
        {
            accessorKey: 'retailPrice', // Price column with custom styling
            header: 'Retail Price',
            enableEditing: true,
            size: 30,
            Cell: ({ cell }) => (
                <Box
                    component="span"
                    sx={(theme) => ({
                        backgroundColor:
                            cell.getValue() < 20
                                ? theme.palette.error.dark
                                : cell.getValue() >= 20 && cell.getValue() < 50
                                    ? theme.palette.warning.dark
                                    : theme.palette.success.dark,
                        borderRadius: '0.25rem',
                        color: '#fff',
                        maxWidth: '9ch',
                        p: '0.25rem',
                    })}
                >
                    {cell.getValue()?.toLocaleString?.('en-US', {
                        style: 'currency',
                        currency: 'PKR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                    })}
                </Box>
            ),
        },
        {
            accessorKey: 'quantity', // Quantity column with custom styling
            header: 'Quantity',
            enableEditing: true,
            size: 20,
            Cell: ({ cell }) => (
                <Box
                    component="span"
                    sx={(theme) => ({
                        backgroundColor:
                            cell.getValue() < 20
                                ? theme.palette.error.dark
                                : cell.getValue() >= 20 && cell.getValue() < 50
                                    ? theme.palette.warning.dark
                                    : theme.palette.success.dark,
                        borderRadius: '0.25rem',
                        color: '#fff',
                        maxWidth: '9ch',
                        p: '0.25rem',
                    })}
                >
                    {cell.getValue()}
                </Box>
            ),
        },
        {
            accessorKey: 'expDate', // Location column
            header: 'Expire In',
            enableEditing: false,
            size: 100,
            Cell: ({ cell }) => {
                const theme = useTheme();
                const expDate = new Date(cell.getValue());
                const currentDate = new Date();
                const timeDiff = expDate.getTime() - currentDate.getTime();
                const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

                let displayValue;
                let backgroundColor;

                if (daysDiff <= 30 && daysDiff > -30) {
                    displayValue = `${daysDiff} day${daysDiff !== 1 && daysDiff !== -1 ? 's' : ''}`;
                    backgroundColor = theme.palette.error.dark; // Red for less than or equal to 30 days
                } else {
                    const monthsDiff = expDate.getMonth() - currentDate.getMonth() +
                        (12 * (expDate.getFullYear() - currentDate.getFullYear()));
                    if (monthsDiff >= 10) {
                        if (monthsDiff < 12) {
                            displayValue = `${monthsDiff} month${monthsDiff !== 1 ? 's' : ''}`;
                        } else {
                            displayValue = `${Math.floor(monthsDiff / 12)} year${Math.floor(monthsDiff / 12) !== 1 ? 's' : ''}`;
                        }
                        backgroundColor = theme.palette.success.dark; // Green for 12 months or more
                    } else if (monthsDiff > 2) {
                        displayValue = `${monthsDiff} month${monthsDiff !== 1 ? 's' : ''}`;
                        backgroundColor = theme.palette.warning.dark; // Orange for 2 to 11 months
                    } else {
                        if (monthsDiff <= -12) {
                            displayValue = `${Math.floor(monthsDiff / 12)} year${Math.floor(monthsDiff / 12) !== -1 ? 's' : ''}`;
                        } else {

                            displayValue = `${monthsDiff} month${monthsDiff !== 1 && monthsDiff !== -1 ? 's' : ''}`;
                        }
                        backgroundColor = theme.palette.error.dark; // Red for less than 2 months
                    }
                }

                return (
                    <Box
                        component="span"
                        sx={{
                            backgroundColor: backgroundColor,
                            borderRadius: '0.25rem',
                            color: '#fff',
                            maxWidth: '10ch',
                            p: '0.25rem',
                            display: 'inline-block', // Ensures the span behaves like a block element
                        }}
                    >
                        {displayValue}
                    </Box>
                );
            },
        },
        {
            accessorKey: 'mfgDate', // Location column
            header: 'Mfg Date',
            enableEditing: false,
            size: 100,
        },
        {
            accessorKey: 'purchasePrice', // Location column
            header: 'Purchase Price',
            enableEditing: true,
            size: 100,
        },
        {
            accessorKey: 'sku', // Location column
            header: 'SKU',
            enableEditing: false,
            size: 50,
        },
        {
            accessorKey: 'location', // Location column
            header: 'Location',
            enableEditing: false,
            size: 100,
        },
        {
            accessorKey: 'description', // Description column
            header: 'Description',
            enableEditing: true,
            size: 300,
        },
    ],
}


export default columns;