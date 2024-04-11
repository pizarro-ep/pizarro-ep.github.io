<template>
    <div class="z-[999] fixed w-full flex justify-between py-5 px-3 sm:px-10"
        :class="isSticky ? 'bg-surface-light/50 dark:bg-surface-dark/50 backdrop-blur-md' : 'bg-transparent'">
        <div class="flex gap-3 items-center">
            <a href="/" class="flex items-center">
                <img :src="getLogo()" class="h-10" alt="Zero" />
            </a>
            <span class="text-primary text-2xl font-bold">
                {{ ($route && $route.name && $route.name === 'home') ? "Ep Pizarro" : `${$route.name}`.toUpperCase() }}
            </span>
        </div>
        <div class="flex gap-3 items-center">
            <button class="me-12 text-2xl text-secondary hover:text-primary" @click="toggleTheme()">
                <span v-if="theme === 'dark'"><i class="fa fa-sun"></i></span>
                <span v-else><i class="fa fa-moon"></i></span>
            </button>
            <button type="button"
                class="absolute right-3 sm:right-10 group inline-flex flex-col gap-2 items-center px-1 w-10 h-10 justify-center rounded-lg focus:outline-none hover:rotate-childs"
                @click="isOpenMenu = !isOpenMenu">
                <span class="sr-only">Open main menu</span>
                <div class="h-1 bg-secondary w-full rounded transition-all duration-500 group-hover:bg-primary"
                    :class="isOpenMenu ? 'rotate-child-3d-1' : 'rotate-child-y'">
                </div>
                <div class="h-1 bg-secondary w-full rounded transition-all duration-[.4s]  group-hover:bg-primary"
                    :class="isOpenMenu ? 'hidden' : 'rotate-child-y'"></div>
                <div class="h-1 bg-secondary w-full rounded transition-all duration-300  group-hover:bg-primary"
                    :class="isOpenMenu ? 'rotate-child-3d-3' : 'rotate-child-y'">
                </div>
            </button>
        </div>
    </div>
    <div class="z-50 fixed w-full flex flex-col justify-center bg-surface-light/50 dark:bg-surface-dark/50 transition-height duration-500 backdrop-blur-md"
        :class="isOpenMenu ? 'h-screen' : 'h-0'">
        <ul class="bg-animate absolute top-0 left-0 w-full h-full overflow-hidden">
            <li v-for="i in 10" class="absolute block list-none w-5 h-5 bg-sky-500/25 -bottom-40 animate-rotate-figure">
            </li>
        </ul>
        <div v-if="isOpenMenu"
            class="flex flex-col gap-5 sm:gap-10 pl-[15%] sm:pl-[25%] text-3xl sm:text-5xl uppercase font-bold transition-all">
            <div v-for="item in getMenu()">
                <a :href="item.href"
                    class="relative text-secondary hover:text-primary uppercase transition-all duration-500 before:content-[''] before:w-0 before:absolute before:transition-all before:duration-500 before:opacity-0 before:-mb-1 before:left-0 before:bottom-0 before:border-b-4 before:border-primary before:rounded hover:before:opacity-80 hover:before:w-full hover:tracking-wide"
                    @click="isOpenMenu = !isOpenMenu">
                    <i class="" :class="item.icon"></i>
                    {{ item.title }}
                </a>
            </div>
        </div>
    </div>
    <div id="isStickyNav"></div>
</template>

<script>
import Logo from "../assets/img/Zero@logo.svg"

export default {
    name: "NavBar",
    data() {
        return {
            theme: localStorage.getItem("theme") ?? "dark",
            isOpenMenu: false,
            isMediumScreen: window.matchMedia("(min-width: 768px)").matches,
            isSticky: false,
        }
    },
    mounted() {
        this.setTheme()
        this.checkScreenSize();
        window.addEventListener("resize", this.checkScreenSize);
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        // Desuscribirse del evento resize al destruir el componente
        window.removeEventListener("resize", this.checkScreenSize);
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        checkScreenSize() {
            this.isMediumScreen = window.matchMedia("(min-width: 768px)").matches;
        },
        handleScroll() {
            const isStickyNav = document.getElementById("isStickyNav");
            const offset = isStickyNav.getBoundingClientRect().top;
            this.isSticky = offset < 0;
        },
        getLogo() {
            return Logo
        },
        getMenu() {
            return [
                { title: "Inicio", icon: "fa fa-home", href: "/" },
                { title: "Sobre mí", icon: "fa fa-address-card", href: "/#/about" },
                { title: "Proyectos", icon: "fa fa-folder-open", href: "/#/projects" },
                { title: "Contacto", icon: "fa fa-address-book", href: "/#/contact" },
            ]
        },
        setTheme() {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
                document.documentElement.classList.add('dark')
            else document.documentElement.classList.remove('dark')
        },
        toggleTheme() {
            this.theme = localStorage.theme === "dark" ? "light" : "dark"
            localStorage.setItem("theme", this.theme)
            this.setTheme()
        },
    }
}

</script>

<style scoped>
.bg-animate li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.bg-animate li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.bg-animate li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.bg-animate li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.bg-animate li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.bg-animate li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.bg-animate li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.bg-animate li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.bg-animate li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.bg-animate li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
</style>