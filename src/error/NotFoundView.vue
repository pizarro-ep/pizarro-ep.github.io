<template>
    <div class="w-full h-screen flex flex-col gap-5 items-center justify-center py-5 overflow-hidden">
        <img src="../assets/img/error_404.svg" alt="" class="w-1/2">
        <div class="flex flex-col items-center">
            <div class="text-black/70 dark:text-white/70 text-center text-xl font-bold px-5">
                Vaya, la página que estás buscando no está disponible.
            </div>
            <div class="max-w-[370px] text-sm text-center text-secondary font-medium px-5 py-3">
                Lamentamos el inconveniente. La página a la que intenta acceder ha sido eliminada o nunca existió.
            </div>
        </div>
        <button class="btn btn-primary" @click="goBack()">
            <i class="fa-solid fa-left-long mr-2"></i> IR AL INICIO
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        goBack() { this.$router.push("/"); }
    }
}
</script>