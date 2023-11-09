"use client"
import Link from "next/link";
import Icon from "@/components/Icon/Icon";

export default function BandList({ bands = [], addNew = false, title }) {

    return (
        <>
            {
                title && <><h1>{title}</h1><hr /></>
            }
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {
                bands.map((band, index) => (
                    <Link href={`/band/${band.bandId}`} key={band.bandId}>
                        <div className="relative flex flex-col border-2 border-slate-900 bg-slate-900 transition-all rounded-lg hover:shadow-lg">
                            <div className="imgWrapper rounded-t-md">
                                <div className="bandImg rounded-t-md bg-no-repeat bg-cover transition-all" style={{ backgroundImage: `url('${band.imgUrl}')` }}></div>
                            </div>
                            <div className="absolute bottom-0 w-full bg-gradient-to-t from-slate-900 text-white p-5 text-xl font-semibold">{band.name}</div>
                        </div>
                    </Link>
                ))
            }
            {
                addNew &&
                <Link href="/band/add" className="flex flex-col justify-center items-center rounded-md bg-slate-400 transition-all hover:bg-red-900 text-white py-2 col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-4">
                    <div className="flex flex-row justify-center items-center text-xl font-semibold">
                        <Icon name="addCircle" size={48} style="mr-3" />
                        ADD NEW BAND
                    </div>
                </Link>
            }
        </div>
        </>
    )
}
