import React from "react";
import Link from "next/link";
import Login from "./Login";



const Navigation = () => {
    return (
        <nav>
            <ul className="nav">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/About">About</Link>
                </li>
                <li>
                    <Link href="/Contact">Contact</Link>

                </li>

                <Login></Login>
            </ul>
            
        </nav>
    );
}
export default Navigation;