import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/components/main/Main"
import Introduce from "@/components/menus/introduce"
import Commerse from "@/components/menus/commerse"
import Engineering from "@/components/menus/engineering"
import Customer from "@/components/menus/customer"
import Lab from "@/components/menus/lab"

import NotFound from "@/components/NotFound";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Main",
            component: Main
        },
        {
            path: "/introduce",
            name: "Introduce",
            component: Introduce
        },
        {
            path: "/commerse",
            name: "Commerse",
            component: Commerse
        },
        {
            path: "/engineering",
            name: "Engineering",
            component: Engineering
        },
        {
            path: "/customer",
            name: "Customer",
            component: Customer
        },
        {
            path: "/lab",
            name: "Lab",
            component: Lab
        },
        {
            path: "*",
            component: NotFound
        }
    ]
})