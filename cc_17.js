// Task 1: Create a Customer Class
class Customer { //creating class
    constructor(name, email) { //adding properties
        this.name = name; //string
        this.email = email; //string
        this.purchaseHistory =[]; //array
    }
    addPurchase(amount) { //adding purchase amount to history
        this.purchaseHistory.push(amount);
    }
    getTotalSpent() { //returning total amount spent
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
    getDetails() {
        return `Customer: ${this.name}, Email: ${this.email}, Total Spent: $${this.getTotalSpent().toFixed(2)}`;
    }
}
//logging new customer creation and total spent after purchases
const customer1 = new Customer ("Alice", "alice@example.com");
customer1.addPurchase(150);
customer1.addPurchase(200);
console.log(customer1.getDetails());