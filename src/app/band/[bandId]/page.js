"use client"
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import useStore from "@/store/store";
import Icon from '@/components/Icon/Icon'
export default function BandPage({ params }) {
    const router = useRouter()
    const currentUser = useStore(state => state.currentUser)
    const band = useStore(state => state.bands).find(band => band.bandId.toString() === params.bandId)
    if (!band) {
        router.push('/error')
        return <></>
    }

    const isMember = !!band.members.filter(member => member.id === currentUser.id).length

    return (
        <main className="">
            <div className="w-full h-72 rounded-t-lg bg-red-900 flex items-end bg-cover bg-center bg-no-repeat shadow-xl" style={{ backgroundImage: `url('${band.imgUrl}')`}}>
                <div className="flex items-center w-full pt-20 pb-5 px-5 text-2xl text-white bg-gradient-to-t from-slate-900">
                    <div className="rounded-full shrink-0 w-24 h-24 md:w-32 md:h-32 border-white border-4 mr-5 bg-cover bg-center" style={{ backgroundImage: `url('${band.imgUrl}')` }}></div>
                    <h1>{band.name}</h1>
                </div>
            </div>
            <div className="grid grid-cols-6 bg-white rounded-b-lg shadow-lg">
                <div className="col-span-6 lg:col-span-4 p-5">
                    <h1>Songs</h1>
                    <hr />
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between items-center mb-1 p-1 pr-5 rounded-lg bg-gray-50 hover:bg-slate-100 hover:cursor-pointer">
                            <div className="flex flex-row items-center">
                                <div className="flex justify-center items-center rounded-md h-10 w-10 bg-slate-900 mr-5">
                                    <Icon name="play" size={35} />
                                </div>
                                Title of Song
                            </div>
                            <div>3:33</div>
                        </div>
                        <div className="flex flex-row justify-between items-center mb-1 p-1 pr-5 rounded-lg bg-gray-50 hover:bg-slate-100 hover:cursor-pointer">
                            <div className="flex flex-row items-center">
                                <div className="flex justify-center items-center rounded-md h-10 w-10 bg-slate-900 mr-5">
                                    <Icon name="play" size={35} />
                                </div>
                                Title of Song
                            </div>
                            <div>3:33</div>
                        </div>
                        <div className="flex flex-row justify-between items-center mb-1 p-1 pr-5 rounded-lg bg-gray-50 hover:bg-slate-100 hover:cursor-pointer">
                            <div className="flex flex-row items-center">
                                <div className="flex justify-center items-center rounded-md h-10 w-10 bg-slate-900 mr-5">
                                    <Icon name="play" size={35} />
                                </div>
                                Title of Song
                            </div>
                            <div>3:33</div>
                        </div>
                    </div>
                    {
                        isMember &&
                            <div>Add Song</div>
                    }
                </div>
                <div className="col-span-6 lg:col-span-2 p-5">
                    <h1>Info</h1>
                    <hr />
                    <div className="flex mb-2"><Icon name="note" size={24} invert style="mr-2" />{band.genres?.join(', ') || '-'}</div>
                    <div className="flex mb-2"><Icon name="location" size={24} invert style="mr-2" />{band.location || '-'}</div>
                    <div className="flex mb-2"><Icon name="date" size={24} invert style="mr-2" />{band.foundingDate || '-'}</div>
                    <div className="flex mb-2"><Icon name="website" size={24} invert style="mr-2" />{band.website ? <a className="underline" target="_blank" href={band.website}>{band.website?.split('www.')[1]}</a> : '-'}</div>
                    {
                        band.members.length &&
                        <div className="mt-10">
                            <h1>Members</h1>
                            <hr />
                            {
                                band.members.map((member) => (
                                    <Link href={`/user/${member.id}`} className="flex items-center mb-2 hover:underline hover:bg-slate-100 hover:cursor-pointer rounded-full" key={member.id}>
                                        <img src={member.imgUrl} className="h-10 w-10 border-white border-2 rounded-full mr-4" /> {member.name}
                                    </Link>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </main>
    )
}
