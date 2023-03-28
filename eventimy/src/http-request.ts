import axious from "axios";

/**
 * Creating Basic HTTP Request To The Backend.
 */
const httpRequest = axious.create({

    baseURL: "https://localhost:7142/api/v1",
    headers: {
        "Content-Type": "application/json"
    }

})

export default httpRequest;
