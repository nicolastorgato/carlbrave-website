<template>
<div>

    <header class="sm:flex sm:justify-between sm:items-center sm:px-8 sm:py-3 mb-6 mt-1 mr-2">
        <div class="flex justify-between px-4 py-3 sm:p-0 items-center">

            <div>
                <a href="/"> <img class="-ml-3 sm:m-0 h-12 transition duration-500 ease-in-out transform hover:scale-105" src="/images/loghi/carlo_logo2.jpg" alt="Logo"> </a>
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

       
        <div id='menu' :class="isOpen ? 'block' : 'hidden'" class="pl-4 py-0 sm:py-3 pb-3 sm:pb-0 sm:flex sm:items-baseline">
            <!-- <a @click="closeMenu" class="px-2 font-medium text-lg sm:mt-0 uppercase text-gray-800 hover:text-gray-900"><router-link to="/" exact> Home </router-link> </a>

            <div class="px-8 mt-4"></div> -->

            <div class="px-2 font-medium text-lg mt-3 sm:mt-0 uppercase text-gray-800"> Vita</div>
            <a @click="closeMenu" class="px-2 text-gray-700 hover:text-gray-900"><router-link to="/biografia"> Bio </router-link> </a>
            <a @click="closeMenu" class="px-2 text-gray-700 hover:text-gray-900"><router-link to="/tour"> Tour </router-link> </a> 
            <a @click="closeMenu" class="px-2 text-gray-700 hover:text-gray-900"><router-link to="/foto"> Foto </router-link> </a>
            <a @click="closeMenu" class="px-2 text-gray-700 hover:text-gray-900"><router-link to="/video"> Video </router-link> </a>

            <div class="px-8 mt-4"></div>

            <div class="px-2 font-medium text-lg mt-3 sm:mt-0 uppercase text-gray-800"> Album</div>

            <a @click="closeMenu" class="px-2 text-gray-700 hover:text-gray-900"><router-link to="/polaroid"> Polaroid </router-link> </a>
            <a @click="closeMenu" class="px-2 text-gray-700 hover:text-gray-900"><router-link to="/notti-brave"> Notti Brave </router-link> </a>
            <a @click="closeMenu" class="px-2 text-gray-700 hover:text-gray-900"><router-link to="/notti-brave-after"> Notti Brave After </router-link> </a>
            <a @click="closeMenu" class="pl-2 pr-0 sm:pl-2 sm:pr-1 text-gray-700 hover:text-gray-900"><router-link to="/nuovo-album"> Nuovo Album </router-link> </a> 
            <span class="rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-semibold">New</span>

            <div class="px-8 mt-4"></div>

            <a @click="closeMenu" class="px-2 font-medium text-lg sm:mt-0 uppercase text-gray-800 hover:text-gray-900"> <router-link to="/le-polaroid"> Le Polaroid </router-link> </a>

            
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

    methods: {
		closeMenu () {
            setTimeout(() => { this.isOpen = !this.isOpen }, 300);
		}
	}



}
</script>

<style>


</style>