<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Carl Brave </title>

        <link rel="stylesheet" href="/css/main.css">

        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" 
              rel="stylesheet">
        
    </head>
    <body class="font-body antialiased h-full">
        <div id="app">

            <div class="">

                <navbar></navbar>
   
                
                <main class="">

                    <div class="primary flex-1 px-6 sm:px-12">
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
