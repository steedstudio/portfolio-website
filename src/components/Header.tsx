import Nav from "./Nav";
import Image from "next/image";

export default function Header () {
    return (
        <header className="flex flex-col items-center bg-[#222] text-[#fff]">
            <div className="flex flex-row justify-center items-center gap-4">
                <h1 className="text-[50px]">Steed</h1>
                <Image
                    className="rounded-full"
                    src="/images/headshot.jpg"
                    alt="My headshot"
                    width={115.417}
                    height={120}
                />
            </div>
            <Nav />
        </header>
    )
}