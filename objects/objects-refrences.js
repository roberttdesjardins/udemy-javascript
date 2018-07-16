let myAccount = {
    name: "Robert Desjardins",
    expenses: 0,
    income: 0
}


let addExpense = function(account, amount) {
    account.expenses += amount
}

// addIncome
// Takes account and amount of income
let addIncome = function(account, amount) {
    account.income += amount
}

// resetAccount
// Reset expenses and income to 0
let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}

// getAccountSummary
// example: Account for Robert has $900. $100 in expenses. $1000 in income
let getAccountSummary = function(account) {
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.expenses} in expenses. $${account.income} in income.`
}

addIncome(myAccount, 10000)
addExpense(myAccount, 450)
addExpense(myAccount, 5692)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))