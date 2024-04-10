<template>
    <div class="w-full min-h-screen flex flex-col justify-center items-center gap-10 px-5 md:px-10 lg:px-16 pt-10 md:pt-0
        overflow-hidden">
        <div class="flex flex-col items-center gap-3 transition-props transition-up scale-50">
            <span class="text-black/90 dark:text-white/90 text-center text-3xl font-bold uppercase">
                Contácteme
            </span>
            <span class="w-10 h-1.5 bg-default rounded"></span>
            <span class="max-w-3xl text-secondary text-center font-medium mt-5">
                No dude en ponerse en contacto conmigo, escríbame al siguiene correo, me pondré en contacto con usted lo
                antes posible.
            </span>
        </div>
        <div class="flex gap-3 items-center transition-props transition-up scale-50">
            <div class="relative p-0">
                <input type="text" :value="email" readonly
                    class="pl-4 pr-8 py-2 bg-surface-light dark:bg-surface-dark text-secondary font-semibold outline-0 border-2 border-surface-light dark:border-surface-dark focus:border-primary rounded-md">
                <span v-if="!copied" class="absolute right-4 top-2.5">
                    <i title="Copiar"
                        class="fa-regular fa-clipboard text-black/50 dark:text-white/50 hover:text-primary cursor-pointer"
                        @click="copyEmail"></i>
                </span>
                <span v-else class="absolute right-4 top-3">
                    <i title="Copiado" class="fa-solid fa-check text-success cursor-pointer"></i>
                </span>
            </div>
            <a :href="`mailto:${email}`" class="btn btn-warning text-lg"><i class="fa-solid fa-envelope"></i></a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
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