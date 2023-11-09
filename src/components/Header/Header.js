import Link from 'next/link'
export default function Header() {
    return (
        <div className="sticky top-0 pt-5 pb-5 shadow-md bg-slate-950 text-slate-50">
            <div className="container flex justify-between w-full">
                <Link href="/">LOGO & Title</Link>
                <div className="flex flex-row">
                    <div className="pr-10">
                        <Link href="/login">Login</Link>
                    </div>
                    <div>
                        Menu
                    </div>
                </div>
            </div>
        </div>
    )
}