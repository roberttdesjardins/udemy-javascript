const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}


console.log(square(12))

const people = [{
    name: "Robert",
    age: 23
}, {
    name: "BTW",
    age: 12
}, {
    name: "Jess",
    age: 31
}]


const under30 = people.filter((person) => person.age < 30)
console.log(under30)


const age23 = people.find((person) => person.age === 23)
console.log(age23.name)