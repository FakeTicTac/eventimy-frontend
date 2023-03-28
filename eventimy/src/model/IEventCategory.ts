
/**
 * Interface Represents Event Category Data To Be Sent To And Received From Backend.
 */
export interface IEventCategory {
    id: string;
    parentEventCategoryId?: string;
    title?: string;
    description?: string;
    signImagePath?: string;
} 