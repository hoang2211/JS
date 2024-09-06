class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph `)
    }
}

class Rabbit extends Animal{
    constructor(name, age , runSpeed){
        super(name,age);
        
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age , swimSpeed){
        super(name,age);
        
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{
    constructor(name, age , flySpeed){
        super(name,age);
        
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1 , 25);
const fish = new Fish("fish", 2 , 12);
const hawk = new Hawk("hawk", 3 , 50);

console.log(fish.name);
rabbit.run();