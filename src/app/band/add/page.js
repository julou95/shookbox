"use client"
import { useState, useRef } from "react";
import useStore from '@/store/store.js'
import Icon from "@/components/Icon/Icon";

export default function AddBandPage() {
    const nameRef = useRef();
    const [profileImage, setProfileImage] = useState(null);
    const [members, setMembers] = useState([]);
    const {currentUser, bands} = useStore((state) => state)

    const imgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImage(URL.createObjectURL(e.target.files[0]));
        }
    }
    return (
        <main>
            <h1>Add Band</h1>
            <hr />
            <div className="flex flex-row items-center mb-5">
                <div className="w-36 h-36 shrink-0 rounded-full border-white border-4 flex justify-center items-center bg-gray-200 mr-5 bg-cover bg-center shadow-md" style={{ backgroundImage: `url(${profileImage})` }}>
                    {!profileImage && <Icon name="image" invert /> }
                </div>
                <label for="fileUpload" className="px-5 py-2 bg-slate-900 rounded-md text-white">
                    Upload Image
                </label>
                <input id="fileUpload" type="file" onChange={imgChange} className="hidden" />
            </div>
            <div>
                <label>
                    Bandname: <b className="text-red-600">*</b>
                </label>
                <input type="text" className="rounded-md mb-5" ref={nameRef}/>

                <label>
                    Genre: <span className="opacity-50">(eg: &quot;rock, alternative, progressive...&quot;)</span>
                </label>
                <input type="text" className="rounded-md mb-5" ref={nameRef}/>

                <label>
                    Founding date:
                </label>
                <input type="text" className="rounded-md mb-5" ref={nameRef}/>

                <label>
                    Located in:
                </label>
                <input type="text" className="rounded-md mb-5" ref={nameRef}/>

                <label>
                    Website:
                </label>
                <input type="text" className="rounded-md mb-5" ref={nameRef}/>

                <h1>Members</h1>
                <hr/>
                <div>
                    Add Member
                </div>
                {
                    members.map(member => (
                        <div key={member.name}>{member.name}</div>
                    ))
                }
            </div>
        </main>
    )
}
