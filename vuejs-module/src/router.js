import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./components/HomeComponent.vue')
    },
    {
        path: '/playground',
        name: 'Playground',
        component: () => import('./components/PlaygroundComponent')
    },
    {
        path: '/form',
        name: 'Form',
        component: () => import('./components/FormComponent')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;