import { BaseService } from "./BaseService";
import type { ISubscription } from "@/model/ISubscription";


/**
 * Class Defines Subscription Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class SubscriptionService extends BaseService<ISubscription> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("subscription");
    }
}