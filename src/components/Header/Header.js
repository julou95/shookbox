"use client"
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/Image';

import useStore from "@/store/store";
import Icon from "@/components/Icon/Icon";

export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false)
    const searchRef = useRef()
    const {currentUser, users} = useStore(state => state)
    const userFull = users.find(usr => usr.id === currentUser.id)
    const router = useRouter()

    const closeSearch = () => {
        searchRef.current.value = ''
        setSearchOpen(false)
    }

    const search = () => {
        if (searchRef?.current?.value.length) {
            router.push(`/search?q=${searchRef?.current?.value}`)
            closeSearch()
        }
    }

    return (
        <>
            <div className="sticky top-0 py-2 shadow-md bg-slate-950 text-slate-50 z-10">
                <div className="container flex justify-between items-center w-full">
                    <Link className="flex items-center" href="/">
                        <img className="w-14 rounded-full mr-2 md:mr-5" alt="Shookbox Logo" src="/logos/logo-96.png" />
                        <h1>Shookbox</h1>
                    </Link>
                    <div className="flex flex-row">
                        <div className="mr-5" onClick={() => setSearchOpen(prev => !prev)}>
                            <Icon name="search" size={24} />
                        </div>
                        <div>
                            {
                                userFull.name
                                    ? <Link href={`/user/${userFull.id}`} className="flex flex-row ">
                                        <Icon name="user" size={24} style="mr-0 md:mr-2" />
                                        <span className="hidden md:inline">{userFull.name}</span>
                                      </Link>
                                    : <Link href="/user/login">Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                searchOpen &&
                <>
                    <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-900 z-20 opacity-75"></div>
                    <div className="fixed top-0 left-0 right-0 z-20 pt-5 pb-5 bg-white shadow-xl">
                        <div className="container">
                            <div className="flex justify-between mb-5">
                                <div className="text-2xl font-semibold">Search Bands & Artists</div>
                                <Icon name="close" size={36} invert clickAction={closeSearch} />
                            </div>
                            <form className="flex flex-row" onSubmit={search}>
                                <input type="text" ref={searchRef} placeholder="Search anything..." className="rounded-l-md" />
                                <button className="searchButton flex flex-row items-center text-lg bg-slate-900 rounded-r-md text-white py-3 px-4" onClick={search}>
                                    <Icon name="search" size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            }
        </>
    )
}