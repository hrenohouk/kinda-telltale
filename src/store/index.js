import Vue from 'vue';
import Vuex from 'vuex';
import structure from './structure';
import { SET_NEW_SCREEN } from './const';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        structure,
        currentScreen: structure[0]
    },
    mutations: {
        [SET_NEW_SCREEN](state, newScreen) {
            state.currentScreen = newScreen;
        }
    },
    actions: {
    },
    modules: {
    }
});
