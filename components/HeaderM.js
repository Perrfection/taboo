import React from "react";
import Image from "next/image";

import {logout} from "../src/features/userSlice";
import {auth} from "../firebase";
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
    <div className="flex bg-[#e9ecef] pt-2 pr-3 justify-between items-center">
      <div className="opacity-100">
        <Image src="/tabooLogo.png" width={160} height={40} layout="fixed" />
      </div>
      <div>
          <button onClick={logoutOfApp}>LogOut</button>
      </div>
    </div>
  );
}

export default HeaderM;
