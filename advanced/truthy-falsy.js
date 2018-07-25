const products = [{
    name: "mouse"
}]
const product = products[0]

// Truthy - Values that resolve to true in a boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values - false, 0, empty string, null, undefined, NaN


console.log(product ? "product found" : "product not found")