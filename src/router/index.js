import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', name: 'home', component: () => import("../views/HomeView.vue") },
    { path: '/projects', name: 'Proyectos', component: () => import("../views/ProjectsView.vue") },
    {
        path: '/projects/:id', name: 'Proyecto', component: () => import("../views/ProjectView.vue"), props: true, beforeEnter: (to, from, next) => {
            const id = to.params.id;
            if (!isValidId(id)) next("/404");
            else next();
        }
    },
    { path: '/about', name: 'Sobre mí', component: () => import("../views/AboutMeView.vue") },
    { path: '/contact', name: 'Contacto', component: () => import("../views/ContactView.vue") },
    { path: '/credits', name: 'Créditos', component: () => import("../views/CreditsView.vue") },
    { path: '/404', name: 'notFound', component: () => import('../error/NotFoundView.vue') },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: () => import('../error/NotFoundView.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

function isValidId(id) {
    if (isNaN(id)) return false
    else return true
}

export default router
