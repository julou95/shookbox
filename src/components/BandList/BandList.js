"use client"
import { useEffect, useState, useCallback, useRef } from 'react';
import Link from "next/link";
import Icon from "@/components/Icon/Icon";

export default function BandList({ bands = [], addNew = false, title, full = false }) {
    const [isStart, setIsStart] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [scrollY, setScrollY] = useState()
    const scrollRef = useRef()

    useEffect(() => {
        //add eventlistener to window
        scrollRef.current.addEventListener("scroll", onScrollNew, { passive: true });
        // remove event on unmount to prevent a memory leak with the cleanup
    }, []);

    const onScrollNew = () => {
        setIsStart(scrollRef.current.scrollLeft <= 0)
        setIsEnd(scrollRef.current.scrollLeft === (scrollRef.current.scrollWidth - scrollRef.current.offsetWidth))
    }

    return (
        <>
            {
                title && <><h1>{title}</h1><hr /></>
            }
        <div className="relative py-2">
            {
                !full &&
                <>
                    <div className={`absolute ${isEnd ? 'opacity-0' : 'opacity-100'} duration-200 transition-all z-10 right-0 top-0 h-full w-4 bg-gradient-to-l from-gray-50`}></div>
                    <div className={`absolute ${isStart ? 'opacity-0' : 'opacity-100'} duration-200 transition-all z-10 left-0 top-0 h-full w-4 bg-gradient-to-r from-gray-50`}></div>
                </>
            }


            <div ref={scrollRef} className={`${full ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4' : 'flex overflow-x-auto flex-nowrap snap-x snap-mandatory'}`}>
                {
                    bands.map((band, index) => (
                        <Link className={`relative ${full ? '' : 'flex flex-col flex-shrink-0 mr-5 w-60 md:w-72 snap-start last:mr-0'} border-2 border-slate-900 bg-slate-900 transition-all rounded-lg hover:shadow-lg`} href={`/band/${band.bandId}`} key={band.bandId}>
                            <>
                                <div className="imgWrapper rounded-t-md">
                                    <div className="bandImg rounded-t-md bg-no-repeat bg-cover bg-center transition-all" style={{ backgroundImage: `url('${band.imgUrl}')` }}></div>
                                </div>
                                <div className="absolute bottom-0 w-full bg-gradient-to-t from-slate-900 text-white p-5 text-xl font-semibold">{band.name}</div>
                            </>
                        </Link>
                    ))
                }
                {
                    addNew &&
                    <Link href="/band/add" className="flex flex-col flex-shrink-0 w-60 md:w-72 snap-start justify-center items-center rounded-md bg-slate-400 transition-all hover:bg-red-900 text-white py-2 col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-4">
                        <div className="flex flex-row justify-center items-center text-xl font-semibold">
                            <Icon name="addCircle" size={48} style="mr-3" />
                            ADD NEW BAND
                        </div>
                    </Link>
                }
            </div>
        </div>
        </>
    )
}
