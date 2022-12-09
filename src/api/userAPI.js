import axios from 'axios';

class APIClient {
    dataPost() {

    }
}

export class HTTPAPIClient extends APIClient {
    async dataPost(email, username, password) {
        await axios.post('https://reqres.in/api/login', { email, username, password })
    }
}