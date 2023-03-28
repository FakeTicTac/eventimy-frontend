
/**
 * Interface Represents Registration Data To Be Sent To Backend.
 */
export interface IRegister {
    email: string;
    password: string;

    // Optional For Backend
    username?: string;
    firstName?: string;
    lastName?: string;
}
