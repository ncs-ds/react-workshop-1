import { FC, useEffect, useState } from "react";

export interface PostListProps {
  setSelectedPost: (postId: number) => void;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostList: FC<PostListProps> = ({ setSelectedPost }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setPosts(json);
    }
    getPosts();
  }, []);

  return (
    <div className="postlist-wrapper">
      {posts &&
        posts.map((post: Post) => (
          <div
            key={post.id}
            className="post-wrapper"
            onClick={() => setSelectedPost(post.id)}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default PostList;
