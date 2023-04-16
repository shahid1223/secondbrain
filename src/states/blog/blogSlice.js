import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData, deleteData } from '../../utils/api';
import showToast from "../../utils/ShowAlert";
import axios from 'axios';
import config from "../../utils/constants/config";

const initialBlogState = {
    loading: true,
    allBlogs: [],
    selectedBlog: [],
    errors: []
};

let authObj = {
    authorization: localStorage.getItem("token")
}

export const createBlog = createAsyncThunk('blog/createBlog', async ({ file, question, draft, discription }) => {
    try {
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('sortDiscription', discription);
        formdata.append('question', question);
        formdata.append('draft', draft);

        const response = await axios.post(config.baseUrl + '/blog', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': localStorage.getItem("token")
            }
        });
        return response;
    } catch (error) {
        return error
    }
});

export const updateBlog = createAsyncThunk('blog/updateBlog', async ({ file, question, draft, discription, id }) => {
    try {
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append('sortDiscription', discription);
        formdata.append('question', question);
        formdata.append('draft', draft);

        const response = await axios.patch(config.baseUrl + `/blog/blog/${id}`, formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': localStorage.getItem("token")
            }
        });
        return response;
    } catch (error) {
        return error
    }
});


export const fetchAllBlogs = createAsyncThunk('blog/fetchAllBlogs', async () => {
    try {
        const result = await getData('/blog');
        return result;
    } catch (error) {
        return error;
    }
});

export const fetchSingleBlogById = createAsyncThunk('blog/fetchSingleBlogById', async (id) => {
    try {
        const result = await getData(`/blog/blog/${id}`);
        return result;
    } catch (error) {
        return error;
    }
})
export const deleteBlogById = createAsyncThunk('blog/deleteBlogById', async (id, { dispatch }) => {
    try {
        const result = await deleteData(`/blog/blog/${id}`, authObj);
        dispatch(fetchAllBlogs());
        return result;
    } catch (error) {
        return error;
    }
})


const blogSlice = createSlice({
    name: "blog",
    initialState: initialBlogState,
    extraReducers: builder => {
        //create blog
        builder.addCase(createBlog.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(createBlog.fulfilled, (state, action) => {
            if (action.payload.data.code === 200) {
                state.selectedBlog = [];
                showToast('success', action.payload.data.message, action.payload.data.code);
            } else {
                showToast('error', action.payload.data.message, action.payload.data.code);
            }
        });
        builder.addCase(createBlog.rejected, (state, action) => {
            state.loading = false;
        });

        //update blog
        builder.addCase(updateBlog.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateBlog.fulfilled, (state, action) => {
            if (action.payload.data.code === 200) {
                state.selectedBlog = [];
                showToast('success', action.payload.data.message, action.payload.data.code);
            } else {
                showToast('error', action.payload.data.message, action.payload.data.code);
            }
        });
        builder.addCase(updateBlog.rejected, (state, action) => {
            state.loading = false;
        });

        //fetchblogdetails
        builder.addCase(fetchAllBlogs.pending, (state) => {
            state.loading = true;
            state.selectedBlog = [];
            state.selectedBlog = {};
        });
        builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.allBlogs = action.payload.allBlogs;
                state.loading = false;
                state.selectedBlog = [];
                state.selectedBlog = {};
            }
        })
        builder.addCase(fetchAllBlogs.rejected, (state, action) => {
            state.allBlogs = [];
            state.loading = false;
            state.selectedBlog = [];
            state.selectedBlog = {};
        })


        //fetchblogdetailsbyId
        builder.addCase(fetchSingleBlogById.pending, (state) => {
            state.loading = true;
            state.selectedBlog = [];
        });
        builder.addCase(fetchSingleBlogById.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.loading = false;
                state.selectedBlog = action.payload.findBlogById
            }
        });
        builder.addCase(fetchSingleBlogById.rejected, (state, action) => {
            state.loading = false;
        });

        //delete blog
        builder.addCase(deleteBlogById.pending, (state) => {
            state.loading = true;
            state.selectedBlog = [];
        });
        builder.addCase(deleteBlogById.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                showToast('success', action.payload.message, action.payload.code);
            } else {
                showToast('error', action.payload.message, action.payload.code);
            }
        });
        builder.addCase(deleteBlogById.rejected, (state, action) => {
            state.loading = false;
        });
    }
});

export default blogSlice.reducer;