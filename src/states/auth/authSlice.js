import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData, getData } from '../../utils/api';
import showToast from "../../utils/ShowAlert";

const initialAuthState = {
    loading: true,
    token: null,
    isAuthenticated: false,
    user: [],
    errors: []
};

let authObj = {
    authorization: localStorage.getItem("token")
}

export const authtenticateUser = createAsyncThunk('auth/authtenticateUser', async (userLoginInfo) => {
    try {
        const response = await postData('/auth/login', userLoginInfo);
        console.log(response)
        if (response.code === 200) {
            localStorage.setItem("token", response.token);
        }
        return response;
    } catch (error) {
        return error
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    return true;
})

export const fetchUserDetail = createAsyncThunk('auth/fetchUserDetail', async () => {
    try {
        const result = await getData('/auth/fetchuserdetails', authObj);
        return result;
    } catch (error) {
        return error;
    }
});


const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthState,
    extraReducers: builder => {
        builder.addCase(authtenticateUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(authtenticateUser.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.isAuthenticated = true;
                state.loading = false;
                state.token = localStorage.getItem('token');
                showToast('success', action.payload.message, action.payload.code);
            } else {
                showToast('error', action.payload.message, action.payload.code);
            }
        });
        builder.addCase(authtenticateUser.rejected, (state, action) => {
            localStorage.removeItem('token');
            state.loading = false;
            state.token = null;
            state.isAuthenticated = false;
        });

        //Logout
        builder.addCase(logout.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(logout.fulfilled, (state) => {
            localStorage.removeItem('token');
            state.loading = false;
            state.isAuthenticated = false;
            state.user = [];
            state.token = null;
        });
        builder.addCase(logout.rejected, (state) => {
            localStorage.removeItem('token');
            state.loading = false;
            state.isAuthenticated = false;
            state.user = [];
            state.token = null;
        });

        //fetchuserdetails
        builder.addCase(fetchUserDetail.pending, (state) => {
            state.loading = false;
        });
        builder.addCase(fetchUserDetail.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.user = action.payload.user;
                state.token = localStorage.getItem('token');
                state.isAuthenticated = true;
                state.loading = false;
            }
        });
        builder.addCase(fetchUserDetail.rejected, (state, action) => {
            state.user = [];
        })
    }
});

export default authSlice.reducer;