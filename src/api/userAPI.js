// import axios from "axios";

import axios from "axios";


class CRUD {
    create(data) {
        throw new Error();
    }
    read(id) {
        throw new Error();
    }
    update(id, updates) {
        throw new Error();
    }
    delete(id) {
        throw new Error();
    }
}

class UserApi extends CRUD {
    create(userData) {
        return axios.post('https://reqres.in/', { username: userData.username, password: userData.password });
    }
    read(userId) {
        return axios.get(`https://reqres.in/${userId}`);
    }
    updateUser(userId, userUpdates) {
        return axios.put(`https://reqres.in/${userId}`, userUpdates);
    }
    deleteUser(userId) {
        return axios.delete(`https://reqres.in/${userId}`);
    }
}






// ------------------

// class CRUD{
//     create(data){
//         throw new Error();
//     }

//     read(id){
//         throw new Error();
//     }
// }


// class UserCRUD extends CRUD{

//     users = [];

//     create(data){
//         this.users.push({ username: data.username, id: data.id });
//     }

//     read(id){
//         return this.users[id];
//     }

// }


// class OrderCRUD extends CRUD{

//     create(data){
//         axios.post('https://backend.com/orders/', { id: data.id, orderTitle: data.title });
//     }

//     read(id){
//         return axios.get(`https://backend.com/orders/${id}`);
//     }

// }