import { BaseService } from "./BaseService";
import type { ICountry } from "@/model/ICountry";


/**
 * Class Defines Country Service Basic Operations With Backend. (Connect And Retreive Data)
 */
export class CountryService extends BaseService<ICountry> {

    /**
     * Basic Service Constructor. Defines Specific Path To Be Accessed In Backend.
     */
    constructor() {
        super("country");
    }
}