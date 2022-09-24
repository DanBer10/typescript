import { useSelector } from "react-redux";
import { selectAllPosts } from "../../features/posts/postsSlice";
import PostAuthor from "./PostAuthor";
import ReactionsButton from "./ReactionsButton";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a: any, b: any) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post: any) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        <PostAuthor authorName={post.authorName} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionsButton post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
