import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const postsAdapter = createEntityAdapter({
  sortComparer: (a: any, b: any) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  count: 0,
});

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost) => {
    try {
      const response = await axios.post(POSTS_URL, initialPost);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (initialPost: any) => {
    const { id } = initialPost;
    try {
      const response = await axios.put(`${POSTS_URL}/${id}`, initialPost);
      return response.data;
    } catch (err) {
      //return err.message;
      return initialPost; // only for testing Redux!
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (initialPost: any) => {
    const { id } = initialPost;

    try {
      const response = await axios.delete(`${POSTS_URL}/${id}`);
      if (response?.status === 200) return initialPost;
      return `${response?.status}: ${response?.statusText}`;
    } catch (error: any) {
      return error.message;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reactionAdded(state: any, action: any) {
      const { postId, reaction } = action.payload;
      const existingPost = state.entities[postId];
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    increaseCount(state, action) {
      state.count = state.count + 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state: any, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state: any, action: any) => {
        state.status = "succeeded";
        // Adding date and reactions
        let min = 1;
        const loadedPosts = action.payload.map((post: any) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            sleep: 0,
          };
          return post;
        });

        // Add any fetched posts to the array
        postsAdapter.upsertMany(state, loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state: any, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state: any, action: any) => {
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          sleep: 0,
        };
        console.log(action.payload);
        postsAdapter.addOne(state, action.payload);
      })
      .addCase(updatePost.fulfilled, (state: any, action: any) => {
        if (!action.payload?.id) {
          console.log("Update could not complete");
          console.log(action.payload);
          return;
        }

        action.payload.date = new Date().toISOString();
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(deletePost.fulfilled, (state: any, action: any) => {
        if (!action.payload?.id) {
          console.log("Delete could not happen");
          console.log(action.payload);
          return;
        }
        const { id } = action.payload;
        postsAdapter.removeOne(state, id);
      });
  },
});

//getSelectors creates these selectors and we rename them with aliases using destrucuring
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state: any) => state.posts);

export const getPostsStatus = (state: any) => state.posts.status;
export const getPostsError = (state: any) => state.posts.error;
export const getCount = (state: any) => state.posts.count;

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.userId === userId)
);

export const { increaseCount, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
