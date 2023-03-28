import { defineStore } from "pinia";
import type { IReactionType } from "@/model/IReactionType";

/**
 * Defines Storage Of Reaction Type Data.
 */
const useReactionTypeStore = defineStore({
    id: "reactionType",
    state: () => ({
        reactionTypes: [] as IReactionType[]
    }),
    getters: {},
    actions: {}
});

export default useReactionTypeStore;