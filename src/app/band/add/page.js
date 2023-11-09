"use client"

import useStore from '@/store/store.js'
import BandList from "@/components/BandList/BandList";
export default function AddBandPage() {
    const {currentUser, bands} = useStore((state) => state)
    return (
        <main>
            <h2>Add Band</h2>
        </main>
    )
}
