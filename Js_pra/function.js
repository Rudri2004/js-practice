let item1 = 500;
let item2 = 300;
let item3 = 200;
let total = 1000;
let discount = 10;


// Function Declaration
function calculateTotal(item1, item2, item3) {
    return item1 + item2 + item3;
}

console.log("Total is: ₹" + calculateTotal(item1, item2, item3));


// Function Expression
let calculateDiscount = function (total, discount) {
    let discountAmount = (total * discount) / 100;
    let finalAmount = total - discountAmount;

    return finalAmount;
};

let finalAmount = calculateDiscount(total, discount);

console.log("Discount: " + discount + "%");
console.log("Final amount after discount: ₹" + finalAmount);


// Arrow Function
let addTax = (amount) => {
    let tax = (amount * 5) / 100;
    let finalAmount = amount + tax;

    return finalAmount;
};

let finalAmountWithTax = addTax(finalAmount);

console.log("Amount after discount: ₹" + finalAmount);
console.log("Tax: 5%");
console.log("Final amount with tax: ₹" + finalAmountWithTax);




function loginusermsg(username="Rudri"){
    if(!username){
        console.log("pease enetr valid username");
        return
        
    }
    return ` ${username} just login `
}
console.log( loginusermsg("Rudri"));