import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};
const allActionSLice = createSlice({
  name: 'allActionSLice',
  initialState,
  reducers: {
    addDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});
export const { addDarkMode } = allActionSLice.actions;
export default allActionSLice.reducer;
