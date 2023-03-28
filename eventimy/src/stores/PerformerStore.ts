import { defineStore } from "pinia";
import type { IPerformer } from "@/model/IPerformer";

/**
 * Defines Storage Of Performer Data.
 */
const usePerformerStore = defineStore({
    id: "performer",
    state: () => ({
        performers: [] as IPerformer[]
    }),
    getters: {},
    actions: {}
});

export default usePerformerStore;