import httpRequest from "@/http-request";

import type { AxiosError } from "axios";
import type { ILogin } from "@/model/identity/ILogin";
import type { IFetchResponce } from "@/types/IFetchResponce";
import type { IRegister } from "@/model/identity/IRegister";
import type { IJWTResponse } from "@/model/identity/IJwtResponse";

import useIdentityStore from "@/stores/identity/IdentityStore";


/**
 * Class Defines Identity Operations With Backend. (Connect And Retreive Data)
 */
export class IdentityService {

    /**
     * Defines Access To Identity Store - JWT Tokens.
     */
    identityStore = useIdentityStore();


    /**
     * Method Allows User To Login Into System.
     * @param {ILogin} login Defines Login Data.
     * @returns {Promise<IFetchResponce<IJWTResponse>>} Response From API.
     */
    async login(login: ILogin): Promise<IFetchResponce<IJWTResponse>> {
        return this.fetchData("login", login);
    }

    /**
     * Method Allows User To Register Into System.
     * @param {IRegister} register Defines Register Data
     * @returns {Promise<IFetchResponce<IJWTResponse>>} Response From API.
     */
    async register(register: IRegister) {
        return this.fetchData("register", register);
    }

    /**
     * Method Refreshes Users Token To Access Backend.
     * @returns {Promise<IFetchResponce<IJWTResponse>>} Response From API.
     */
    async refreshIdentity(): Promise<IFetchResponce<IJWTResponse>> {
        return this.fetchData("refreshtoken", {
            tokenValue: this.identityStore.$state.jwt?.tokenValue as string,
            refreshTokenValue: this.identityStore.$state.jwt?.refreshTokenValue as string,
        });
    }


    // Helping Methods.


    /**
     * Method Allows To Create Identity Related Fetch To Backend.
     * @param {string} path Defines Action Method In Backend Identity Controller.
     * @param {ILogin | IRegister | IJWTResponse} parseObj Defines Object To Be Sent To Backend.
     * @returns {Promise<IFetchResponce<IJWTResponse>>} Response From API.
     */
    async fetchData(path: string, parseObj: ILogin | IRegister | IJWTResponse): Promise<IFetchResponce<IJWTResponse>> {

        let response;

        // Try To Refresh Token.
        try {

            response = await httpRequest.post(`/identity/account/${path}`, parseObj);

            return {
                statusCode: response.status,
                data: response.data as IJWTResponse
            }
        } catch (error) {

            return {
                statusCode: (error as AxiosError).response!.status,
                errorMessage: (error as AxiosError).response!.data as string

            }
        }
    }
}
