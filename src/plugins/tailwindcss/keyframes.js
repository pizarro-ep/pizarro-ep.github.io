module.exports = {
    'slide-in-left': {
        '0%': {
            transform: 'translateX(-100%)',
            opacity: '0'
        },
        '100%': {
            transform: 'translateX(0)',
            opacity: '1'
        },
    },
    'slide-in-right': {
        '0%': {
            transform: 'translateX(100%)',
            opacity: '0'
        },
        '100%': {
            transform: 'translateX(0)',
            opacity: '1'
        },
    },
    'flip-text': {
        '0%': { marginTop: '-100px' },
        '5%': { marginTop: '-50px' },
        '50%': { marginTop: '-50px' },
        '55%': { marginTop: '0px' },
        '99.99%': { marginTop: '0px' },
        '100%': { marginTop: '-150px' },
    },
    'slide-y-2': {
        '0%': { left: '0%' },
        '11.5%': { left: '0%' },
        '16.5%': { left: '-100%' },
        '28%': { left: '-100%' },
        '33%': { left: '-200%' },
        '44.5%': { left: '-200%' },
        '49.5%': { left: '-300%' },
        '61%': { left: '-300%' },
        '66%': { left: '-400%' },
        '78.5%': { left: '-400%' },
        '83.5%': { left: '-500%' },
        '95%': { left: '-500%' },
        '99.99%': { left: '-600%' },
        '100%': { left: '-700%' },
    },
    'slide-y-3': {
        '0%': { left: '0%' },
        '20%': { left: '0%' },
        '25%': { left: '-100%' },
        '45%': { left: '-100%' },
        '50%': { left: '-200%' },
        '70%': { left: '-200%' },
        '75%': { left: '-300%' },
        '95%': { left: '-300%' },
        '99.99%': { left: '-400%' },
        '100%': { left: '-500%' },
    },
    'slide-y-4': {
        '0%': { left: '0%' },
        '28.33%': { left: '0%' },
        '33.33%': { left: '-100%' },
        '61.66%': { left: '-100%' },
        '66.66%': { left: '-200%' },
        '94.99%': { left: '-200%' },
        '99.99%': { left: '-300%' },
        '100%': { left: '-400%' },
    },
    'slide-y-6': {
        '0%': { left: '0%' },
        '45%': { left: '0%' },
        '50%': { left: '-100%' },
        '95%': { left: '-100%' },
        '99.99%': { left: '-200%' },
        '100%': { left: '-300%' },
    },
    "scale-up-center": {
        "0%": { transform: "scale(0.5)" },
        "100%": { transform: "scale(1)" }
    },
    "rotate-vertical-center": {
        "0%": { transform: "rotateY(0)" },
        "100%": { transform: "rotateY(360deg)" }
    },
    "rotate-figure": {
        "0%": { transform: "translateY(0) rotate(0deg)", opacity: 1, "border-radius": 0 },
        "100%": { transform: "translateY(-1000px) rotate(720deg)", opacity: 0, "border-radius": '50%' }
    },
}