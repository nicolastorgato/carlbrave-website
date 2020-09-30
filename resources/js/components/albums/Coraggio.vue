<template>
<div>

    <div class="flex-col mb-8">

        <h1 class="font-normal text-3xl leading-none mb-10 text-gray-800"> Album | 
            <span class="mt-2 uppercase text-2xl font-semibold">Coraggio </span> 
            
        </h1>

        <div class="flex flex-col lg:flex-row mb-4">

            <div class="w-full sm:w-auto mr-24 pr-20 pb-10 sm:pb-20">
                <img class="mb-3" width="500px" src="/images/albums/album-coraggio.jpg" alt="logo" />
                <a href="/images/albums/album-coraggio.jpg" class="border border-grey-light px-8 py-2 rounded-full text-black font-medium text-xs hover:bg-gray-100">
                    Copertina 
                </a>
            </div>


            <ul class="leading-7 mb-5">
                <li v-for="canzone in canzoni" :key="canzone.nome" class="text-base text-gray-700 hover:text-blue-600">
                    <router-link :to="'/coraggio/' + canzone.path"> {{ canzone.nome }} </router-link>
                </li>
            </ul>

        </div>


    </div>



    <!-- <div class="flex items-center justify-center sm:mt-24">
        
            <div class="bg-white lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <div class="lg:w-1/2">
                    <div class="h-64 bg-cover bg-center lg:rounded-lg lg:h-full" style="background-image:url('/images/varie/new-album.jpg')"></div>
                </div>
                <div class="py-12 px-0 lg:px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <h2 class="text-3xl text-gray-800 font-bold">Nuovo Album</h2>
                    <p class="mt-4 text-gray-700">Dopo i singoli Che poi, Regina Coeli, Spigoli e l'ultimissima Fratellì, 
                                                  Carl Brave pubblicherà il suo prossimo album a Settembre 2020. <br><br>
                                                  Sono già in programma due concerti live per il prossimo anno e l'attesa è già alle stelle! </p>
                    <div class="mt-8">
                        <a class="bg-blue-900 text-gray-100 px-5 py-3 font-semibold rounded tracking-wide cursor-default">Nuovo album fuori a Settembre!</a>
                    </div>
                </div>
            </div>
        
    </div> -->

</div>
</template>

<script>
    export default {

        data(){
            return {
                canzoni: [
                    {
                    nome: '1 - Shangai',
                    path: 'shangai',
                    numero: 1,
                    testo: 'testo1'
                    },
                    {
                    nome: '2 - Parli parli',
                    path: 'parli-parli',
                    numero: 2,
                    testo: 'testo2'
                    },
                    {
                    nome: '3 - Eccaalla',
                    path: 'eccaalla',
                    numero: 3,
                    testo: 'testo3'
                    },
                    {
                    nome: '4 - Nuvole',
                    path: 'nuvole',
                    numero: 4,
                    testo: 'testo4'
                    },
                    {
                    nome: '5 - Spigoli (feat. Tha Supreme & Mara Sattei)',
                    path: 'spigoli',
                    numero: 5,
                    testo: 'testo5'
                    },
                    {
                    nome: '6 - Gemelli',
                    path: 'gemelli',
                    numero: 6,
                    testo: 'testo6'
                    },
                    {
                    nome: '7 - Glicine',
                    path: 'glicine',
                    numero: 7,
                    testo: 'testo7'
                    },
                    {
                    nome: '8 - Mandovai',
                    path: 'mandovai',
                    numero: 8,
                    testo: 'testo8'
                    },
                    {
                    nome: '9 - Fakedm',
                    path: 'Fakedm',
                    numero: 9,
                    testo: 'testo9'
                    },
                    {
                    nome: '10 - Buuu',
                    path: 'buuu',
                    numero: 10,
                    testo: 'testo10'
                    },
                    {
                    nome: '11 - Fratellì',
                    path: 'fratellì',
                    numero: 11,
                    testo: 'testo11'
                    },
                    {
                    nome: '12 - Le guardie',
                    path: 'le-guardie',
                    numero: 12,
                    testo: 'testo12'
                    },
                    {
                    nome: '13 - Je m\'appelle',
                    path: 'je-mappelle',
                    numero: 13,
                    testo: 'testo13'
                    },
                    {
                    nome: '14 - Regina Coeli',
                    path: 'regina-coeli',
                    numero: 14,
                    testo: 'testo14'
                    },
                    {
                    nome: '15 - Fototessera',
                    path: 'fototessera',
                    numero: 15,
                    testo: 'testo15'
                    },
                    {
                    nome: '16 - Che poi',
                    path: 'che-poi',
                    numero: 16,
                    testo: 'testo16'
                    },
                    {
                    nome: '17 - Marisol',
                    path: 'marisol',
                    numero: 17,
                    testo: 'testo17'
                    },
                ],


            };
        },






       created() {
        },
    }
</script>
