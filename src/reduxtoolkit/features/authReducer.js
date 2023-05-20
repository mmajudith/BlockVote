import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from '../actionsCreator/userActions';

const initialState = {
	currentUser: sessionStorage.getItem('user') || null,
	isLogout: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		toggleLogout: (state) => {
			state.isLogout = !state.isLogout;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(logIn.fulfilled, (state, { payload }) => {
			state.currentUser = payload;
		});
		builder.addCase(logOut.fulfilled, (state, { payload }) => {
			state.currentUser = payload;
		});
	},
});

export const { toggleLogout } = authSlice.actions;

export default authSlice.reducer;
