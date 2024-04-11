<template>
    <div
        class="w-full min-h-screen flex flex-col sm:flex-row items-center gap-5 px-5 md:px-10 lg:px-16 overflow-hidden">
        <div
            class="w-full sm:w-1/2 md:w-1/2 flex flex-col gap-3 pt-20 md:pt-10 lg:pt-16 text-secondary select-none transition-props transition-to-r -translate-x-full">
            <div class="mb-2 text-center sm:text-left">
                <span
                    class="py-2 px-3 bg-primary/10 text-primary text-sm sm:text-base italic font-bold uppercase rounded-md">
                    Hola soy {{ name }}
                </span>
            </div>
            <div class="overflow-hidden relative text-center sm:text-left h-12 pt-[5px] -mt-[5px]">
                <ul class="animate-flip-text">
                    <li v-for="item in know"
                        class="py-0 px-3 h-[25px] mb-[25px] block text-default text-xl md:text-3xl text-shadow font-bold transition-all">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <span class="text-sm sm:text-lg lg:text-xl text-center sm:text-left text-secondary font-bold">
                {{ description }}
            </span>
            <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 mt-3">
                <a href="/#/about" class="btn btn-outlined-primary rounded-full">
                    Acerca de mí
                </a>
                <a href="/#/projects" class="btn btn-primary rounded-full">
                    Proyectos <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
                </a>
            </div>
        </div>
        <div
            class="w-full flex items-center justify-center sm:w-1/2 md:w-1/2 px-5 md:px-0 lg:px-5 py-5 sm:pt-10 transition-props transition-to-l translate-x-full">
            <img :src="getPhoto()" class="object-fill w-4/5 sm:w-full md:w-4/5" alt="Pizarro Ep">
        </div>
    </div>
    <div class="w-full min-h-screen flex flex-col justify-center items-center gap-5 py-3 px-10 overflow-hidden">
        <div
            class="flex flex-col items-center gap-5 p-1 text-4xl text-black/75 dark:text-white/75 font-bold transition-props transition-up scale-50">
            HABILIDADES
            <span class="w-10 h-1.5 bg-default rounded"></span>
        </div>
        <span
            class="max-w-4xl text-center text-secondary font-medium select-none transition-props transition-up scale-50">
            Aquí encontrará información sobre mis habilidades y conocimientos actuales, principalmente en términos de
            programación y tecnología.
        </span>
        <div
            class="max-w-3xl flex justify-center flex-wrap gap-2 pt-10 rounded transition-props transition-up scale-50">
            <div class="w-full flex flex-wrap justify-center gap-x-3 gap-y-1 mb-5">
                <span class="flex gap-1 items-center text-primary text-sm font-medium tracking-tight">
                    <i class="fa-solid fa-circle text-2xs"></i>Frontend
                </span>
                <span class="flex gap-1 items-center text-success text-sm font-medium tracking-tight">
                    <i class="fa-solid fa-circle text-2xs"></i>Backend
                </span>
                <span class="flex gap-1 items-center text-warning text-sm font-medium tracking-tight">
                    <i class="fa-solid fa-circle text-2xs"></i>Lenguajes de programación
                </span>
                <span class="flex gap-1 items-center text-error text-sm font-medium tracking-tight">
                    <i class="fa-solid fa-circle text-2xs"></i>Base de datos
                </span>
            </div>
            <template v-for="skyll in skylls">
                <span v-for="item in skyll.data" class="flex gap-2 p-2 font-medium rounded select-none"
                    :class="skyll.color">
                    <img :src="getImageUrl(item.name)" :alt="item.alt" class="w-5">
                    {{ item.alt }}
                </span>
            </template>
        </div>
    </div>
</template>

<script>
import imageZero from "../assets/img/Developer_Zero.png";

export default {
    name: "HomeView",
    data() {
        return {
            name: "Eusebio Pizarro",
            know: ["Frontend Developer", "Backend Developer"],
            description: "Soy desarrollador, que disfruta creando soluciones digitales, resolviendo problemas y diseñando experiencias únicas para los usuarios.",
            skylls: [
                {
                    title: "Frontend",
                    color: "bg-primary/20 text-primary",
                    data: [
                        { name: "Html@logo.svg", alt: "Html" },
                        { name: "Css@logo.svg", alt: "Css" },
                        { name: "JavaScript@logo.svg", alt: "JavaScript" },
                        { name: "Vue@logo.svg", alt: "Vue" },
                        { name: "Vuetify@logo.svg", alt: "Vuetify" },
                        { name: "Tailwindcss@logo.svg", alt: "Tailwind" },
                        { name: "Bootstrap@logo.svg", alt: "Bootstrap" },
                    ]
                },
                {
                    title: "Backend",
                    color: "bg-success/20 text-success",
                    data: [
                        { name: "Php@logo.svg", alt: "Php" },
                        { name: "Node@logo.svg", alt: "Node" },
                    ]
                },
                {
                    title: "Lenguajes de programación",
                    color: "bg-warning/20 text-warning",
                    data: [
                        { name: "Java@logo.svg", alt: "Java" },
                        { name: "Python@logo.svg", alt: "Python" },
                    ]
                },
                {
                    title: "Base de datos",
                    color: "bg-error/20 text-error",
                    data: [
                        { name: "MySQL@logo.svg", alt: "MySQL" },
                    ]
                },
            ],
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
        getPhoto() {
            return imageZero
        },
        getImageUrl: function (name) {
            return new URL(`../assets/img/logos/${name}`, import.meta.url).href
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
<style scoped></style>
