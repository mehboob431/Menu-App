import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';


const columns =
{
    id: 'item-report', // id used to define `group` column
    header: 'Item-Report',
    columns: [
        {
            accessorKey: 'imageUrl',
            header: 'Image',
            Cell: ({ cell }) => (
                <img
                    src={cell.getValue()}
                    alt="Product Image"
                    style={{ width: '50px', height: 'auto' }}
                />
            ),
            // enableEditing: false, // Disable editing for the image
        },
        {
            accessorKey: 'title',
            header: 'Title',
            // enableEditing: true, // Enable editing for the title
        },
        {
            accessorKey: 'orderCount',
            header: 'Order Count ',
            // enableEditing: true, // Enable editing for the price
        },
        {
            accessorKey: 'price',
            header: 'Price',
            // enableEditing: false, // Disable editing for the category
        },
        {
            accessorKey: 'totalAmountSold',
            header: 'Total Ammount Sold',
            // enableEditing: true, // Enable editing for the description
        },
        // {
        //     accessorKey: 'description',
        //     header: 'Description',
        //     // enableEditing: true, // Enable editing for the description
        // },
    ],
}


export default columns;