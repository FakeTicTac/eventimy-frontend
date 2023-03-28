
/**
 * Interface Represents User Event Rating Data To Be Sent To And Received From Backend.
 */
export interface IUserEventRating {
    id: string;
    eventId: string;
    appUserId: string;
    ratingValue: number;
}