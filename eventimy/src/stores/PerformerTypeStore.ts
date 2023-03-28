import { defineStore } from "pinia";
import type { IPerformerType } from "@/model/IPerformerType";

/**
 * Defines Storage Of Performer Type Data.
 */
const usePerformerTypeStore = defineStore({
    id: "performerType",
    state: () => ({
        performerType: [] as IPerformerType[]
    }),
    getters: {},
    actions: {}
});

export default usePerformerTypeStore;