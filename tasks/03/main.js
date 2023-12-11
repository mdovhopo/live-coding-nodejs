// TODO: test this code in main.test.js file
// make sure to cover all possible cases and uncover potential
// improvement to the code

export class BankAccount {
  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.transactions = [];
  }

  makeDeposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'deposit', amount, date: new Date() });
    console.log(`Deposited ${amount} units. New balance: ${this.balance}`);
  }

  makeWithdrawal(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({ type: 'withdrawal', amount, date: new Date() });
      console.log(`Withdrawn ${amount} units. New balance: ${this.balance}`);
    } else {
      console.log(`Insufficient funds for withdrawal.`);
    }
  }

  displayBalance() {
    console.log(`Current balance for ${this.accountHolder}: ${this.balance}`);
  }

  displayTransactions() {
    console.log(`Transaction history for ${this.accountHolder}:`);
    this.transactions.forEach((transaction, index) => {
      console.log(
        `${index + 1}. ${transaction.type} of ${transaction.amount} units on ${
          transaction.date
        }`
      );
    });
  }
}
