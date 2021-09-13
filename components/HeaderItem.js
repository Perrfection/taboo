import React from "react";

function HeaderItem({ title, onClick }) {
  return <div >
    <button onClick={onClick}> {title} </button>
  </div>;
}

export default HeaderItem;
