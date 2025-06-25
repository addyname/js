// Reduce

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(accumulator, currentValue){
    // console.log(`acc: ${accumulator}, curr:${currentValue}`)
    return accumulator + currentValue
}, 0 )// '0' is initialValue 
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 200
    },
    {
        itemName: "py course",
        price: 200
    },
    {
        itemName: "mobile dev course",
        price: 200
    },
    {
        itemName: "data science course",
        price: 200
    },
]

const amountToPay = shoppingCart.reduce((accumulator, items) => {
    console.log(`acc: ${accumulator}, curr:${items.price}`)
    return accumulator + items.price
},0)

console.log(amountToPay)