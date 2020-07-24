<template>
<div>

<div class="flex">
    <vue-typer
    :text='["Benvenuti nel sito dedicato a Carl Brave!","Qui potrete trovare tutti i contenuti e le informazioni su di lui.","Buon viaggio!"]'
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
    ></vue-typer>
</div>


</div>
</template>

<script>
    export default {
        // components: {
        //     VueTyper
        // },
    }
</script>

<style>
.vue-typer {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 40px;
  margin-left:10%
}
</style>
