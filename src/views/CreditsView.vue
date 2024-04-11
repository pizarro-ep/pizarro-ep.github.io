<template>
    <div class="w-full min-h-screen flex flex-col justify-center items-center gap-10 px-5 md:px-10 lg:px-16 pt-10 md:pt-0
        overflow-hidden">
        <div class="flex flex-col items-center gap-5 transition-props transition-up scale-50">
            <span class="text-black/90 dark:text-white/90 text-center text-3xl font-bold uppercase select-none">
                Créditos
            </span>
            <span class="w-10 h-1.5 bg-default rounded"></span>
            <div class="flex flex-col items-center gap-2 pt-5">
                <div class="flex flex-col items-center gap-3">
                    <span class="text-primary select-none">Elaboración del sitio web</span>
                    <span class="text-secondary font-bold select-none">Eusebio Pizarro</span>
                </div>
                <div class="flex flex-col items-center gap-2 pt-3">
                    <span class="text-primary select-none">Íconos e imágenes</span>
                    <a href="https://fontawesome.com/" class="underline text-secondary hover:text-primary/50"
                        target="blank">
                        Fontawesome
                        <span class="italic">https://fontawesome.com/</span>
                        <i class="fa-solid fa-up-right-from-square ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll()
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
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