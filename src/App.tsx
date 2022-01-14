import { useState } from "react";
import "./App.css";
import PostList from "./PostList";
import CommentDisplay from "./CommentDisplay";

function App() {
  const [selectedPostId, setSelectedPostId] = useState<number | undefined>(
    undefined
  );
  return (
    <div className="app-wrapper">
      <PostList setSelectedPost={setSelectedPostId}></PostList>
      {selectedPostId && (
        <CommentDisplay postId={selectedPostId}></CommentDisplay>
      )}
    </div>
  );
}

export default App;
