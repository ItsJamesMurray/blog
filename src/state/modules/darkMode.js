const module = {
    state: {
        darkMode: false
    },
    mutations: {
        TOGGLE_DARK_MODE: (state, toggle) => {
            state.darkMode = toggle
        }
    }
}

export default module
