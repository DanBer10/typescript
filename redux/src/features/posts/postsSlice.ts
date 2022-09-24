import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  posts: [],
  status: "idle", // 'idle' / 'loading / 'succeded' / 'failed'
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state: any, action: any) {
        state.posts.push(action.payload);
      },
      prepare(title: string, content: string, authorName: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            authorName,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              sleep: 0,
            },
          },
        };
      },
    },
    reactionAdded(state: any, action) {
      const { postId, reaction } = action.payload;
      const existingPost: any = state.posts.find(
        (post: any) => post.id === postId
      );
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state: any) => state.posts.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
