import { useSelector, useDispatch } from "react-redux";

import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../../features/posts/postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
  const dispatch = useDispatch<any>();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      const timer = setTimeout(() => {
        dispatch(fetchPosts());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a: any, b: any) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post: any, key: any) => (
      <PostsExcerpt key={key} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
