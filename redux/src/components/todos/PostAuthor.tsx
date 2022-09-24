import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice";

const PostAuthor = ({ authorName }: any) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user: any) => user.id === authorName);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;