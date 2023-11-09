"use client"
import { useRouter } from 'next/navigation'
import useStore from "@/store/store";
import BandList from "@/components/BandList/BandList";

export default function UserPage({ params }) {
    const router = useRouter()
    const { bands, users, currentUser } = useStore((state) => state)
    const myBands = bands?.filter(band => band.members.find(member => member.id.toString() === params.userId)) || []
    const user = users.find(usr => usr.id.toString() === params.userId)
    const isCurrentUser = currentUser?.id === user?.id;

    if (!user?.id) {
        router.push('/error')
    }

    return (
        <main>
            <div className="flex flex-col mb-20">
                <div className="flex flex-row items-center">
                    <img className="rounded-full w-32 md:w-48 border-white border-4 mr-5" src={'https://placehold.co/400'} />
                    <h1>{user.name}</h1>
                </div>
                <div className="grid grid-cols-6 gap-4 rounded-md mt-5 p-2 bg-white shadow-md">
                    <div className="col-span-6 lg:col-span-4">
                        {
                            isCurrentUser ?
                                <h1>My Bands</h1> :
                                <h1>{user.name}&apos;s Bands</h1>
                        }
                        <hr />
                        <BandList bands={myBands} addNew={isCurrentUser} />
                    </div>
                    <div className="col-span-6 lg:col-span-2">
                        <h1>Personal Info</h1>
                        <hr />
                    </div>
                </div>

            </div>
        </main>
    )
}
