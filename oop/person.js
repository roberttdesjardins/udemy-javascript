// Prototypal Inheritance

const Person = function(fn, ln, age, likes = []) {
    this.firstName = fn,
    this.lastName = ln,
    this.age = age,
    this.likes = likes
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} ${this.lastName} is ${this.age} years old!`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })

    return bio
}

Person.prototype.setName = function(fullName) {
    const splitName = fullName.split(" ")
    this.firstName = splitName[0],
    this.lastName = splitName[1]
}

const me = new Person("Robert", "Desjardins", 23, ["Teaching", "Biking"])
me.setName("Bob Smith")
console.log(me.getBio())

const person2 = new Person("Clancey", "Turner", 51)
console.log(person2.getBio())