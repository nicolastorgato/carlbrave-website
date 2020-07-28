<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Carl Brave Assets</title>

        <link rel="stylesheet" href="/css/main.css">

        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" 
              rel="stylesheet">
        
    </head>
    <body class="font-body antialiased h-full">
        <div id="app">

            <div class="px-16 mb-16 mt-6">
   
                <router-link :to="{ name: 'Home'}" exact> <img class="object-contain h-20 -ml-8" src="/images/loghi/carlo_logo2.jpg" style="display: inline" alt="Logo"> </router-link>
                
                <main class="flex mt-20">

                    

                    <aside class="w-1/5 invisible lg:visible ">

                        <section class="mb-8">
                            <h5 class="uppercase text-lg font-bold mb-3">Vita</h5>
                            <ul>
                             
                                <li class="text-sm pb-2"> <router-link to="/biografia"> Bio </router-link> </li> 
                                <li class="text-sm pb-2"> <router-link to="/tour"> Tour </router-link> </li> 
                                <li class="text-sm pb-2"> <router-link to="/foto"> Foto </router-link> </li>
                                <li class="text-sm pb-2"> <router-link to="/video"> Video </router-link> </li>
                            </ul>
                        </section>


                        <section class="mb-8">
                            <h5 class="uppercase text-lg font-bold mb-3">Album e Testi</h5>
                            <ul>
                                <li class="text-sm pb-2"> <router-link to="/polaroid"> Polaroid </router-link> </li>
                                <li class="text-sm pb-2"> <router-link to="/notti-brave"> Notti Brave </router-link> </li>
                                <li class="text-sm pb-2"> <router-link to="/notti-brave-after"> Notti Brave After </router-link> </li>
                                <li class="text-sm pb-2 mr-1"> 
                                    <router-link to="/nuovo-album"> Nuovo Album 
                                        <span class="bg-blue-600 font-thin text-xs text-white rounded-full py-1 px-3 ml-1">New</span> 
                                    </router-link> </li>
                            </ul>
                        </section>

                        <section>
                            <h5 class="uppercase text-lg font-bold mb-3"> <router-link to="/le-polaroid"> Le Polaroid </router-link> </h5>
                        </section>

                        
                        
                    </aside>

                    <div class="primary flex-1 -mt-20">
                        <transition name="fade" mode="out-in">
                            <router-view/>
                        </transition>
                    </div>


                </main>
                

            </div>

        </div>


        <script src="/js/app.js"></script>

    </body>
</html>
