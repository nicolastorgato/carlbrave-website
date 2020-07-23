import NotFound from './components/NotFound'

import Home from './components/Home'
import Biografia from './components/Biografia'
import Tour from './components/Tour'
import Foto from './components/Foto'
import Video from './components/Video'

import Polaroid from './components/albums/Polaroid'
import NottiBrave from './components/albums/NottiBrave'
import NottiBraveAfter from './components/albums/NottiBraveAfter'
import NewAlbum from './components/albums/NewAlbum'

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