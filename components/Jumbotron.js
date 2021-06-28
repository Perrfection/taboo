import { SearchIcon} from "@heroicons/react/solid";
import React from "react";
import Nav from "./Nav";


function HeaderP() {
    return(
        <div className="bg-white p-2 ">
            <div className="max-w-3xl m-8 justify-evenly">
                <div className="flex flex-grow justify-evenly">
                    <div className="flex flex-grow m-4 p-2 items-center rounded-full bg-gray-100">
                        <SearchIcon className="h-6 md:h-8 text-gray-600"/>
                        <input className=" ml-4 items-center bg-transparent outline-none placeholder-gray-500 text-xl md:text-2xl"
                               type="text"
                               placeholder="Search"/>
                    </div>
                </div>
                <Nav/>
            </div>
        </div>
    )
}

export default HeaderP