import { defineStore } from "pinia";
import type { IEvent } from "@/model/IEvent";

/**
 * Defines Storage Of Event Data.
 */
const useEventStore = defineStore({
    id: "event",
    state: () => ({
        events: [] as IEvent[]
    }),
    getters: {},
    actions: {}
});

export default useEventStore;