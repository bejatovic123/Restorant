import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
    },
    logout: (state) => {
      state.name = '';
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
