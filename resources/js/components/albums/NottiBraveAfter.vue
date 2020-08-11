<template>
<div>

    <div class="flex-col mb-8">

        <h1 class="font-normal text-3xl leading-none mb-10"> Album | 
            <span class="mt-2 uppercase text-2xl font-semibold">Notti Brave (After) </span> 
            
        </h1>

        <div class="flex flex-col lg:flex-row mb-4">

            <div class="w-full sm:w-auto mr-24 pr-20 pb-10 sm:pb-20">
                <img class="mb-3" width="500px" src="/images/albums/album-nottibraveafter.jpg" alt="logo" />
                <a href="/images/albums/album-nottibraveafter.jpg" class="border border-grey-light px-8 py-2 rounded-full text-black font-medium text-xs hover:bg-gray-100">
                    Copertina 
                </a>
            </div>


            <ul class="leading-7 mb-5">
                <li v-for="canzone in canzoni" :key="canzone.nome" class="text-base text-gray-700 hover:text-blue-600">
                    <router-link :to="'/notti-brave-after/' + canzone.path"> {{ canzone.nome }} </router-link>
                </li>
            </ul>

        </div>

        <div class="flex flex-col lg:flex-row">

            <div class="bg-white w-full md:w-1/3 mr-16 mb-6">
                <img src="/images/albums/album-nottibraveafter-2.jpg" alt="Copertina (versione 2)" class="w-full object-cover h-32 sm:h-48 md:h-64 mb-3">
                <a href="/images/albums/album-nottibraveafter-2.jpg" class="border border-grey-light px-8 py-2 rounded-full text-black font-medium text-xs hover:bg-gray-100">
                    Copertina (retro)
                </a>
            </div>

            <div class="bg-white w-full md:w-1/3 mr-16 mb-6">
                <img src="/images/albums/album-nottibraveafter-3.jpg" alt="Copertina (versione 2)" class="w-full object-cover h-32 sm:h-48 md:h-64 mb-3">
                <a href="/images/albums/album-nottibraveafter-3.jpg" class="border border-grey-light px-8 py-2 rounded-full text-black font-medium text-xs hover:bg-gray-100">
                    Vinile
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
                    nome: '1 - Posso (feat. Max Gazzè)',
                    path: 'posso',
                    numero: 1,
                    testo: 'testo1'
                    },
                    {
                    nome: '2 - Merci',
                    path: 'merci',
                    numero: 2,
                    testo: 'testo2'
                    },
                    {
                    nome: '3 - Comunque',
                    path: 'comunque',
                    numero: 3,
                    testo: 'testo3'
                    },
                    {
                    nome: '4 - Spunte Blu (feat. Guè Pequeno)',
                    path: 'spunte-blu',
                    numero: 4,
                    testo: 'testo4'
                    },
                    {
                    nome: '5 - Mezzo Cocktail (feat. Ugo Borghetti)',
                    path: 'mezzo-cocktail',
                    numero: 5,
                    testo: 'testo5'
                    },
                    {
                    nome: '6 - Ridere di noi (feat. Luchè)',
                    path: 'ridere-di-noi',
                    numero: 6,
                    testo: 'testo6'
                    },
                    {
                    nome: '7 - Termini',
                    path: 'termini',
                    numero: 7,
                    testo: 'testo7'
                    },
                   
                ],


            };
        },






       created() {
        },
    }
</script>
