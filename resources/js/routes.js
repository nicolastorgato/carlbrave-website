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

import Professorè from './components/songs/nottibrave/Professorè'
import Fotografia from './components/songs/nottibrave/Fotografia'
import CamelBlu from './components/songs/nottibrave/CamelBlu'
import ParcoGondar from './components/songs/nottibrave/ParcoGondar'
import Vita from './components/songs/nottibrave/Vita'
import Noi from './components/songs/nottibrave/Noi'
import PubCrawl from './components/songs/nottibrave/PubCrawl'
import Malibu from './components/songs/nottibrave/Malibu'
import Chapeau from './components/songs/nottibrave/Chapeau'
import E10Song from './components/songs/nottibrave/E10Song'
import Bretelle from './components/songs/nottibrave/Bretelle'
import LaCuenta from './components/songs/nottibrave/LaCuenta'
import Scusa from './components/songs/nottibrave/Scusa'
import PiantoNoisy from './components/songs/nottibrave/PiantoNoisy'
import Accuccia from './components/songs/nottibrave/Accuccia'




import NottiBraveAfter from './components/albums/NottiBraveAfter'

import Posso from './components/songs/nottibraveafter/Posso'
import Merci from './components/songs/nottibraveafter/Merci'
import Comunque from './components/songs/nottibraveafter/Comunque'
import SpunteBlu from './components/songs/nottibraveafter/SpunteBlu'
import MezzoCocktail from './components/songs/nottibraveafter/MezzoCocktail'
import RidereDiNoi from './components/songs/nottibraveafter/RidereDiNoi'
import Termini from './components/songs/nottibraveafter/Termini'







import NewAlbum from './components/albums/NewAlbum'






// LE POLAROID
import LePolaroid from './components/LePolaroid'


import DropdownMenu from './components/DropdownMenu'


export default {

    mode: 'history',

    linkActiveClass: 'font-bold text-blue-500',

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










        //album POLAROID
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






        // album NOTTI BRAVE
        {
            path: '/notti-brave',
            component: NottiBrave
        },

        {
            path: '/notti-brave/professorè',
            component: Professorè
        },
        {
            path: '/notti-brave/fotografia',
            component: Fotografia
        },
        {
            path: '/notti-brave/camel-blu',
            component: CamelBlu
        },
        {
            path: '/notti-brave/parco-gondar',
            component: ParcoGondar
        },
        {
            path: '/notti-brave/vita',
            component: Vita
        },
        {
            path: '/notti-brave/noi',
            component: Noi
        },
        {
            path: '/notti-brave/pub-crawl',
            component: PubCrawl
        },
        {
            path: '/notti-brave/malibu',
            component: Malibu
        },
        {
            path: '/notti-brave/chapeau',
            component: Chapeau
        },
        {
            path: '/notti-brave/e10',
            component: E10Song
        },
        {
            path: '/notti-brave/bretelle',
            component: Bretelle
        },
        {
            path: '/notti-brave/la-cuenta',
            component: LaCuenta
        },
        {
            path: '/notti-brave/scusa',
            component: Scusa
        },
        {
            path: '/notti-brave/pianto-noisy',
            component: PiantoNoisy
        },
        {
            path: '/notti-brave/accuccia',
            component: Accuccia
        },










        // album NOTTI BRAVE AFTER
        {
            path: '/notti-brave-after',
            component: NottiBraveAfter
        },

        {
            path: '/notti-brave-after/posso',
            component: Posso
        },
        {
            path: '/notti-brave-after/merci',
            component: Merci
        },
        {
            path: '/notti-brave-after/comunque',
            component: Comunque
        },
        {
            path: '/notti-brave-after/spunte-blu',
            component: SpunteBlu
        },
        {
            path: '/notti-brave-after/mezzo-cocktail',
            component: MezzoCocktail
        },
        {
            path: '/notti-brave-after/ridere-di-noi',
            component: RidereDiNoi
        },
        {
            path: '/notti-brave-after/termini',
            component: Termini
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