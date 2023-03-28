import { BaseService } from "./BaseService";
import type { IUserEventRating } from "@/model/IUserEventRating";


/**
 * Class Defines User Event Rating Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class UserEventRatingService extends BaseService<IUserEventRating> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("usereventrating");
    }
}