import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import JobDescription from "../pages/JobDescription.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '', name: 'home', component: Home },
            { path: 'job/:id', name: 'job-details', component: JobDescription, props: true }
        ]
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router;