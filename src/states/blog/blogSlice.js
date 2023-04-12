import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData, getData, deleteData } from '../../utils/api';
import showToast from "../../utils/ShowAlert";
import { useDispatch } from "react-redux";

const initialBlogState = {
    loading: true,
    allBlogs: [],
    selectedBlog: [],
    errors: []
};

let authObj = {
    authorization: localStorage.getItem("token")
}

export const createBlog = createAsyncThunk('blog/createBlog', async (blog) => {
    try {
        const {text , question, discription} = blog;
        console.log(blog)
        let body = {
            draft: text,
            question:question,
            sortDiscription:discription
        }
        const response = await postData('/blog', body, authObj);
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
export const deleteBlogById = createAsyncThunk('blog/deleteBlogById', async (id, {dispatch}) => {
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
            if (action.payload.code === 200) {
                showToast('success', action.payload.message, action.payload.code);
            } else {
                showToast('error', action.payload.message, action.payload.code);
            }
        });
        builder.addCase(createBlog.rejected, (state, action) => {
            state.loading = false;
        });

        //fetchblogdetails
        builder.addCase(fetchAllBlogs.pending, (state) => {
            state.loading = true;
            state.selectedBlog = [];
        });
        builder.addCase(fetchAllBlogs.fulfilled, (state, action) => {
            if (action.payload.code === 200) {
                state.allBlogs = action.payload.allBlogs;
                state.loading = false;
                state.selectedBlog = [];
            }
        })
        builder.addCase(fetchAllBlogs.rejected, (state, action) => {
            state.allBlogs = [];
            state.loading = false;
            state.selectedBlog = [];
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