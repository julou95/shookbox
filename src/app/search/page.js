"use client"

import useStore from '@/store/store.js'
import BandList from "@/components/BandList/BandList";
export default function SearchPage() {
    const {user, bands} = useStore((state) => state)
    return (
        <main>
            <div className="flex flex-col mb-20">
                <div className="flex flex-col rounded-md p-2 mt-4 w-full bg-white" >
                    <h2>Search for: <b>search term</b></h2>
                    <BandList bands={bands} />
                </div>
            </div>
        </main>
    )
}
