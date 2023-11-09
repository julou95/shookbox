"use client"
import useStore from '@/store/store.js';
import BandList from '@/components/BandList/BandList'

export default function BandsPage() {
    const { bands, currentUser } = useStore((state) => state)

    return (
        <main className="">
            <h1>All Bands</h1>
            <hr />
            <BandList bands={bands} />
        </main>
    )
}

