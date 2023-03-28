import { BaseService } from "./BaseService";
import type { IEventReaction } from "@/model/IEventReaction";


/**
 * Class Defines Event Reaction Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class EventReactionService extends BaseService<IEventReaction> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("eventreaction");
    }
}