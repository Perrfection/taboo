import { SearchIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import SearchTitle from "./SearchTitle";
import posts from "./Feed";
import { db } from "../../firebase";

function HeaderP() {
  const [searchInput, setSearchInput] = useState([]);
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
    <div className=" jumbo1">
      <div className=" jumbo2 ">
        <a>welcome back !</a>
        <div className=" jumbo3">
          <SearchIcon className=" icon" />
          <input
            value={searchInput}
            className="search"
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="Search"
          />
        </div>
        {searchInput && (
          <div>
            <div>
              {posts.map(({ id, data: { title, pageUrl } }) => (
                <SearchTitle key={id} title={title} pageUrl={pageUrl} />
              ))}
            </div>
          </div>
        )}
        <Nav />
      </div>
    </div>
  );
}

export default HeaderP;
