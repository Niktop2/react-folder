import { useContext } from "react";
import Postt from "./Postt";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Postt key={post.id} post={post}/>
      ))}
    </>
  );
};

export default PostList;
