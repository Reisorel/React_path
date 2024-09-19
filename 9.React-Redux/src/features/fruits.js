import { createSlice } from "@reduxjs/toolkit";
import { addOne } from './fruitsCart'; // Import de l'action depuis fruitsCart



const initialState = {
  list: [
    {
      name: "Mango",
      url: "/images/mango.jpg",
      price: 5,
      id: 65237894,
    },
    {
      name: "Watermelon",
      url: "/images/watermelon.jpg",
      price: 3,
      id: 75737894,
    },
  ],
};

export const fruits = createSlice({
  name: "fruits",
  initialState,
  reducers: {
    // Ajoutez vos reducers ici si nécessaire
  },
  extraReducers: (builder) => {
    builder.addCase(addOne, (state, action) => {
      console.log("Hello from fruits reducer motherfucker");
    });
  }
});

export default fruits.reducer;
