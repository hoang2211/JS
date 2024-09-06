class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product ${this.name}`);
        console.log(`Price$${this.price.toFixed(2)}`);
    }

    calculateTotal(saleTax){
        return this.price +(this.price * saleTax);
    }
}
const saleTax = 0.05;

const product1 = new Product("Shirt",19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear",100.00);

const total = product1.calculateTotal(saleTax);
console.log(`Total price (with tax): $ ${total.toFixed(2)}`);
