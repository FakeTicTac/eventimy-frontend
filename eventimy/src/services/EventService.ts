import { BaseService } from "./BaseService";
import type { IEvent } from "@/model/IEvent";


/**
 * Class Defines Event Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class EventService extends BaseService<IEvent> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("event");
    }
}