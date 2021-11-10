import axios from '../config/axios-config'
import Vue from 'vue'
import router from '../router';

const auth = {
    namespaced: true,
    state: {
        user: false,
        profile: [],
        loading: false,
    },
    getters: {
        profileData(state) {
            return state.profile;
        }
    },
    mutations: {
        login(state, payload) {
            localStorage.setItem('user', payload.data.access_token);
            state.profile = payload.data;
            state.user = true;
        },
        loginFailure(state) {
            state.user = false;
        },
        logout(state) {
            localStorage.removeItem('user');
            state.user = false;
            state.profile = "";
            Vue.$toast.error("Logged out successfully", {
                timeout: 2000
            });
            router.push('/');
        }
    },
    actions: {
        login(context, payload) {
            this.state.loading = true;
            // console.log('@@', this.state.loading);
            axios.post('auth/login', { email: payload.email, password: payload.password })
                .then((response) => {
                    if (response.data.data !== null) {
                        context.commit('login', response.data);
                        this.state.loading = false;
                        Vue.$toast.success("Logged in successfully", {
                            timeout: 2000
                        });
                        router.push('/dashboard');
                    } else {
                        this.state.loading = false;
                        Vue.$toast.error(response.data.message, {
                            timeout: 2000
                        });
                    }
                }).catch((error) => {
                    context.commit('loginFailure', error);
                })
        },
        logout(context) {
            context.commit('logout');
        }
    },
    strict: true,
}

export default auth