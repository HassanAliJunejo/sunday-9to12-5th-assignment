import Link from "next/link";

export default function Header() {
    return(
            <div className="header p-0.5 h-[60px] bg-teal-500 box-border">
                <ul className="headerLinks text-lg m-4 flex justify-center items-center gap-[10%]">
                    <Link href="/">
                    <li>Home</li>
                    </Link>
                    <Link href={"/portfolio"}>
                    <li>Portfolio</li>
                    </Link>
                    <Link href={"/Contact"}>
                    <li>Contact</li>
                    </Link>
                    <Link href={"/About-us"}>
                    <li>About us</li>
                    </Link>
                </ul>
            </div>
    )
}