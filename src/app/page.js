"use client"
import Link from 'next/link'
import useStore from '@/store/store.js';
import BandList from '@/components/BandList/BandList'

export default function Home() {
  const { bands, currentUser } = useStore((state) => state)
  const myBands = bands?.filter(band => band.members.find(member => member.id === currentUser.id)) || []

  return (
    <main>
    {
        currentUser.id &&
        <div className="mb-10">
            <div className="flex flex-row justify-between items-center md:text-lg">
                <h1>My Bands </h1>
                <Link className="underline-offset-8 hover:underline" href={`/user/${currentUser.id}`}>
                    Show All
                </Link>
            </div>
            <hr />
            <BandList bands={myBands} />
        </div>
    }
      <div className="flex flex-row justify-between items-center md:text-lg">
          <h1>New Bands </h1>
          <Link className="underline-offset-8 hover:underline" href="/bands">
              Show All
          </Link>
      </div>
      <hr />
      <BandList bands={bands.slice(-4)} />
    </main>
  )
}
