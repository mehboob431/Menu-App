import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';


const columns =
{
    id: 'menu-list', // id used to define `group` column
    header: 'Menu-list',
    columns: [
        {
            accessorKey: 'imageUrl',
            header: 'Image',
            Cell: ({ cell }) => (
                <img
                    src={cell.getValue()}
                    alt="Product Image"
                    loading="lazy"
                    style={{ width: '50px', height: 'auto' }}
                />
            ),
            enableEditing: false, // Disable editing for the image
        },
        {
            accessorKey: 'title',
            header: 'Title',
            enableEditing: true, // Enable editing for the title
        },
        {
            accessorKey: 'price',
            header: 'Price',
            enableEditing: true, // Enable editing for the price
        },
        {
            accessorKey: 'category',
            header: 'Category',
            enableEditing: false, // Disable editing for the category
        },
        {
            accessorKey: 'ingredient',
            header: 'Ingredient',
            enableEditing: true, // Enable editing for the description
        },
        {
            accessorKey: 'description',
            header: 'Description',
            enableEditing: true, // Enable editing for the description
        },
    ],
}


export default columns;