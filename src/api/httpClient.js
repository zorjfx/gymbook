/* eslint-disable */
import axios from 'axios';


export class Client{    // abstract

    async makeRequest(){
        throw new Error("Not implemented!");
    }

}


export class HTTPClient extends Client{

    async makeRequest(url, method, data){
        return (await axios({ method, url, data })).data;
    }

}


export class TCPClient extends Client{

    async makeRequest(ipAddress, data){
        const websocket = new WebSocket(ipAddress);
        websocket.send(data);
        websocket.close();
    }

}
