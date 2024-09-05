import React from "react";
import Link from "next/link";

function Navbar() {
    return (
        <div className="flex justify-center items-center w-full h-14 text-xl bg-white border-b-2 border-black ">
            <Link href="/">
                <h1 className="text-black text-2xl myfont">BALAJI GIFT PALACE</h1>
            </Link>
        </div>
    );
}

export default Navbar;
