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

// Task 2: Create a SalesRep Class
class SalesRep { //creating class
    constructor(name) { //adding properties
        this.name = name; //string
        this.clients = []; //array of Customer objects
    }
    addClient(customer) { //adding customer to list
        this.clients.push(customer);
    }
    getClientTotal(clientName) { //finding client by name and returning total spent
        const client = this.clients.find(cust => cust.name === clientName);
        return client ? client.getTotalSpent() :0;
    }
}
//logging sales rep's clients and total spent for specific client
constsalesRep1 = new SalesRep("Bob");
salesRep1.addClient(customer1);
console.log(`SalesRep ${salesRep1.name} has client ${customer1.name} who spent $${salesRep1.getClientTotal("Alice").toFixed(2)}`);

// Task 3: Create a VIPCustomer Class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email); //adding additional property
        this.vipLevel =vipLevel; //string: 'Gold', 'Platinum'
    }
    getTotalSpent() { //return total spent with 10% loyalty bonus added
        const total = super.getTotalSpent();
        return total + (total * 0.10);
    }
}
//logging VIP customer's total spent with bonus
const vipCustomer1 = new VIPCustomer("Charlie", "charlie@example.com", "Gold");
vipCustomer1.addPurchase(300);
vipCustomer1.addPurchase(400);
console.log(`VIP Customer: ${vipCustomer1.name} (${vipCustomer1.vipLevel})`);
    console.log(`Total Spent with Bonus: $${vipCustomer1.getTotalSpent().toFixed(2)}`);
