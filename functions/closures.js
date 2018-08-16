const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        }, 
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()

counter.increment()
console.log(counter.get())
counter.decrement()
console.log(counter.get())
counter.decrement()
console.log(counter.get())


// Adder
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)

console.log(add10(-2))
console.log(add10(20))

const add100 = createAdder(100)
console.log(add100(-90))

// Tipper
const createTipper = (tip) => {
    return (bill) => {
        return bill * tip / 100
    }
}

const tip10 = createTipper(10)
console.log(tip10(50))

const tip15 = createTipper(15)
console.log(tip15(50))

const tip20 = createTipper(20)
console.log(tip20(50))