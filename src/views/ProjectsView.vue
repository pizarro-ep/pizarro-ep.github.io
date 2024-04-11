<template>
    <div class="w-full min-h-screen flex flex-col items-center gap-5 px-5 md:px-10 lg:px-16 pt-10 md:pt-0
        overflow-hidden">
        <div v-for="project in projects"
            class="max-w-5xl min-h-screen flex flex-col md:flex-row items-center justify-center gap-5">
            <div
                class="w-full md:w-1/2 lg:w-2/3 flex items-center justify-center px-5 md:px-0 lg:px-5 transition-props transition-to-r -translate-x-full">
                <img :src="getImageUrl(project.img)"
                    class="object-fill w-4/5 sm:w-3/5 md:w-4/5 aspect-[4/3] rounded-lg transition-all hover:scale-110"
                    :alt="project.img">
            </div>
            <div
                class="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-5 text-secondary select-none transition-props transition-to-l translate-x-full">
                <span class="text-black dark:text-white text-xl font-bold uppercase">{{ project.title }}</span>
                <span class="">{{ project.resume }}</span>
                <div><a :href="`/#/projects/${project.id}`" class="btn btn-default py-2">Caso de estudio <i
                            class="fa-solid fa-arrow-up-right-from-square ms-2"></i></a></div>
            </div>
        </div>
    </div>
</template>

<script>
import projects from "../data/projects.json"

export default {
    name: "ProjectsView",
    data() {
        return {
            projects: projects
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll()
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        getImageUrl: function (name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href
        },
        handleScroll() {
            this.applyAnimation("transition-to-r", "-translate-x-full", "transition-slide-0");
            this.applyAnimation("transition-to-l", "translate-x-full", "transition-slide-0");
            this.applyAnimation("transition-up", "scale-50", "transition-scale-100");
        },
        applyAnimation(selector, exitAnimate, entryAnimate) {
            const elementToAnimate = document.getElementsByClassName(selector);
            for (var i = 0; i < elementToAnimate.length; i++) {
                const windowHeight = window.innerHeight;
                const positionTop = elementToAnimate[i].getBoundingClientRect().top;
                const positionBottom = elementToAnimate[i].getBoundingClientRect().bottom;

                const isPartiallyVisible = positionTop < windowHeight && positionBottom >= 0;

                if (isPartiallyVisible) {
                    elementToAnimate[i].classList.add(entryAnimate);
                    elementToAnimate[i].classList.remove(exitAnimate);
                } else {
                    elementToAnimate[i].classList.add(exitAnimate);
                    elementToAnimate[i].classList.remove(entryAnimate);
                }
            }
        },
    }
}
</script>
