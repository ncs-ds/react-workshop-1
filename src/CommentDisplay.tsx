import { useEffect, FC, useState } from "react";
import internal from "stream";

export interface CommentDisplayProps {
  postId: number;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  body: string;
  email: string;
}

const CommentDisplay: FC<CommentDisplayProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    async function getPostComments() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/post/${postId}/comments`
      );
      const json: Comment[] = await response.json();
      setComments(json);
    }
    getPostComments();
  }, [postId]);

  return (
    <div className="comment-wrapper">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="comment">
            <h3>{comment.body}</h3>
            <p>{comment.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentDisplay;
