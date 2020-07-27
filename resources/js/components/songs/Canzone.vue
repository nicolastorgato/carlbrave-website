<template>
<div>
    <!-- <div class="flex items-start">

        <h1 class="font-normal text-3xl leading-none mb-6 mr-16"> Testo | 
            <span class="uppercase text-2xl font-semibold">  {{ this.$route.params }}  </span> 
        </h1>

        <a class="mt-1" title="Torna all'album"> 
            <router-link to="/polaroid">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path class="heroicon-ui" d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"/>
                    </svg>
            </router-link> 
        </a>

    </div> -->
        
    

    <div class="flex">

        <div class="w-1/3 mr-24">
            <p class="text-gray-800 text-justify leading-relaxed whitespace-pre-line"> 
                   <!-- {{ this.$route.params }}  -->

                  {{ canzone }} 

            </p>
        </div>


    </div>


</div>
</template>

<script>
    export default {
       created: function () {
           console.log(this.canzone)
        },

        props:{
          id:{
            type: String|Number,
            required: true,
          },
          canzone:{
            type: Object,
            required: true,
          }
        }


    }
</script>