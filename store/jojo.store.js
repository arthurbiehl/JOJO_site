
import { defineStore } from 'pinia'

export const useJojo = defineStore('jojo', {

    state() {
        return {
            jojo: [],
            jojoP: {},
            stands: [],
            stand: {},


        }
    },

    actions: {

        async getJojo() {
            this.jojo = [];
            const response = await $fetch('https://stand-by-me.herokuapp.com/api/v1/characters', {
                method: 'GET',

            })


            this.jojo = response;
        },

        
        async getJojoP(id) {
            this.jojoP = [];
            const response = await $fetch(`https://stand-by-me.herokuapp.com/api/v1/characters/${id}`, {
                method: 'GET',

            })


            this.jojoP = response;
        },

        async getStands() {
            this.stands = [];
            const response = await $fetch('https://stand-by-me.herokuapp.com/api/v1/stands', {
                method: 'GET',

            })


            this.stands = response;
        },

        
        async getStand(id) {
            this.stand = [];
            const response = await $fetch(`https://stand-by-me.herokuapp.com/api/v1/stands/${id}`, {
                method: 'GET',

            })


            this.stand = response;
        },

    },

})