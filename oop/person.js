// Prototypal Inheritance

class Person {
    constructor(fn, ln, age, likes = []) {
        this.firstName = fn,
        this.lastName = ln,
        this.age = age,
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} ${this.lastName} is ${this.age} years old!`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })
    
        return bio
    }
    set fullName(fullName) {
        const splitName = fullName.split(" ")
        this.firstName = splitName[0],
        this.lastName = splitName[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(fn, ln, age, position, likes = []) {
        super(fn, ln, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}. They will work for another ${this.getYearsLeft()} years at this company.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(fn, ln, age, grade, likes = []) {
        super(fn, ln, age, likes)
        this.grade = Math.min(100, Math.max(grade, 0))
    }
    getBio() {
        const status = (this.grade >= 70) ? "passing" : "failing"
        return `${this.firstName} is ${status} the course. Their grade is ${this.grade}.`
    }
    updateGrade(change) {
        this.grade += change
        this.grade = Math.min(100, Math.max(this.grade, 0))
    }
}

const me = new Employee("Robert", "Desjardins", 23, "Teacher")
me.fullName = "Clancy Turner"
console.log(me.getBio())


