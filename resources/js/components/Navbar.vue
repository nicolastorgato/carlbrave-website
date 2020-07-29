<template>
<div>

<header class="sm:flex sm:justify-between sm:px-4 sm:py-3 mb-6">
    <div class="flex justify-between px-4 py-3 sm:p-0 items-center">

        <div>
            <a href="/"> <img class="h-12" src="/images/loghi/carlo_logo2.jpg" alt="Logo"> </a>
        </div>


        <div class="sm:hidden">
            <button @click="isOpen = !isOpen" type="button" class="block text-gray-800 focus:outline-none">

                <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path v-if="isOpen" d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                    <path v-if="!isOpen" class="heroicon-ui" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
            </button>
        </div>
    </div>

    <div :class="isOpen ? 'block' : 'hidden'" class="pl-8 py-0 sm:py-3 pb-3 sm:pb-0 sm:flex">
        <div class="px-2 font-medium text-xl mt-3 sm:-mt-1 uppercase"> Vita</div>
        <a href="" class="px-2"><router-link to="/" exact> Home </router-link> </a>
        <a href="" class="px-2"><router-link to="/biografia"> Bio </router-link> </a>
        <a href="" class="px-2"><router-link to="/tour"> Tour </router-link> </a> 
        <a href="" class="px-2"><router-link to="/foto"> Foto </router-link> </a>
        <a href="" class="px-2"><router-link to="/video"> Video </router-link> </a>

        <div class="px-8 mt-4"></div>

        <div class="px-2 font-medium text-xl mt-3 sm:-mt-1 uppercase"> Album</div>

        <a href="" class="px-2"><router-link to="/polaroid"> Polaroid </router-link> </a>
        <a href="" class="px-2"><router-link to="/notti-brave"> Notti Brave </router-link> </a>
        <a href="" class="px-2"><router-link to="/notti-brave-after"> Notti Brave After </router-link> </a>
        <a href="" class="px-2"><router-link to="/nuovo-album"> Nuovo Album </router-link> </a>

        <div class="px-8 mt-4"></div>

        <a href="" class="px-2 font-medium text-xl sm:-mt-1 uppercase"><router-link to="/le-polaroid"> Le Polaroid </router-link> </a>

        
    </div>
</header>
  
</div>
</template>

<script>

export default {
    data(){
        return {
            isOpen: false
        }
    },



}
</script>

<style>

</style>