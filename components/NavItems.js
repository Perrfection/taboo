import React from "react";

function NavItems({ title, Description }) {
  return (
    <div className=" text-sm flex p-1 m-1 items-center rounded-full bg-gray-100">
      <p>{title}</p>
    </div>
  );
}

export default NavItems;
