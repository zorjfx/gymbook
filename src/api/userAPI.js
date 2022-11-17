import axios from 'axios';

export async function dataPost(username, password) {
    await axios.post('https://reqres.in/api/login', { email: username, password });
}