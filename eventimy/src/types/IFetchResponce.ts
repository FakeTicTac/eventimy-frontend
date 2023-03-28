
/**
 * Interface Represents Response From Backend Server.
 */
export interface IFetchResponce<TData> {

    statusCode: number; // Response Code.
    data?: TData; // Data Sent Back From Backend.
    errorMessage?: string; // Backend Communication.

}
