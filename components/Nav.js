import React from "react";
import NavItems from "./NavItems.js";

function Nav() {
  return (
    <div className="flex flex-grow justify-evenly">
      <div className="grid grid-cols-2 sm:grid-cols-4 p-3 object-center">
        <NavItems
          title="Sexual Health"
          Description="Personal Hygiene, Anatomy, Contraception, Sti's and Std's"
        />
        <NavItems
          title="Self-Awareness"
          Description="Identity, Assertiveness, Self-Refection, Counseling and Therapy "
        />
        <NavItems
          title="Social-Awareness"
          Description="Body Language, Emotional Intelligence, Mindfulness and Consideration"
        />
        <NavItems
          title="Communication"
          Description="Conflict Solving, Active Listening, Vulnerability"
        />
        <NavItems
          title="Relationships"
          Description="Platonic, Romantic and Social"
        />
        <NavItems
          title="Movies and series"
          Description="Cinematic experiences that explore sexuality"
        />
        <NavItems
          title="Helpful Resources"
          Description="Planned Parenthood, Amaze, 1in6 and so much more"
        />
        <NavItems
          title="Ask Professionals"
          Description="Get your questions answered in real time!"
        />
      </div>
    </div>
  );
}

export default Nav;
