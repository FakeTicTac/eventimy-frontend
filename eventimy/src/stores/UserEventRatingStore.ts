import { defineStore } from "pinia";
import type { IUserEventRating } from "@/model/IUserEventRating";

/**
 * Defines Storage Of User Event Rating Data.
 */
const useUserEventRatingStore = defineStore({
    id: "userEventRating",
    state: () => ({
        userEventRatings: [] as IUserEventRating[]
    }),
    getters: {},
    actions: {}
});

export default useUserEventRatingStore;