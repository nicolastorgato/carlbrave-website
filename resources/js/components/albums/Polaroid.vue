<template>
<div>

    <div class="flex-col">
        <h1 class="font-normal text-3xl leading-none mb-10"> Album | 
            <span class="uppercase text-2xl font-semibold">Polaroid 
                <span class="uppercase text-xl font-normal">(con Franco 126)</span> 
            </span> 
        </h1>

        <div class="flex flex-col lg:flex-row mb-4">
            <!-- <div class="w-1/2 mr-24 pr-20 pb-20">
                <img class="object-contain mb-3" src="/images/albums/album-polaroid-1.jpg">
                <a href="/images/albums/album-polaroid-1.jpg" class="border border-grey-light px-8 py-2 rounded-full text-black font-medium text-xs hover:bg-gray-100">
                    Copertina
                </a>
            </div> -->


            <div class="mr-24 pr-20 pb-20">
                <img class="mb-3" style="height: 450px;" src="/images/albums/album-polaroid-1.jpg" alt="logo" />
                <a download="Polaroid Copertina" href="/images/albums/album-polaroid-1.jpg" class="border border-grey-light px-8 py-2 rounded-full text-black font-medium text-xs hover:bg-gray-100">
                    Copertina 
                </a>
            </div>


            <ul class="leading-7">
                <li v-for="canzone in canzoni" :key="canzone.nome" class="text-base text-gray-700 hover:text-blue-600">
                    <router-link :to="'/polaroid/' + canzone.path"> {{ canzone.nome }} </router-link>
                </li>
            </ul>




        </div>

        <div class="flex flex-col lg:flex-row">

            <div class="bg-white w-full md:w-1/3 mr-16 mb-4">
                <img src="/images/albums/album-polaroid-2.jpg" alt="Copertina (versione 2)" class="w-full object-cover h-32 sm:h-48 md:h-64 mb-3">
                <a href="/images/albums/album-polaroid-2.jpg" class="border border-grey-light px-8 py-2 rounded-full text-black font-medium text-xs hover:bg-gray-100">
                    Copertina (versione 2)
                </a>
            </div>

            <div class="bg-white w-full md:w-1/3">
                <img src="/images/albums/album-polaroid-3.jpg" alt="Copertina (versione 3)" class="w-full object-cover h-32 sm:h-48 md:h-64 mb-3">
                <a href="/images/albums/album-polaroid-3.jpg" class="border border-grey-light px-8 py-2 rounded-full text-black font-medium text-xs hover:bg-gray-100">
                    Copertina (versione 3)
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
                    nome: '1 - Solo guai',
                    path: 'solo-guai',
                    numero: 1,
                    testo: 'Starnutisco per unallergia Vino rosso sopra i vestiti che non va più via (ahhh) E tu che mi dai contro, tanto è sempre colpa mia (colpa mia)'
                    },
                    {
                    nome: '2 - Sempre in due',
                    path: 'sempre-in-due',
                    numero: 2,
                    testo: 'testo2'
                    },
                    {
                    nome: '3 - Polaroid',
                    path: 'polaroid',
                    numero: 3,
                    testo: 'testo3'
                    },
                    {
                    nome: '4 - Lucky Strike',
                    path: 'lucky-strike',
                    numero: 4,
                    testo: 'testo4'
                    },
                    {
                    nome: '5 - Enjoy',
                    path: 'enjoy',
                    numero: 5,
                    testo: 'testo5'
                    },
                    {
                    nome: '6 - Tararì Tararà',
                    path: 'tararì-tararà',
                    numero: 6,
                    testo: 'testo6'
                    },
                    {
                    nome: '7 - Perfavore',
                    path: 'perfavore',
                    numero: 7,
                    testo: 'testo7'
                    },
                    {
                    nome: '8 - Noccioline',
                    path: 'noccioline',
                    numero: 8,
                    testo: 'testo8'
                    },
                    {
                    nome: '9 - Alla tua',
                    path: 'alla-tua',
                    numero: 9,
                    testo: 'testo9'
                    },
                    {
                    nome: '10 - Pellaria',
                    path: 'pellaria',
                    numero: 10,
                    testo: 'testo10'
                    },
                    {
                    nome: '11 - Medusa',
                    path: 'medusa',
                    numero: 11,
                    testo: 'testo11'
                    },
                    {
                    nome: '12 - Cheregazzina',
                    path: 'cheregazzina',
                    numero: 12,
                    testo: 'testo12'
                    },
                    {
                    nome: '13 - Avocado',
                    path: 'avocado',
                    numero: 13,
                    testo: 'testo13'
                    },
                    {
                    nome: '14 - Argentario',
                    path: 'argentario',
                    numero: 14,
                    testo: 'testo14'
                    },
                ],


            };
        },






       created() {
            // console.log('Polaroid');
        },
    }
</script>
