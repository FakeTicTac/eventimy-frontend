
/**
 * Interface Represents Subscription Data To Be Sent To And Received From Backend.
 */
export interface ISubscription {
    id: string;
    senderId: string;
    recipientId: string;
    isAccepted: boolean;
}