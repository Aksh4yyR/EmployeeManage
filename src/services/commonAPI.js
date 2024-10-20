import axios from "axios";
import SERVER_URL from "./serverUrl"; 

const commonAPI = async (httpMethod, url, reqBody) => {
    const requestConfig = {
        method: httpMethod,
        url,
        data: reqBody,
    };

    try {
        const response = await axios(requestConfig);
        return response;
    } catch (err) {
        if (err.response) {
            // The request was made and the server responded with a status code
            console.error("API call error:", err.response.data); // Log the error response data
        } else if (err.request) {
            // The request was made but no response was received
            console.error("API call error: No response received");
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("API call error:", err.message);
        }
        throw err; // Re-throw to handle in the calling function
    }
};

export default commonAPI;
