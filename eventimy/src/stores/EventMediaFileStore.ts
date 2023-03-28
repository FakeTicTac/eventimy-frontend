import { defineStore } from "pinia";
import type { IEventMediaFile } from "@/model/IEventMediaFile";

/**
 * Defines Storage Of Event Media File Data.
 */
const useEventMediaFileStore = defineStore({
    id: "eventMediaFile",
    state: () => ({
        eventMediaFiles: [] as IEventMediaFile[]
    }),
    getters: {},
    actions: {}
});

export default useEventMediaFileStore;