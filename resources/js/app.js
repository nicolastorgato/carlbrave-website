
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import axios from "axios";
window.axios = require("axios");


Vue.use(VueRouter)

let app = new Vue({
    el: '#app',

    router: new VueRouter(routes)
});
