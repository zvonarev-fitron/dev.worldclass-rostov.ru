export const AsideLeft = {
    namespaced: true,
    state: {
        is_toggle_aside_left: false
    },
    mutations: {
        ToggleAsideLeft: state => {
            state.is_toggle_aside_left = state.is_toggle_aside_left ? false : true;
        }
    }
};
