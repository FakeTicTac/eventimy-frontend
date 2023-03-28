import { BaseService } from "./BaseService";
import type { IUserInEvent } from "@/model/IUserInEvent";


/**
 * Class Defines User In Event Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class UserInEventService extends BaseService<IUserInEvent> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("userinevent");
    }
}