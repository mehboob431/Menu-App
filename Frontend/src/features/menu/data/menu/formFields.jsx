const formFields = [

    {
        labelTitle: 'Title',
        labelStyle: "font-bold",
        name: "title",
        placeholder: 'Enter item title',
    },
    {
        labelTitle: 'Description',
        labelStyle: "font-bold",
        name: "description",
        placeholder: 'eg: size, pieces, bowl or etc.',
    },
    {
        labelTitle: 'Ingredient',  // Added ingredient field
        labelStyle: "font-bold",
        name: "ingredient",
        placeholder: 'Enter ingredient(s)',
    },
    {
        labelTitle: 'Price',
        labelStyle: "font-bold",
        name: "price",
        type: 'number',
        placeholder: 'Enter price',
    },
    {
        labelTitle: 'Category',
        labelStyle: "font-bold",
        name: "category",
        type: 'dropdown',
        placeholder: 'Select category',
        options: []
        //     {
        //         name: 'Pizza',
        //         value: 'Pizza',
        //     },
        //     {
        //         name: 'Deal',
        //         value: 'Deal',
        //     },
        //     {
        //         name: 'Burger',
        //         value: 'Burger',
        //     },
        //     {
        //         name: 'Combo',
        //         value: 'Combo',
        //     },
        //     {
        //         name: 'Chinese',
        //         value: 'Chinese',
        //     },
        //     {
        //         name: 'Pakistan',
        //         value: 'Pakistan',
        //     },
        //     {
        //         name: 'Chinees',
        //         value: 'Chinees',
        //     },
        // ],
    },
    {
        labelTitle: 'Image Upload',
        labelStyle: "font-bold",
        name: "imageUrl",
        type: 'file',
        placeholder: 'Select picture',
    },

];

export default formFields;
