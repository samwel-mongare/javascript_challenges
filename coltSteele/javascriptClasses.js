// Bank implementation >>>>>>>>>>>>
class BankAccount {
  Constructor(accountHolder, accountNumber, balance) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance ? balance : 0;
  }

  deposit = () => {
    const accountToDeposit = prompt(
      `Please input the account number to deposit ${this.accountNumber}`
    );
    const amount = prompt("Please input the amount to deposit");

    if (accountToDeposit === this.accountNumber) {
      this.balance += amount;
      return alert(`You new account balance is Ksh.${this.balance}`);
    }
    return alert("Please input a valid account Number!!!");
  };

  withdraw = () => {
    const accountToWithdraw = prompt(
      "Please input the account number to withdraw"
    );
    const amount = prompt("Please input the amount to withdraw");

    if (
      accountToWithdraw === this.accountNumber &&
      this.balance >= this.amount
    ) {
      this.balance -= amount;
      return alert(`You new account balance is Ksh.${this.balance}`);
    }
    if (this.amount > this.balance) {
      return prompt(
        `Insufficient funds in the account please input a value less or equal to ${this.balance}`
      );
    }
    return alert("Please input a valid account Number!!!");
  };
}

alert(
  "Welcome to our new bank bafu branch!!Wanna create an account? If so Click on the 'create account' button below"
);

const createAccount = document.body.appendChild(
  document.createElement("button")
);
createAccount.innerText = "Create Account";

createAccount.onclick = () => {
  const accountHolder = prompt("Please input your full name");
  const accountNumber = prompt("Please input an four digit account number");
  const balance = prompt("Please input your last bank balance");

  const newAccount = new BankAccount(accountHolder, accountNumber, balance);
  console.log(newAccount);
  newAccount.deposit();
  newAccount.withdraw();
};
