import { defineStore } from "pinia";
import type { ICity } from "@/model/ICity";

/**
 * Defines Storage Of City Data.
 */
const useCityStore = defineStore({
    id: "city",
    state: () => ({
        cities: [] as ICity[]
    }),
    getters: {},
    actions: {}
});

export default useCityStore;