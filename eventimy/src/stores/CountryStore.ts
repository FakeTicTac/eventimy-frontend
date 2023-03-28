import { defineStore } from "pinia";
import type { ICountry } from "@/model/ICountry";

/**
 * Defines Storage Of Country Data.
 */
const useCountryStore = defineStore({
    id: "countries",
    state: () => ({
        countries: [] as ICountry[]
    }),
    getters: {},
    actions: {}
});

export default useCountryStore;