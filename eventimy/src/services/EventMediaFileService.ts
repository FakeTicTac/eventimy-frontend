import { BaseService } from "./BaseService";
import type { IEventMediaFile } from "@/model/IEventMediaFile";


/**
 * Class Defines Event Media File Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class EventMediaFileService extends BaseService<IEventMediaFile> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("eventmediafile");
    }
}