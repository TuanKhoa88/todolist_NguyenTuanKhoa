import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "../Constants";


const initState = JSON.parse(localStorage.getItem('yourcart')) || [];
export const yourCarts = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const existingCartIndex = state.findIndex(
                cart => cart.product.productId === action.payload.product.productId
            );
            state = existingCartIndex !== -1
                ? state.map((cart, index) =>
                    index === existingCartIndex
                        ? { ...cart, quantity: cart.quantity + action.payload.quantity }
                        : cart
                )
                : [...state, {
                    id: state.length > 0 ? state[state.length - 1].id + 1 : 1,
                    product: action.payload.product,
                    quantity: action.payload.quantity,
                }];
            localStorage.setItem("yourcart", JSON.stringify(state));
            return state;
        case UPDATE_PRODUCT:
            const updatedState = state.map(cart =>
                cart.product.productId === action.payload.productId
                    ? { ...cart, quantity: action.payload.quantity }
                    : cart
            );
            state = [...updatedState];
            localStorage.setItem("yourcart", JSON.stringify(state));
            return state;
        case DELETE_PRODUCT:
            const yourCarts = state.filter((cart) => cart.id !== action.payload);
            state = [...yourCarts];
            localStorage.setItem("yourcart", JSON.stringify(state));
            return state;
        default:
            return state;
    }
};

