import { BaseService } from "./BaseService";
import type { IMediaFileType } from "@/model/IMediaFileType";


/**
 * Class Defines Media File Type Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class MediaFileTypeService extends BaseService<IMediaFileType> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("mediafiletype");
    }
}