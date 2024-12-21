import React from "react"
import BtnLogin from "./Login"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-2 px-7 bg-orange-200">
            <div>
                <h1 className="text-3xl font-bold text-orange-700 ">Reserve.me</h1>
            </div>
            <div>
                <BtnLogin text="Login" />
            </div>
        </nav>
    )
}