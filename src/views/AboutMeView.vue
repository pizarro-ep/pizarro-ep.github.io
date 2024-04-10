<template>
    <div class="w-full min-h-screen flex flex-col justify-center items-center gap-10 px-5 md:px-10 lg:px-16 pt-10 md:pt-0
        overflow-hidden">
        <div class="flex flex-col items-center gap-3 transition-props transition-up scale-50">
            <span class="text-black/90 dark:text-white/90 text-center text-3xl font-bold uppercase">
                ¿Qué puedo hacer?
            </span>
            <span class="w-10 h-1.5 bg-default rounded"></span>
            <span class="max-w-3xl text-secondary text-center font-medium mt-5">
                En la actualidad, me dedico al diseño y el desarrollo de sitios de aplicaciones web y de escritorio,
                tanto en el lado del cliente como en el del servidor.
                Me mantengo constantemente actualizado, adquiriendo nuevos conocimientos en función de las demandas y
                tendencias tecnológicas del mercado actual y futuro en el campo del diseño, desarrollo de aplicaciones
                web y de escritorio en general.
                Me siento muy motivado por mi trabajo, ya que puedo aportar mis conocimientos, habilidades, ofrecer
                nuevas ideas, soluciones personalizadas, y asegurarme de que se cumplan los estándares de calidad en
                cada proyecto que realizo, ayudando así a los clientes a lograr sus objetivos.
            </span>
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
export default {
    data() {
        return {
            skylls: skylls,
            email: "pizarroe022@gmail.com",
            copied: false,
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
        copyEmail: function () {
            const input = document.createElement('input');
            input.style.position = 'fixed';
            input.style.opacity = 0;
            input.value = this.email;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            this.copied = true;
            setTimeout(() => {
                this.copied = false;
            }, 3000);
        },
        handleScroll() {
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