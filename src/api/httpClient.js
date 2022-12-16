/* eslint-disable */
import axios from 'axios';


class Client {    // abstract
    async makeRequest() {
        throw new Error("Not implemented!");
    }
}


export class HTTPAPIClient extends Client {
    async makeRequest(url, method, data) {
        return (await axios({ method, url, data })).data;
    }
}



