import { defineStore } from "pinia";
import type { ISubscription } from "@/model/ISubscription";

/**
 * Defines Storage Of Subscription Data.
 */
const useSubscriptionStore = defineStore({
    id: "subscription",
    state: () => ({
        subscriptions: [] as ISubscription[]
    }),
    getters: {},
    actions: {}
});

export default useSubscriptionStore;