<template>
<div>

    <div class=" flex-col sm:flex">

        <div class="w-1/3 flex flex-col items-center justify-center -ml-6 mr-6 mb-4">

                <h1 class="text-6xl text-blue-800 mb-4">Carl Brave</h1>

                <!-- <vue-typer
                    :text='["Daje, benvenuti nel sito di Carlo!", "Qui troverete molti contenuti!", "Foto!", "Video!", "Testi delle canzoni!", "E molto altro ancora!", "Più caciara, nun sento!"]'
                    :repeat='Infinity'
                    :shuffle='false'
                    initial-action='typing'
                    :pre-type-delay='70'
                    :type-delay='70'
                    :pre-erase-delay='2000'
                    :erase-delay='250'
                    erase-style='select-all'
                    :erase-on-complete='false'
                    caret-animation='smooth'
                    ></vue-typer> -->
           
        </div>

        <div class="w-full sm:w-1/2">
            <img src="/images/home/carlo-home.jpg" class="mx-10 rounded-lg">
        </div>

    </div>




</div>
</template>

<script>
    export default {

    }
</script>

<style>
.vue-typer {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 32px;
}
.vue-typer .custom.char {
  color: #3d3d3d;
}
</style>
