import { BaseService } from "./BaseService";
import type { IPerformerType } from "@/model/IPerformerType";


/**
 * Class Defines Performer Type Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class PerformerTypeService extends BaseService<IPerformerType> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("performertype");
    }
}