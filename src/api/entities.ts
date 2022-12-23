abstract class Entity {
    id: number;
    constructor(id: number) {
        this.id = id;
    }
}

class Username extends Entity {
    id: number;
    username: string;
    password: string;
    email: string;
    constructor(id: number, username: string, password: string, email: string) {
        super(id);
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

class Product extends Entity {
    id: number;
    title: string;
    price: number;
    constructor(id: number, title: string, price: number) {
        super(id);
        this.title = title;
        this.price = price;
    }
}

class Order extends Entity {
    id: number;
    userId: number;
    products: Array<string>;
    constructor(id: number, userId: number, products: Array<string>) {
        super(id);
        this.userId = userId;
        this.products = products;
    }

}