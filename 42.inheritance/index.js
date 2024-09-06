class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);

    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal { 
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawl"
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
rabbit.alive = false;


console.log(Fish.alive);
fish.eat();
fish.sleep();
fish.swim();