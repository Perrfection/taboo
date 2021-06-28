import React from "react";
import Image from "next/image";


function HeaderM() {
    return(
        <div className="flex bg-[#e9ecef] pt-2 pr-3 justify-between items-center">
            <div className="opacity-100">
                <Image
                src="/tabooLogo.png"
                width={160}
                height={40}
                layout="fixed"
                />
            </div>
            <div>
                <p>SignUp</p>
            </div>
        </div>
    )
}

export default HeaderM