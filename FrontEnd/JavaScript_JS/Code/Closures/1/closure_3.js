function bankAccount() {
    let balance = 1000;

    return {
        getBalance: function () {
            console.log(balance);
        },
        deposit: function (amount) {
            balance += amount;                  // balance = balance + amount;
        }
    };
}

const account = bankAccount();

account.getBalance(); // 1000

account.deposit(500);

account.getBalance(); // 1500



/*

Output :-
1000
1500

The old value 1000 is replaced with 1500 with current value to read.
balance = balance + amount;
balance = 1000 + 500;
balance = 1500;

*/
