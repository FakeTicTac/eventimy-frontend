import { BaseService } from "./BaseService";
import type { IReactionType } from "@/model/IReactionType";


/**
 * Class Defines Reaction Type Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class ReactionTypeService extends BaseService<IReactionType> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("reactiontype");
    }
}