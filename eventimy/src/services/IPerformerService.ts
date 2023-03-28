import { BaseService } from "./BaseService";
import type { IPerformer } from "@/model/IPerformer";


/**
 * Class Defines Performer Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class MediaFileTypeService extends BaseService<IPerformer> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("performer");
    }
}