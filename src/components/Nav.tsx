import Link from "next/link";

export default function Nav () {
    return (
        <nav>
            <ul className="flex flex-row gap-8 mt-2.5 text-lg">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/music">Music</Link>
                </li>
                <li>
                    <Link href="/games">Games</Link>
                </li>
            </ul>
        </nav>
    );
}