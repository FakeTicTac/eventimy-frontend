
/**
 * Interface Represents City Data To Be Sent To And Received From Backend.
 */
export interface ICity {
    id: string;
    countryId?: string;
    name?: string;
    alpha3Code?: string;
    coverImagePath?: string;
}