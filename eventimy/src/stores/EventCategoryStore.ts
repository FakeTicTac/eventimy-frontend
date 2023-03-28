import { defineStore } from "pinia";
import type { IEventCategory } from "@/model/IEventCategory";

/**
 * Defines Storage Of Event Category Data.
 */
const useEventCategoryStore = defineStore({
    id: "eventCategory",
    state: () => ({
        EventCategories: [] as IEventCategory[]
    }),
    getters: {},
    actions: {}
});

export default useEventCategoryStore;