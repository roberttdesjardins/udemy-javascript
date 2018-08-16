// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, "This is the data")
    }, 2000)
}

getDataCallback((error, data) => {
    if (error) {
        console.log(err)
    } else {
        console.log(data)
    }
})


// Promise
const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`This is my success data: ${data}`)
    }, 2000)
})

const myPromise = getDataPromise(123)
myPromise.then((data) => {
    console.log(data)
}, (err) => {
    console.log(err)
})
