//Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

function Account(accountNumber, balance, owner){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Implement methods within the Account object to deposit and withdraw funds.

let testUser = 'Hiro'
let hiroAccount = new Account(12345,500,testUser)
console.log(hiroAccount)

Account.prototype.deposit = function(amount){
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. Balance is now $${this.balance}`);
    }
    else {
        console.log("Deposit amount has to be more than 0");
    }
}

Account.prototype.withdrawals = function(amount){
    if ((amount > 0) && (this.balance > amount)){
        this.balance -= amount;
        console.log(`Withdrawl $${amount}. Balance is now $${this.balance}`);
    }
    else {
        console.log("Insufficient funds or the withdrawal amount has to be more than 0");
    }
}

//create a method to calculate compound interest based on the balance and specified interest rate.


function checkBalance(){
    console.log(`Balance is $${Account.balance}`);
}

Account.prototype.compoundInterest = function(balance){
    let interest = .04;
    let accInterest = balance * interest;
    this.balance = accInterest + balance
    console.log(`Interest accumulated is $${accInterest} and the new balance is $${this.balance}`)
}

hiroAccount.deposit(400)
hiroAccount.withdrawals(200)
hiroAccount.compoundInterest(1000)