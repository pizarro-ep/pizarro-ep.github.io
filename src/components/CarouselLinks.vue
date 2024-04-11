<template>
    <div class="w-full animate-scale-up-center">
        <div class="overflow-hidden">
            <figure
                class="relative w-[1200%] m-0 left-0 animate-slide-y-2 sm:animate-slide-y-3 lg:animate-slide-y-4 xl:animate-slide-y-6">
                <div v-for="item in imgs"
                    class="w-[calc(100%/24)] sm:w-[calc(100%/36)] lg:w-[calc(100%/48)] xl:w-[calc(100%/72)] float-left flex justify-center">
                    <img :src="getImageUrl(item.name)" :alt="item.alt" class="w-3/5">
                </div>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const imgs = [
            { name: "Html@logo.svg", alt: "Html" },
            { name: "Css@logo.svg", alt: "Css" },
            { name: "JavaScript@logo.svg", alt: "JavaScript" },
            { name: "Php@logo.svg", alt: "Php" },
            { name: "Vue@logo.svg", alt: "Vue" },
            { name: "Vuetify@logo.svg", alt: "Vuetify" },
            { name: "Tailwindcss@logo.svg", alt: "Tailwindcss" },
            { name: "Bootstrap@logo.svg", alt: "Bootstrap" },
            { name: "Node@logo.svg", alt: "Node" },
            { name: "Java@logo.svg", alt: "Java" },
            { name: "Python@logo.svg", alt: "Python" },
            { name: "MySQL@logo.svg", alt: "MySQL" },
            { name: "Html@logo.svg", alt: "Html" },
            { name: "Css@logo.svg", alt: "Css" },
            { name: "JavaScript@logo.svg", alt: "JavaScript" },
            { name: "Php@logo.svg", alt: "Php" },
            { name: "Vue@logo.svg", alt: "Vue" },
            { name: "Vuetify@logo.svg", alt: "Vuetify" },
        ]

        const getImageUrl = (name) => {
            return new URL(`../assets/img/logos/${name}`, import.meta.url).href
        }
        return { imgs, getImageUrl }
    }
}
</script>
<style scoped></style>