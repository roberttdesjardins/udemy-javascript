let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)


myBook.title = "Animal Farm"

console.log(`${myBook.title} by ${myBook.author}`)


// Model a person
// Name, Age, Location

let myPerson = {
    name: "Robert",
    age: 23,
    location: "Vancouver"
}

console.log(`${myPerson.name} is ${myPerson.age} years old and lives in ${myPerson.location}`)

myPerson.age += 1

console.log(`${myPerson.name} is ${myPerson.age} years old and lives in ${myPerson.location}`)