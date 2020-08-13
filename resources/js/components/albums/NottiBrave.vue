<template>
<div>

    <div class="flex-col mb-8">

        <h1 class="font-normal text-3xl leading-none mb-10 text-gray-800"> Album | 
            <span class="mt-2 uppercase text-2xl font-semibold">Notti Brave </span> 
            
        </h1>

        <div class="flex flex-col lg:flex-row mb-4">

            <div class="w-full sm:w-auto mr-24 pr-20 pb-10 sm:pb-20">
                <img class="mb-3" width="500px" src="/images/albums/album-nottibrave.jpg" alt="logo" />
                <a href="/images/albums/album-nottibrave.jpg" class="border border-grey-light px-8 py-2 rounded-full text-black font-medium text-xs hover:bg-gray-100">
                    Copertina 
                </a>
            </div>


            <ul class="leading-7 mb-5">
                <li v-for="canzone in canzoni" :key="canzone.nome" class="text-base text-gray-700 hover:text-blue-600">
                    <router-link :to="'/notti-brave/' + canzone.path"> {{ canzone.nome }} </router-link>
                </li>
            </ul>

        </div>

        <div class="flex flex-col lg:flex-row">

            <div class="bg-white w-full md:w-1/3 mr-16 mb-6">
                <img src="/images/albums/album-nottibrave-2.jpg" alt="Copertina (versione 2)" class="w-full object-cover h-32 sm:h-48 md:h-64 mb-3">
                <a href="/images/albums/album-nottibrave-2.jpg" class="border border-grey-light px-8 py-2 rounded-full text-black font-medium text-xs hover:bg-gray-100">
                    Copertina (retro)
                </a>
            </div>

           
                
        </div>




    </div>
</div>
</template>

<script>
    export default {

        data(){
            return {
                canzoni: [
                    {
                    nome: '1 - Professorè',
                    path: 'professorè',
                    numero: 1,
                    testo: 'testo1'
                    },
                    {
                    nome: '2 - Fotografia (feat. Francesca Michielin & Fabri Fibra)',
                    path: 'fotografia',
                    numero: 2,
                    testo: 'testo2'
                    },
                    {
                    nome: '3 - Camel Blu (feat. Giorgio Poi)',
                    path: 'camel-blu',
                    numero: 3,
                    testo: 'testo3'
                    },
                    {
                    nome: '4 - Parco Gondar (feat. Coez)',
                    path: 'parco-gondar',
                    numero: 4,
                    testo: 'testo4'
                    },
                    {
                    nome: '5 - Vita',
                    path: 'vita',
                    numero: 5,
                    testo: 'testo5'
                    },
                    {
                    nome: '6 - Noi',
                    path: 'noi',
                    numero: 6,
                    testo: 'testo6'
                    },
                    {
                    nome: '7 - Pub Crawl',
                    path: 'pub-crawl',
                    numero: 7,
                    testo: 'testo7'
                    },
                    {
                    nome: '8 - Malibu (feat. Gemitaiz)',
                    path: 'malibu',
                    numero: 8,
                    testo: 'testo8'
                    },
                    {
                    nome: '9 - Chapeau (feat. Frah Quintale)',
                    path: 'chapeau',
                    numero: 9,
                    testo: 'testo9'
                    },
                    {
                    nome: '10 - E10 (feat. Pretty Solero & B)',
                    path: 'e10',
                    numero: 10,
                    testo: 'testo10'
                    },
                    {
                    nome: '11 - Bretelle (feat. Emis Killa)',
                    path: 'bretelle',
                    numero: 11,
                    testo: 'testo11'
                    },
                    {
                    nome: '12 - La Cuenta (feat. Franco 126)',
                    path: 'la-cuenta',
                    numero: 12,
                    testo: 'testo12'
                    },
                    {
                    nome: '13 - Scusa (feat. Ugo Borghetti & B)',
                    path: 'scusa',
                    numero: 13,
                    testo: 'testo13'
                    },
                    {
                    nome: '14 - Pianto Noisy',
                    path: 'pianto-noisy',
                    numero: 14,
                    testo: 'testo14'
                    },
                    {
                    nome: '15 - Accuccia',
                    path: 'accuccia',
                    numero: 15,
                    testo: 'testo15'
                    },
                ],


            };
        },






       created() {
        },
    }
</script>
