import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    isCartOpen: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((i) => i.menuId === item.menuId);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += item.price;
            } else {
                state.cartItems.push({ ...item, quantity: 1, totalPrice: item.price });
            }
            state.isCartOpen = true;
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.menuId !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const item = state.cartItems.find((i) => i.menuId === action.payload);
            if (item) {
                item.quantity += 1;
                item.totalPrice += item.price;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find((i) => i.menuId === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.totalPrice -= item.price;
            } else {
                state.cartItems = state.cartItems.filter((i) => i.menuId !== action.payload);
            }
        },
        
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.isCartOpen = false;
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    toggleCart,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
