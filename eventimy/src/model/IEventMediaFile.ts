
/**
 * Interface Represents Event Media File Data To Be Sent To And Received From Backend.
 */
export interface IEventMediaFile {
    id: string;
    eventId?: string;
    mediaFileTypeId?: string;
    mediaFile?: string;
} 