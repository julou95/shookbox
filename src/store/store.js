import { create } from 'zustand'

const useStore = create((set) => ({
    user: {},
    bands: [
        {
            bandId: 1,
            name: 'Lord Lawrence & the Lard Guitar',
            imgUrl: '',
            description: 'test description',
        },
        {
            bandId: 2,
            name: 'Lord Lawrence & the Lard Guitar',
            imgUrl: '',
            description: 'test description',
        },
        {
            bandId: 3,
            name: 'Lord Lawrence & the Lard Guitar',
            imgUrl: '',
            description: 'test description',
        },
        {
            bandId: 4,
            name: 'Lord Lawrence & the Lard Guitar',
            imgUrl: '',
            description: 'test description',
        },
        {
            bandId: 6,
            name: 'Lord Lawrence & the Lard Guitar',
            imgUrl: '',
            description: 'test description',
        },
        {
            bandId: 7,
            name: 'Lord Lawrence & the Lard Guitar',
            imgUrl: '',
            description: 'test description',
        },
    ],
}))