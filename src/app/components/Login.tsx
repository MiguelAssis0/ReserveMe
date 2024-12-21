import Link from "next/link";

type Props = {
    text: string
}

export default function BtnLogin({text}: Props){
    return(
       <Link href="/login" className="btn btn-primary text-white bg-red-400 py-2.5 px-4 rounded-xl">{text}</Link>
    )
}