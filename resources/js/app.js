import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import axios from "axios";
import VueTyperPlugin from 'vue-typer'

window.axios = require("axios");

import Navbar from './components/Navbar'
Vue.component('navbar', Navbar)


Vue.use(VueRouter)
Vue.use(VueTyperPlugin)


let app = new Vue({
    el: '#app',

    router: new VueRouter(routes)
});