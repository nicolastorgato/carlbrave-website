<template>
<div>

<header class="sm:flex sm:justify-between sm:px-4 sm:py-3">
    <div class="flex justify-between px-4 py-3 sm:p-0 items-center">

        <div>
            <img class="h-12" src="/images/loghi/carlo_logo2.jpg" alt="Logo">
        </div>


        <div class="sm:hidden">
            <button @click="isOpen = !isOpen" type="button" class="block text-gray-800">

                <svg class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path v-if="isOpen" d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                    <path v-if="!isOpen" class="heroicon-ui" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
            </button>
        </div>
    </div>

    <div :class="isOpen ? 'block' : 'hidden'" class="pl-8 py-3 sm:flex">
        <a href="#" class=" block text-sm px-2 py-1 text-gray-800 rounded hover:bg-gray-300"> Bio </a>
        <a href="#" class="mt-1 block text-sm px-2 py-1 text-gray-800 rounded hover:bg-gray-300 sm:mt-0 sm:ml-2"> Tour </a>
        <a href="#" class="mt-1 block text-sm px-2 py-1 text-gray-800 rounded hover:bg-gray-300 sm:mt-0 sm:ml-2"> Foto </a>
        <a href="#" class="mt-1 block text-sm px-2 py-1 text-gray-800 rounded hover:bg-gray-300 sm:mt-0 sm:ml-2"> Video </a>

        

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
    }

}
</script>

<style>

</style>