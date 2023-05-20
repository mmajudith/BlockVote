import { createAsyncThunk } from '@reduxjs/toolkit';

export const logIn = createAsyncThunk('logIn', async (username, thunkAPI) => {
	const currentUser = username;
	if (currentUser) {
		sessionStorage.setItem('user', currentUser);
	}

	return currentUser;
});

export const logOut = createAsyncThunk('logOut', async () => {
	const currentUser = sessionStorage.getItem('user');

	if (currentUser) {
		sessionStorage.removeItem('user');
	}

	return null;
});
