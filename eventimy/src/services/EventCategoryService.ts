import { BaseService } from "./BaseService";
import type { IEventCategory } from "@/model/IEventCategory";


/**
 * Class Defines Event Category Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class EventCategoryService extends BaseService<IEventCategory> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("eventcategory");
    }
}