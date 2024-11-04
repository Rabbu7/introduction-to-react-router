import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  const userStyle={
     border: '2px solid yellow',
     padding: '5px',
     borderRadius: '20px'
}
  return (
    <div >
      <h2>Posts: {posts.length}</h2>
      <div className="users">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
