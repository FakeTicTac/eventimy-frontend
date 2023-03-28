
/**
 * Interface Represents Event Data To Be Sent To And Received From Backend.
 */
export interface IEvent {
    id: string;
    cityId?: string;
    appUserId?: string;
    parentEventId?: string;
    eventCategoryId?: string;
    title?: string;
    summary?: string;
    description?: string;
    eventWebsite?: string;
    maxParticipantAmount?: number;
    minParticipantAmount?: number;
    ticketBuyingWebsite?: string;
    isPrivate?: string;
    isFree?: string;
    address?: string;
    startTime?: string;
    endTime?: string;
    lattitude?: number;
    logtitude?: number;
    coverImage?: string;
    thumbNailImage?: string;
} 