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
}
