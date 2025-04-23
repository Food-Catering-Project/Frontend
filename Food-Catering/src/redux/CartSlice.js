// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items: [],
// };

// const CartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addItem: (state, action) => {
//             const existingItem = state.items.find((item) => item.menuId === action.payload.menuId);
//             if (existingItem) {
//                 existingItem.quantity += action.payload.quantity;
//                 existingItem.totalPrice = existingItem.quantity * existingItem.price;
//             } else {
//                 state.items.push({
//                     ...action.payload,
//                     totalPrice: action.payload.quantity * action.payload.price,
//                 });
//             }
//         },
//         updateQuantity: (state, action) => {
//             const item = state.items.find((item) => item.menuId === action.payload.menuId);
//             if (item) {
//                 item.quantity = action.payload.quantity;
//                 item.totalPrice = item.quantity * item.price;
//             }
//         },
//         removeItem: (state, action) => {
//             state.items = state.items.filter((item) => item.menuId !== action.payload);
//         },
//         clearCart: (state) => {
//             state.items = [];
//         },
//     },
// });

// export const { addItem, updateQuantity, removeItem, clearCart } = CartSlice.actions;
// export default CartSlice.reducer;
