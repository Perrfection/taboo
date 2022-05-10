import Post from "./Post";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="feed">
      {posts.map(
        ({
          id,
          data: { title, description, imageUrl, pageUrl, timestamp },
        }) => (
          <Post
            key={id}
            title={title}
            description={description}
            imageUrl={imageUrl}
            pageUrl={pageUrl}
            timestamp={timestamp}
          />
        )
      )}
    </div>
  );
}
