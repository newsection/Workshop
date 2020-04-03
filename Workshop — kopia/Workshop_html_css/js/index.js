let productsQuantity = document.querySelector("#productQuantity");
console.log(productsQuantity);
let estimatedOrders = document.querySelector("#estimatedOrders");
console.log(estimatedOrders);
let packageInput = document.querySelector("#packageInput");
console.log(packageInput);
let accountingCheck = document.querySelector("#accountingCheck");
console.log(accountingCheck);
let rentalCheck = document.querySelector("#rentalCheck");
console.log(rentalCheck);

let productDiv = document.querySelector("#product");
let productDivP = document.querySelector("#product");
console.log(productDiv);
console.log(productDivP);

let ordersDiv = document.querySelector("#orders");
console.log(ordersDiv);
let packageDiv = document.querySelector("#package");
console.log(packageDiv);
let accountingDiv = document.querySelector("#accounting");
console.log(accountingDiv);
let terminalDiv = document.querySelector("#terminal");
console.log(terminalDiv);


productsQuantity.addEventListener("click", function(){
    console.log("działa");
    productDiv.style.visibility = "visible";
});
estimatedOrders.addEventListener("click", function(){
    console.log("działa");
    ordersDiv.style.visibility = "visible";
});
packageInput.addEventListener("click", function(){
    console.log("działa");
    packageDiv.style.visibility = "visible";
});
accountingCheck.addEventListener("click", function(){
    console.log("działa");
    accountingDiv.style.visibility = "visible";
});
rentalCheck.addEventListener("click", function(){
    console.log("działa");
    terminalDiv.style.visibility = "visible";
});