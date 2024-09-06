class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number")
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Heigh must be a positive number")
        }
    }


    get width(){
        return this._width;

    }
    get height(){
        return this._height;
    }
    get area(){
        return this._height * this._width;
    }
}

const rectangle = new Rectangle(3,4);


console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


class Person{
    constructor(firstName,lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newfName){
        if(typeof newfName === "string" && newfName.length>0){
            this._firstName = newfName;
        }else {
            console.error("First name must a string and not empty");
        }
    }
    set lastName(newLName){
        if(typeof newLName === "string" && newLName.length>0){
            this._lastName = newLName;
        }else {
            console.error("Last name must a string and not empty");
        }
    }

    set age(newAge){
        if(newAge >0){
            this._age= newAge;
        }else{
            console.error("Age must be a positive number");
        }
    }

    get fName(){
        return this._firstName;
    }
    get lName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    get fullName(){
        return this._firstName +""+this._lastName;
    }

}

const person = new Person("H","Z",22);

console.log(person.fName);
console.log(person.lName);
console.log(person.age);
console.log(person.fullName);