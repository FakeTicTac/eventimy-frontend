
/**
 * Interface Represents App User Data To Be Sent To And Received From Backend.
 */
export interface IAppUser {
    id: string;
    appRoleId?: string;
    firstName?: string;
    lastName?: string;
    profileImagePath?: string;
    coverImagePath?: string;
    description?: string;
} 