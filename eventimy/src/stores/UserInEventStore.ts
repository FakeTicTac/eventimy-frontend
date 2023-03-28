import { defineStore } from "pinia";
import type { IUserInEvent } from "@/model/IUserInEvent";

/**
 * Defines Storage Of User In Event Data.
 */
const useUserInEventStore = defineStore({
    id: "userInEvent",
    state: () => ({
        userInEvents: [] as IUserInEvent[]
    }),
    getters: {},
    actions: {}
});

export default useUserInEventStore;