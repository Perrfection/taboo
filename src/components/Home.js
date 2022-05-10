import HeaderM from "./HeaderM";
import Jumbotron from "./Jumbotron";
import PostForm from "./PostForm";
import Feed from "./Feed";
import React, { useState } from "react";
import {connect} from "react-redux";

function Home() {

  const [newPost, setNewPost] = useState(false);

  const showPost = (e) => {
    e.preventDefault();
    setNewPost(!newPost);
  };

  return !newPost ? (
    <div>
      <HeaderM />
      <Jumbotron />
      <button className="b2" onClick={showPost}>New Post</button>
      <Feed />
    </div>
  ) : (
      <form className="form">
          <PostForm className="b1"/>
      </form>
  );
}
export default (Home);
