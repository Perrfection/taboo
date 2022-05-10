import React from "react";

function SearchTitle({ id, title, pageUrl }) {
  return (
    <div>
      <a href={pageUrl} className="postLink">
        {title} {id}
      </a>
    </div>
  );
}

export default SearchTitle;
