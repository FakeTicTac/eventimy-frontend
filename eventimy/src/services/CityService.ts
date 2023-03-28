import { BaseService } from "./BaseService";
import type { ICity } from "@/model/ICity";


/**
 * Class Defines City Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class CityService extends BaseService<ICity> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("city");
    }
}