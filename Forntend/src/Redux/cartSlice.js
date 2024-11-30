import { createSlice } from "@reduxjs/toolkit";

// Utility function to save to localStorage
const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cart", serializedState);
    } catch (e) {
        console.error("Could not save state:", e);
    }
};

// Utility function to load from localStorage
const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("cart");
        if (serializedState === null) return { items: [] }; // Default to empty cart
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state:", e);
        return { items: [] }; // Default to empty cart
    }
};

// Initial state loaded from localStorage or default
const initialState = loadFromLocalStorage();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // console.log("Before Adding:", state.items);
            const product = action.payload;
            const existingItem = state.items.find(item => item.id === product.id);

            if (existingItem) {
                // If item exists, update quantity
                existingItem.quantity += 1;
            } else {
                // If item doesn't exist, add it to the cart
                state.items.push({ ...product, quantity: 1 });
            }

            // Save updated state to localStorage
            saveToLocalStorage(state);
            // console.log("After Adding:", state.items);
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);

            // Save updated state to localStorage
            saveToLocalStorage(state);
            console.log("After Removing:", state.items);
        },

        updateQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }

            // Save updated state to localStorage
            saveToLocalStorage(state);
            console.log("After Updating Quantity:", state.items);
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
