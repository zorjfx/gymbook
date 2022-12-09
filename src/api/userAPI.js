import axios from "axios";


class CRUD{
    create(data){
        throw new Error();
    }

    read(id){
        throw new Error();
    }
}


class UserCRUD extends CRUD{

    users = [];

    create(data){
        this.users.push({ username: data.username, id: data.id });
    }

    read(id){
        return this.users[id];
    }

}


class OrderCRUD extends CRUD{

    create(data){
        axios.post('https://backend.com/orders/', { id: data.id, orderTitle: data.title });
    }

    read(id){
        return axios.get(`https://backend.com/orders/${id}`);
    }

}



// component.vue 
function getById(id, crudService){
    return crudService.get(id);
}


function createEntity(data, crudService){
    return crudService.create(data);
}


getById(10, new UserCRUD());
getById(10, new OrderCRUD());
