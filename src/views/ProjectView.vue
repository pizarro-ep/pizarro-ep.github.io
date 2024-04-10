<template>
    <div v-if="data" class="w-full min-h-screen flex flex-col items-center gap-5 px-5 md:px-10 lg:px-16
        overflow-hidden">
        <div
            class="max-w-4xl min-h-screen flex flex-col items-center justify-center gap-16 px-5 transition-props transition-up scale-50">
            <span class="text-black/90 dark:text-white/90 text-4xl text-center font-bold uppercase">
                {{ data.title }}
            </span>
            <span class="text-black/80 dark:text-white/80 text-base sm:text-xl text-center">
                Esta página contiene el case de estudio del proyecto "{{ data.title }}", incluye la
                descripción general del proyecto, las herramientas utilizadas, etc.
            </span>
        </div>
        <div class="max-w-4xl min-h-screen flex flex-col items-center justify-center gap-10 sm:gap-16 px-5">
            <img :src="getImageUrl(data.img)" alt=""
                class="w-full sm:w-3/4 rounded-md transition-props transition-up scale-50">
            <div class="w-full sm:w-4/5 flex flex-col gap-5 transition-props transition-to-r -translate-x-full">
                <span class="text-black/90 dark:text-white/90 text-xl sm:text-3xl font-bold">
                    Descripción del proyecto
                </span>
                <div class="text-black/80 dark:text-white/80 text-sm sm:text-base whitespace-pre-line">
                    {{ data.description }}
                </div>
            </div>
            <div class="w-full sm:w-4/5 flex flex-col gap-5 transition-props transition-to-r -translate-x-full">
                <span class="text-black/90 dark:text-white/90 text-xl sm:text-3xl font-bold">
                    Tecnologías usadas
                </span>
                <div class="flex flex-wrap gap-2">
                    <span v-for="technologie in data.technologies"
                        class="px-3 py-2 bg-primary/10 text-primary text-sm rounded">
                        {{ technologie }}
                    </span>
                </div>
            </div>
            <div class="w-full sm:w-4/5 pb-10">
                <span class="transition-props transition-up scale-50">
                    <button class="btn btn-default " @click="$router.go(-1)">
                        <i class="fa-solid fa-left-long mr-2"></i> Volver
                    </button>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import projects from "../data/projects.json"

export default {
    name: "ProjectsView",
    props: ["id"],
    data() {
        return {
            projects: projects,
            data: null,
        }
    },
    created() {
        this.data = this.projects.find(data => data.id === parseInt(this.id));
        if (!this.data) this.$router.push("/404")
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