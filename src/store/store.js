import { create } from 'zustand'

const useStore = create((set) => ({
    currentUser: {
        id: 1,
        accessToken: '1234',
        refreshToken: '2345',
        name: 'Louis'
    },
    users: [
        { id: 1, role: 1, name: 'Louis', imgUrl: 'https://placehold.co/400x400' },
        { id: 2, role: 2, name: 'Chrigu', imgUrl: 'https://placehold.co/400x400' },
        { id: 3, role: 2, name: 'Bello', imgUrl: 'https://placehold.co/400x400' },
        { id: 4, role: 2, name: 'Döbi', imgUrl: 'https://placehold.co/400x400' },
        { id: 5, role: 1, name: 'Kuno', imgUrl: 'https://placehold.co/400x400' },
        { id: 6, role: 1, name: 'Mike', imgUrl: 'https://placehold.co/400x400' },
        { id: 7, role: 1, name: 'Matt', imgUrl: 'https://placehold.co/400x400' },
        { id: 8, role: 2, name: 'Löru', imgUrl: 'https://placehold.co/400x400' },
        { id: 9, role: 2, name: 'Stampfli', imgUrl: 'https://placehold.co/400x400' },
    ],
    bands: [
        {
            bandId: 1,
            name: 'Lord Lawrence & the Lard Guitar',
            imgUrl: '/lllg_logo.png',
            description: 'test description',
            members: [
                { id: 1, role: 1, name: 'Louis', imgUrl: 'https://placehold.co/400x400' },
                { id: 2, role: 2, name: 'Chrigu', imgUrl: 'https://placehold.co/400x400' },
                { id: 3, role: 2, name: 'Bello', imgUrl: 'https://placehold.co/400x400' },
                { id: 4, role: 2, name: 'Döbi', imgUrl: 'https://placehold.co/400x400' },
            ]
        },
        {
            bandId: 2,
            name: 'Side Chick',
            imgUrl: 'https://ih1.redbubble.net/image.1750240666.0230/mo,small,flatlay,product_square,600x600.jpg',
            description: 'test description',
            members: [
                { id: 1, role: 1, name: 'Louis', imgUrl: 'https://placehold.co/400x400' },
                { id: 2, role: 2, name: 'Chrigu', imgUrl: 'https://placehold.co/400x400' },
                { id: 3, role: 2, name: 'Yeni', imgUrl: 'https://placehold.co/400x400' },
                { id: 4, role: 2, name: 'Döbi', imgUrl: 'https://placehold.co/400x400' },
            ]
        },
        {
            bandId: 3,
            name: 'Züri West',
            imgUrl: 'https://media.hitparade.ch/cover/800/zueri_west-zueri_west_a.jpg',
            description: 'test description',
            members: [
                { id: 5, role: 1, name: 'Kuno', imgUrl: 'https://placehold.co/400x400' },
                { id: 2, role: 2, name: 'Chrigu', imgUrl: 'https://placehold.co/400x400' },
                { id: 3, role: 2, name: 'Bello', imgUrl: 'https://placehold.co/400x400' },
                { id: 4, role: 2, name: 'Döbi', imgUrl: 'https://placehold.co/400x400' },
            ]
        },
        {
            bandId: 4,
            name: 'Royal Blood',
            imgUrl: 'https://m.media-amazon.com/images/I/812Y4v68TYL._UF1000,1000_QL80_.jpg',
            description: 'test description',
            members: [
                { id: 6, role: 1, name: 'Mike', imgUrl: 'https://placehold.co/400x400' },
                { id: 2, role: 2, name: 'Chrigu', imgUrl: 'https://placehold.co/400x400' },
            ]
        },
        {
            bandId: 6,
            name: 'Muse',
            imgUrl: 'https://www.laut.de/Muse/muse-220512.jpg',
            description: 'test description',
            members: [
                { id: 7, role: 1, name: 'Matt', imgUrl: 'https://placehold.co/400x400' },
                { id: 2, role: 2, name: 'Chrigu', imgUrl: 'https://placehold.co/400x400' },
                { id: 3, role: 2, name: 'Bello', imgUrl: 'https://placehold.co/400x400' },
                { id: 4, role: 2, name: 'Döbi', imgUrl: 'https://placehold.co/400x400' },
            ]
        },
        {
            bandId: 7,
            name: 'No Valid Name',
            imgUrl: '/nvn_logo.jpeg',
            description: 'test description',
            members: [
                { id: 1, role: 1, name: 'Louis', imgUrl: 'https://placehold.co/400x400' },
                { id: 2, role: 2, name: 'Chrigu', imgUrl: 'https://placehold.co/400x400' },
                { id: 8, role: 2, name: 'Löru', imgUrl: 'https://placehold.co/400x400' },
                { id: 9, role: 2, name: 'Stampfli', imgUrl: 'https://placehold.co/400x400' },
            ]
        },
    ],
}))

export default useStore;