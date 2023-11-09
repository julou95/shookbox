"use client"
import { useSearchParams } from 'next/navigation'
import useStore from '@/store/store.js'
import BandList from '@/components/BandList/BandList';
export default function SearchPage() {
    const {user, bands} = useStore((state) => state)
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get('q') || ''

    const filtered = bands.filter(band => band?.name?.toLowerCase()?.includes(searchTerm))
    return (
        <main>
            <h2>Search for: <b>{searchTerm}</b></h2>
            <div className="flex flex-col mb-20">
                <div className="flex flex-col mt-4 w-full" >
                    {
                        filtered.length ?
                            <BandList bands={filtered} title="Bands" />
                            : <div>No Bands Found</div>
                    }
                </div>
            </div>
        </main>
    )
}
