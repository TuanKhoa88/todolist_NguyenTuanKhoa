
const initState = [
    {
        productId: "P001",
        productName: "Pizza",
        image: "images/pizza.jpg",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dict  magni ut deleniti!",
        price: 12,
        quantity: 10,
    },
    {
        productId: "P002",
        productName: "Hamburger",
        image: "images/Hamburger.jpg",
        title:
            "Lorem ipsum dolor sit amet, repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 16,
        quantity: 0,
    },
    {
        productId: "P003",
        productName: "Bread",
        image: "images/bread.jpg",
        title:
            "Lorem ipsum dolor sit amet, consectetur debitis quisquam magnam magni ut deleniti!",
        price: 13,
        quantity: 8,
    },
    {
        productId: "P004",
        productName: "Cake",
        image: "images/Cake.jpg",
        title:
            "Lorem ipsum a asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 14,
        quantity: 6,
    },
];
export const listProducts = (state = initState, action) => {
    return state;
};
