<template>
<div>

    <div class="flex-col">
        <h1 class="font-normal text-3xl leading-none mb-10"> ALBUM Polaroid</h1>

        <div class="flex mb-4">
            <div class="w-1/2 mr-24 pr-20 pb-20">
                <img class="object-contain" src="/images/albums/album-polaroid-1.jpg">
            </div>

            <div class="w-1/2 flex-col items-center">
                <p class=" text-lg font-medium mb-3">Tracce</p>
                <ul class="leading-7">
                    <li> 1 - Solo Guai </li>
                    <li> 2 - Sempre in due </li>
                    <li> 3 - Polaroid </li>
                    <li> 4 - Lucky Strike </li>
                    <li> 5 - Enjoy </li>
                    <li> 6 - Tararì Tararà </li>
                    <li> 7 - Perfavore </li>
                    <li> 8 - Noccioline </li>
                    <li> 9 - Alla tua </li>
                    <li> 10 - Pellaria </li>
                    <li> 11 - Medusa </li>
                    <li> 12 - Cheregazzina </li>
                    <li> 13 - Avocado </li>
                    <li> 14 - Argentario </li>
                </ul>
            </div>

        </div>

        <div class="flex">

            <div class="bg-white overflow-hidden w-1/3 mr-16">
                <img src="/images/albums/album-polaroid-2.jpg" alt="People" class="w-full object-cover h-32 sm:h-48 md:h-64 mb-2">
                <h3 class="font-normal mb-2 text-xl leading-tight sm:leading-normal">The Coldest Sunset</h3>
            </div>

            <div class="bg-white overflow-hidden w-1/3">
                <img src="/images/albums/album-polaroid-3.jpg" alt="People" class="w-full object-cover h-32 sm:h-48 md:h-64 mb-2">
                <h3 class="font-normal mb-2 text-xl leading-tight sm:leading-normal">The Coldest Sunset</h3>
                </div>
            </div>
                
        </div>




    </div>
</div>
</template>

<script>
    export default {
       created() {
            console.log('Polaroid');
        },
    }
</script>
