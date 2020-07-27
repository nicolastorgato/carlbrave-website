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

        import SoloGuai from './components/songs/polaroid/SoloGuai'
        import SempreInDue from './components/songs/polaroid/SempreInDue'
        import PolaroidSong from './components/songs/polaroid/PolaroidSong'
        import LuckyStrike from './components/songs/polaroid/LuckyStrike'
        import Enjoy from './components/songs/polaroid/Enjoy'
        import TararìTararà from './components/songs/polaroid/TararìTararà'
        import Perfavore from './components/songs/polaroid/Perfavore'
        import Noccioline from './components/songs/polaroid/Noccioline'
        import AllaTua from './components/songs/polaroid/AllaTua'
        import Pellaria from './components/songs/polaroid/Pellaria'
        import Medusa from './components/songs/polaroid/Medusa'
        import Cheregazzina from './components/songs/polaroid/Cheregazzina'
        import Avocado from './components/songs/polaroid/Avocado'
        import Argentario from './components/songs/polaroid/Argentario'


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
            name: 'Home',
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
                    path: '/polaroid/sempre-in-due',
                    component: SempreInDue
                },
                {
                    path: '/polaroid/polaroid',
                    component: PolaroidSong
                },
                {
                    path: '/polaroid/lucky-strike',
                    component: LuckyStrike
                },
                {
                    path: '/polaroid/enjoy',
                    component: Enjoy
                },
                {
                    path: '/polaroid/tararì-tararà',
                    component: TararìTararà
                },
                {
                    path: '/polaroid/perfavore',
                    component: Perfavore
                },
                {
                    path: '/polaroid/noccioline',
                    component: Noccioline
                },
                {
                    path: '/polaroid/alla-tua',
                    component: AllaTua
                },
                {
                    path: '/polaroid/pellaria',
                    component: Pellaria
                },
                {
                    path: '/polaroid/medusa',
                    component: Medusa
                },
                {
                    path: '/polaroid/cheregazzina',
                    component: Cheregazzina
                },
                {
                    path: '/polaroid/avocado',
                    component: Avocado
                },
                {
                    path: '/polaroid/argentario',
                    component: Argentario
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










        //test 
        // {
        //     path: '/polaroid/:id',
        //     name: 'polaroid',
        //     component: Canzone
        // },







    ]
};