export const state = () => ({
    user: null
});
  
export const mutations = {
    setUser(state, payload) {
        state.user = payload;
    }
};

export const getters = {
    getUser(state) {
        return state.user;
    }
};

export const actions = {

    async login(state, payload) {
        state.commit('setUser', {
            id: 1,
            name: 'Demo User',
            company: 'Demo company'
        });
    },

    async register(state, payload) {
        state.commit('setUser', {
            id: 1,
            name: 'Demo User',
            company: 'Demo company'
        });
    }
};