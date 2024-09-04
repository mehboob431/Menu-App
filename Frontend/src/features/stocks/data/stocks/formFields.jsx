

const formFields = [
    //fields
    {
        labelTitle: 'Name',
        labelStyle: "font-bold",
        name: "name",
        placeholder: 'Enter item name',
    },

    {
        labelTitle: 'Category',
        labelStyle: "font-bold",
        name: "category",
        type: 'dropdown',
        placeholder: 'Select category',
        options: [
            {
                name: 'Category 1',
                value: 'category1',
            },
            {
                name: 'Category 2',
                value: 'category2',
            },
            {
                name: 'Category 3',
                value: 'category3',
            },
        ],
    },

    {
        labelTitle: 'Retail Price',
        labelStyle: "font-bold",
        name: "retailPrice",
        type: 'number',
        placeholder: 'Enter retail price',
    },
    {
        labelTitle: 'Purchase Price',
        labelStyle: "font-bold",
        name: "purchasePrice",
        type: 'number',
        placeholder: 'Enter purchase price',
    },
    {
        labelTitle: 'Quantity',
        labelStyle: "font-bold",
        name: "quantity",
        type: 'number',
        placeholder: 'Enter quantity',
    },
    {
        labelTitle: 'SKU',
        labelStyle: "font-bold",
        name: "sku",
        placeholder: 'Enter SKU',
    },
    {
        labelTitle: 'Location',
        labelStyle: "font-bold",
        name: "location",
        type: 'dropdown',
        placeholder: 'Select location',
        options: [
            {
                name: 'Warehouse 1',
                value: 'warehouse1',
            },
            {
                name: 'Warehouse 2',
                value: 'warehouse2',
            },
            {
                name: 'Warehouse 3',
                value: 'warehouse3',
            },
        ],
    },
    {
        labelTitle: 'Image Upload',
        labelStyle: "font-bold",
        name: "imageUpload",
        type: 'file',
        placeholder: 'Select picture',
    },
    {
        labelTitle: 'Manufacturing Date',
        labelStyle: "font-bold",
        name: "mfgDate",
        type: 'date',
        placeholder: 'Select manufacturing date',

    },
    {
        labelTitle: 'Expiry Date',
        labelStyle: "font-bold",
        name: "expDate",
        type: 'date',
        placeholder: 'Select expiry date',
    },
    {
        labelTitle: 'Description',
        labelStyle: "font-bold",
        name: "description",
        type: 'textarea',
        placeholder: 'Enter item description',
    },

];


export default formFields