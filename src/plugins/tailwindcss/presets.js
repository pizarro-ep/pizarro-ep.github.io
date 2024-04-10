module.exports = {
    theme: {
        extend: {
            colors: {
                // bg colors
                body: { light: '#F0F1F7', dark: '#242424', },
                surface: { light: '#FCFCFC', dark: '#2B2E31' },
                container: { light: '#FFFFFF', dark: '#1A1C1E', },

                // principal colors
                default: '#9c27b0', primary: '#0ea5e9', secondary: '#64748b', success: '#10b981', error: '#ef4444', warning: '#f59e0b', info: '#14b8a6',
            },
            borderRadius: { stst: "70% 30% 30% 70% / 60% 40% 60% 40%", },
            fontSize: { '2xs': '10px', '3xs': '8px', },
            zIndex: { 9: "9", 8: "8", 7: "7", },
            scale: { 85: ".85", 70: ".7", },
            opacity: { 85: "85", },
            gridAutoColumns: {
                2: "calc(100% / 2)",
                4: "calc(100% / 4)",
                6: "calc(100% / 6)",
                full: "100%",
            },
            // animation
            animation: require('./animation'),
            keyframes: require('./keyframes'),
        },
    },
}