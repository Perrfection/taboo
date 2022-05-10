import React from "react";
import Image from "next/image";

import {logout} from "../features/userSlice";
import {auth} from "../../firebase";
import {useDispatch} from "react-redux";

function HeaderM() {

    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut().then(() => {
        }).catch((error) => {
    });

    };

  return (
    <div className="header">
      <div className="header2">
        <Image src="/tabooLogo.png" alt="Taboo" width={160} height={40} layout="fixed" />
      </div>
      <div>
          <button className="b2-square" onClick={logoutOfApp}>LogOut</button>
      </div>
    </div>
  );
}

export default HeaderM;
