class MathUtil{
    static PI = 3.14159;
}

class User{
    static userCount =0
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${this.userCount} online`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);

    }
}

const user1 = new User("H");

console.log(user1.username);
console.log(User.userCount);