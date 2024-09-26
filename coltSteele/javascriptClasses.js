// Bank implementation >>>>>>>>>>>>
class BankAccount {
  Constructor(accountHolder, accountNumber, balance) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance ? Number(balance) : 0;
  }

  welcomeMessage = () => {
    return alert(
      "Welcome to our new bank bafu branch!!Wanna create an account? If so Click on the 'Ok' button to continue..."
    );
  };

  accountCreationSuccessMessage = () => {
    return alert(
      `Thank you for choosing us to handle your fincances. Your account has been successfully created. You new account number is ${this.accountNumber} and your account balance is ${this.balance}. Would you like to make your first deposit?`
    );
  };

  deposit = () => {
    const accountToDeposit = prompt(
      `Please verify the account number to deposit`
    );
    const amount = prompt("Please input the amount to deposit");

    if (accountToDeposit === this.accountNumber) {
      this.balance += Number(amount);
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

const createAccount = document.body.appendChild(
  document.createElement("button")
);
createAccount.innerText = "Visit Bank";

createAccount.onclick = () => {
  const newAccount = new BankAccount();
  newAccount.welcomeMessage();
  newAccount.accountHolder = prompt("Please input your full name");
  newAccount.accountNumber = prompt(
    "Please input an four digit account number"
  );
  newAccount.balance = 0
  newAccount.accountCreationSuccessMessage();
  newAccount.deposit();
};
