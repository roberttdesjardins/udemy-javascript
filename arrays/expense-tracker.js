const account = {
    name: "Robert Desjardins",
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        this.expenses.forEach(function (element) {
            totalExpenses += element.amount
        })
        let totalIncome = 0
        this.income.forEach(function (element) {
            totalIncome += element.amount
        })
        let accountBalance = totalIncome - totalExpenses
        return `${account.name} has a balance of $${accountBalance}. They have $${totalIncome} in income and $${totalExpenses} in expenses.`
    }
}

// 1. add income array to account
// 2. addIncome method -> description, amount
// 3. Tweak getAccountSummary


account.addExpense("Rent", 950)
account.addExpense("Coffee", 2.50)
account.addIncome("Job", 1000)
console.log(account.getAccountSummary())