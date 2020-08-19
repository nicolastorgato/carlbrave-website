<template>
<div>

    <!-- <header class="sm:flex sm:justify-between sm:items-center sm:px-8 sm:py-3 mb-6 mt-1 mr-2">
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
            <a @click="closeMenu" class="px-2 font-medium text-lg sm:mt-0 uppercase text-gray-800 hover:text-gray-900"><router-link to="/" exact> Home </router-link> </a>

            <div class="px-8 mt-4"></div>

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
        
    </header> -->








<!------------------------------------------------------------------------------------------------------------------------------------------------------->








<header class="sm:flex sm:justify-between sm:items-center sm:px-8 sm:py-3 mb-6 mt-1 mr-2">
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
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
    <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
      <div class="px-2 sm:flex sm:p-0">
        <div v-if="isOpen == false" class="dropdown inline-block relative sm:ml-20 sm:mr-8">
          <button class="text-gray-700 font-normal py-2 px-4 rounded inline-flex items-center">
            <a class="sm:mt-0 "><router-link to="/" exact> Home </router-link> </a>
          </button>
        </div>


        <!-- dropdown element -->
        <div v-if="isOpen == false" class="dropdown inline-block relative sm:ml-20">
          <button class="text-gray-700 font-normal py-2 px-4 rounded inline-flex items-center">
            <span class="mr-1 cursor-default">Vita</span>
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
          </button>
          <ul class="w-32 dropdown-menu absolute hidden text-gray-700 pt-1 shadow-lg z-10">

            <li > <router-link to="/biografia"> <a class="rounded-t bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap text-sm"> Bio </a> </router-link> </li>
            <li > <router-link to="/tour"> <a class="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap text-sm"> Tour </a> </router-link> </li>
            <li > <router-link to="/foto"> <a class="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap text-sm"> Foto </a> </router-link> </li>
            <li > <router-link to="/video"> <a class="rounded-b bg-white  hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap text-sm"> Video </a> </router-link> </li>

          </ul>
        </div>


        <!-- dropdown element -->
        <div v-if="isOpen == false" class="dropdown inline-block relative sm:ml-20">
          <button class="text-gray-700 font-normal py-2 px-4 rounded inline-flex items-center">
            <span class="mr-1 cursor-default">Album</span>
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
          </button>
          <ul class="w-40 dropdown-menu absolute hidden text-gray-700 pt-1 shadow-lg z-10">
            <li > <router-link to="/polaroid"> <a class="rounded-t bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap text-sm"> Polaroid </a> </router-link> </li>
            <li > <router-link to="/notti-brave"> <a class="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap text-sm"> Notti Brave </a> </router-link> </li>
            <li > <router-link to="/notti-brave-after"> <a class="bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap text-sm"> Notti Brave After </a> </router-link> </li>
            <li > <router-link to="/nuovo-album"> <a class="rounded-b bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap text-sm">
             Nuovo Album <span class="rounded-full text-white bg-blue-500 uppercase px-2 py-1 text-xs font-normal ml-1">New</span> </a> </router-link> </li>
                      
          </ul>
        </div>



        <div v-if="isOpen == false" class="dropdown inline-block relative sm:ml-20 sm:mr-10">
          <button class="text-gray-700 font-normal py-2 px-4 rounded inline-flex items-center">
            <a class="sm:mt-0 "><router-link to="/le-polaroid"> Le Polaroid </router-link> </a>
          </button>
        </div>

      </div>




      <!-- mobile menu -->
      <div class="px-4 py-3 border-gray-800 sm:hidden">
        <div class="flex items-center">
            <a @click="closeMenu" class="font-semibold text-gray-800"><router-link to="/" exact> Home </router-link> </a>
        </div>
      </div>

      <div class="px-4 py-3 sm:hidden">
        <div class="flex items-center">
          <span class="font-semibold text-gray-800">Vita</span>
        </div>
        <div class="mt-1">

          <a @click="closeMenu" class="mr-3 text-gray-800"><router-link to="/biografia"> Bio </router-link> </a>
          <a @click="closeMenu" class="mr-3 mt-1 text-gray-800"><router-link to="/tour"> Tour </router-link> </a> 
          <a @click="closeMenu" class="mr-3 mt-1 text-gray-800"><router-link to="/foto"> Foto </router-link> </a>
          <a @click="closeMenu" class="mr-3 mt-1 text-gray-800"><router-link to="/video"> Video </router-link> </a>

        </div>
      </div>

      <div class="px-4 py-3 sm:hidden">
        <div class="flex items-center">
          <span class="font-semibold text-gray-800">Album</span>
        </div>
        <div class="mt-1 w-full">
          <a @click="closeMenu" class="block mr-3 text-gray-800"><router-link to="/polaroid"> Polaroid </router-link> </a>
          <a @click="closeMenu" class="block mr-3 mt-1 text-gray-800"><router-link to="/notti-brave"> Notti Brave </router-link> </a>
          <a @click="closeMenu" class="block mr-3 mt-1 text-gray-800"><router-link to="/notti-brave-after"> Notti Brave After </router-link> </a>
          <a @click="closeMenu" class="block mr-3 mt-1 text-gray-800"><router-link to="/nuovo-album"> Nuovo Album <span class="rounded-full bg-blue-500 uppercase px-2 py-1 text-xs font-semibold ml-1">New</span> </router-link> </a>
          
        </div>
      </div>

      <div class="px-4 py-3 sm:hidden">
        <div class="flex items-center">
            <a @click="closeMenu" class="font-semibold text-gray-800"> <router-link to="/le-polaroid"> Le Polaroid </router-link> </a>
        </div>
      </div>


    </nav>
</header>






  
</div>
</template>

<script>



export default {


    data(){
        return {
            isOpen: false,
            closedDropdown: false
        }
    },

    methods: {
      closeMenu () {
          setTimeout(() => { this.isOpen = !this.isOpen }, 200);
      },

      // closeDropdown () {
      //     this.closedDropdown = !this.closedDropdown;  
      // }
	}



}
</script>

<style>
/* .dropdown:hover .dropdown-menu {
  display: block;
} */

.dropdown:hover .dropdown-menu {
  @apply block
} 

</style>