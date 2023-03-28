
/**
 * Interface Represents Event Reaction Data To Be Sent To And Received From Backend.
 */
export interface IEventReaction {
    id: string;
    eventId?: string;
    appUserId?: string;
    reactionTypeId?: string;
} 