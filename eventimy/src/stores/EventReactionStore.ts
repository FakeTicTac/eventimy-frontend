import { defineStore } from "pinia";
import type { IEventReaction } from "@/model/IEventReaction";

/**
 * Defines Storage Of Event Reaction Data.
 */
const useEventReactionStore = defineStore({
    id: "eventReaction",
    state: () => ({
        eventReactions: [] as IEventReaction[]
    }),
    getters: {},
    actions: {}
});

export default useEventReactionStore;