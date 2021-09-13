import Post from "./Post";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import firebase from "firebase";
import {Button} from "react-bootstrap";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [pageUrl, pageImageUrl] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
        .orderBy('timestamp', "desc")
        .onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPosts = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      title: title,
      description: description,
      imageUrl: imageUrl,
      pageUrl: pageUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return (
    <div>
      <div>
        <h1>New Post</h1>
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" ml-4 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Title"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className=" ml-4 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Description"
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className=" ml-4 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Image"
          />
          <input
            value={pageUrl}
            onChange={(e) => setPageUrl(e.target.value)}
            className=" ml-4 items-center bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Link to Webpage"
          />
          <Button variant="primary" onClick={sendPosts}>Post</Button>
        </div>
      </div>
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
