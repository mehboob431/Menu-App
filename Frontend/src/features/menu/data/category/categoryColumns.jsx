const categoryColumns =
{
    id: 'categories-list', // id used to define `group` column
    header: 'Categories-list',
    columns: [
        {
            accessorKey: 'name', // Category column
            header: 'Name',
            enableEditing: true,
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

export default categoryColumns