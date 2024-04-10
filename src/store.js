import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    state: {
        theme: localStorage.getItem("theme") || "dark",
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
            localStorage.setItem('theme', theme);
        },
    },
    getters: {
        getTheme(state) {
            return state.theme
        }
    },
    actions: {
        toggleTheme({ commit }) {
            const _theme = 'dark'
            commit('setTheme', _theme);
        },
    },
})
