"use client"
import { roboto } from "@/style/fonts"
import { ReactNode, useState } from "react"


type HamburgButtonProps = {
    children?: ReactNode
}
export default function HamburgButton({ children }:
    HamburgButtonProps) {
    const [status, setStatus] = useState(false)

    const menuStatus = {
        open: "before:translate-y-0 before:w-[15px] after:w-[15px] after:translate-y-0 before:rotate-45 after:-rotate-45",
        close: "w-[15px] h-[2px] before:translate-y-[5px] after:translate-y-[-5px]"
    }

    return <button
        onClick={() => setStatus(!status)}
        className={`${roboto.variable} flex justify-center items-center gap-[0px] h-[30px] text-white bg-transparent outline-none outline-offset-[5px] border-0 cursor-pointer  hover:outline-2 hover:outline-white `} >
        <div className="w-[30px] h-[30px] flex justify-center items-center ">
            <span className={`w-[15px] bg-white relative transition-all duration-100 before:transition-all origin-center before:origin-center after:origin-center before:duration-100 after:transition-all after:duration-100  before:bg-inherit before:content-[''] before:w-full before:h-[2px] before:absolute before:left-0 before:top-0 after:bg-inherit after:content-[''] after:w-full after:absolute after:left-0 after:top-0 after:h-[2px] before:translate-y-[5px] after:translate-y-[-5px] ${status ? menuStatus.open : menuStatus.close}`} />
        </div>
        <span className="font-roboto ">MENU</span>
    </button>
}