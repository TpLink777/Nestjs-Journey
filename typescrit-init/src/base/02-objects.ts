
//! Interface example
interface Product {
    id: number;
    name: string;
    price?: number; //! valor que puede o no estar en el objeto
}

//! Array
const fruits: string[] = [
    'apple',
    'pear',
    'grape',
    'guava',
    'pineapple',
    'watermelon'
]

//! Uso de la interfaz en un Objet
const product: Product = {
    id: 1,
    name: "Camiseta"
}

//! Uso de la interfaz en un Array
const products: Product[] = [
    {
        id: 1,
        name: "Camiseta",
        price: 50000,
    },
    {
        id: 2,
        name: "Pantalón",
        price: 80000,
    },
];


export {
    fruits,
    product,
    products
}