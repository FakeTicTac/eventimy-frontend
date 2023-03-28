
/**
 * Interface Represents Performer Data To Be Sent To And Received From Backend.
 */
export interface IPerformer {
    id: string;
    eventId: string;
    appUserId: string;
    performerTypeId: string;
    name?: string;
    desctiption?: string;
    coverImage?: string;
} 