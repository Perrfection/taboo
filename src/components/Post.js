import React from "react";
import { db } from "../../firebase";

function Post( {id, title, description, imageUrl, pageUrl }) {
  const deletePosts = (e) => {
    e.preventDefault();
    db.collection("posts").doc(id).delete().then();
  };

  return (
    <div>
      <div>
        <div></div>
        <article className=" postArticle">
          <img
            src={imageUrl}
            alt=""
            className="postImages"
          />
          <a href={pageUrl} className="postLink">
            {title} {id}
          </a>
          <div>
            <h2>{description}</h2>
          </div>
          <div>
            <button className="b1" onClick={deletePosts}>Take Quiz </button>
            <button className="b1" onClick={deletePosts}>Delete </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Post;
