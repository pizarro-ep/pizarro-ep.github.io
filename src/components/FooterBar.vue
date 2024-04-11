<template>
    <div class="w-full flex flex-col gap-5 px-5 sm:px-10 md:px-20 lg:px-44 pt-16 pb-8 bg-secondary/20 shadow-lg">
        <div class="flex flex-col md:flex-row justify-between gap-x-16 gap-y-10">
            <div class="flex flex-col gap-5">
                <span class="text-black/80 dark:text-white/80 text-xl text-center md:text-left font-bold">
                    EP Pizarro
                </span>
                <span
                    class="text-black/75 dark:text-white/75 text-sm sm:text-base text-center md:text-left font-medium">
                    Soy desarrollador, que disfruta creando soluciones digitales, resolviendo problemas y
                    diseñando experiencias únicas para los usuarios.</span>
            </div>
            <div class="flex flex-col gap-5 ">
                <span class="text-black/80 dark:text-white/80 text-lg text-center md:text-left font-bold">
                    SOCIAL
                </span>
                <div class="flex gap-4 justify-center pb-5">
                    <a v-for="sml in getSocialMediaLinks()" :href="sml.href" target="_blank"
                        class="relative w-10 h-10 flex justify-center items-center bg-secondary/20 text-secondary rounded-full text-2xl border-2 border-secondary/20 transition duration-500 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:transition before:duration-500 before:scale-90 before:z-[-1] hover:before:scale-110 hover:shadow-[0_0_20px] hover:before:shadow-[0_0_20px]"
                        :class="sml.color">
                        <i :class="sml.icon"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="pt-5 text-center border-t border-secondary/20">
            <span class="text-black/80 dark:text-white/80 font-medium">
                Copyright © 2024.
                <router-link to="/"
                    class="relative hover:text-primary font-semibold transition-all duration-500 before:content-[''] before:w-0 before:absolute before:transition-all before:duration-500 before:opacity-0 before:-mb-1 before:left-0 before:bottom-0 before:border-b-2 before:border-primary before:rounded hover:before:opacity-80 hover:before:w-full">
                    Eusebio Pizarro
                </router-link>
                . Todos los derechos reservados.
            </span>
            <br>
            <a href="/#/credits"
                class="relative text-2xs text-black/75 dark:text-white/75 hover:text-primary transition-all duration-500 before:content-[''] before:w-0 before:absolute before:transition-all before:duration-500 before:opacity-0 before:-mb-1 before:left-0 before:bottom-0 before:border-b-2 before:border-primary before:rounded hover:before:opacity-80 hover:before:w-full hover:tracking-wide">Créditos
                de la web</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            theme: localStorage.getItem("theme") ?? "dark",
            isOpenMenu: false,
            isMediumScreen: window.matchMedia("(min-width: 768px)").matches
        }
    },
    methods: {
        getSocialMediaLinks: function () {
            return [
                { icon: "fab fa-facebook", color: this.buildClass('facebook'), href: "https://www.facebook.com/pizarro.ep" },
                { icon: "fab fa-instagram", color: this.buildClass('instagram'), href: "https://www.instagram.com/pizarro.ep" },
                { icon: "fab fa-github", color: this.buildClass('github'), href: "https://github.com/zero-iteza" },
                { icon: "fab fa-linkedin", color: this.buildClass('linkedin'), href: "https://www.linkedin.com/in/zeroep" },
            ]
        },
        buildClass(type) {
            const color = {
                facebook: 'hover:text-primary hover:bg-primary/20 hover:border-primary hover:shadow-primary hover:before:shadow-primary',
                instagram: 'hover:text-error hover:bg-error/20 hover:border-error hover:shadow-error hover:before:shadow-error',
                github: 'hover:text-success hover:bg-success/20 hover:border-success hover:shadow-success hover:before:shadow-success',
                linkedin: 'hover:text-default hover:bg-default/20 hover:border-default hover:shadow-default hover:before:shadow-default',
            }
            return color[type]
        },
    }
}

</script>
