import { defineStore } from "pinia";
import type { IMediaFileType } from "@/model/IMediaFileType";

/**
 * Defines Storage Of Media File Type Data.
 */
const useMediaFileTypeStore = defineStore({
    id: "mediaFileType",
    state: () => ({
        mediaFileTypes: [] as IMediaFileType[]
    }),
    getters: {},
    actions: {}
});

export default useMediaFileTypeStore;