
/**
 * Interface Represents Response Of Identity Token From Backend Server.
 */
export interface IJWTResponse {

    tokenValue: string,  // Token For Access.
    refreshTokenValue: string;  // Token To Refresh Access Token.

    // User Data
    username?: string, 
    role?: string; 

}

