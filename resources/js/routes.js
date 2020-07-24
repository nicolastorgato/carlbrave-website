import NotFound from './components/NotFound'
import Canzone from './components/songs/Canzone.vue'


//MAIN
import Home from './components/Home'
import Biografia from './components/Biografia'
import Tour from './components/Tour'
import Foto from './components/Foto'
import Video from './components/Video'



//ALBUMS
import Polaroid from './components/albums/Polaroid'

    import SoloGuai from './components/songs/SoloGuai'

import NottiBrave from './components/albums/NottiBrave'

import NottiBraveAfter from './components/albums/NottiBraveAfter'

import NewAlbum from './components/albums/NewAlbum'






// LE POLAROID
import LePolaroid from './components/LePolaroid'


export default {

    mode: 'history',

    linkActiveClass: 'font-bold',

    routes: [

        {
            path: '*',
            component: NotFound
        },




        {
            path: '/',
            component: Home
        },

        {
            path: '/biografia',
            component: Biografia
        },

        {
            path: '/tour',
            component: Tour
        },

        {
            path: '/foto',
            component: Foto
        },

        {
            path: '/video',
            component: Video
        },

        {
            path: '/video',
            component: Video
        },











        {
            path: '/polaroid',
            component: Polaroid
        },

        {
            path: '/polaroid/solo-guai',
            component: SoloGuai
        },

        {
            path: '/notti-brave',
            component: NottiBrave
        },

        {
            path: '/notti-brave-after',
            component: NottiBraveAfter
        },

        {
            path: '/nuovo-album',
            component: NewAlbum
        },












        {
            path: '/le-polaroid',
            component: LePolaroid
        },
    ]
};