// quantity-one,increment-one,price-one,item-rate1,subtotal,final-total


// Increment work
const incrementBtn = document.getElementById("increment-one");
incrementBtn.addEventListener("click", function () {
    const itemRate = parseFloat(document.getElementById("rate-one").innerHTML);
    const currentQtyone = parseFloat(document.getElementById("quantity-one").value);
    const totalBalance = parseFloat(document.getElementById("price-one").innerHTML);
    const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
    const finalTotal = parseFloat(document.getElementById("final-total").innerHTML);

    document.getElementById("quantity-one").value = currentQtyone + 1;
    document.getElementById("price-one").innerHTML = totalBalance + itemRate;
    document.getElementById("subtotal").innerHTML = subTotal + itemRate;
    document.getElementById("final-total").innerHTML = finalTotal + itemRate;


    //console.log(itemRate);
})


// decrement work
const decrementBtn = document.getElementById("decrement-one");
decrementBtn.addEventListener("click", function () {
    const itemRate = parseFloat(document.getElementById("rate-one").innerHTML);
    const currentQtyone = parseFloat(document.getElementById("quantity-one").value);
    const totalBalance = parseFloat(document.getElementById("price-one").innerHTML);
    const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
    const finalTotal = parseFloat(document.getElementById("final-total").innerHTML);

    document.getElementById("quantity-one").value = currentQtyone - 1;
    document.getElementById("price-one").innerHTML = totalBalance - itemRate;
    document.getElementById("subtotal").innerHTML = subTotal - itemRate;
    document.getElementById("final-total").innerHTML = finalTotal - itemRate;


})


// Remove work
const removetBtn = document.getElementById("remove-one");
removetBtn.addEventListener("click", function () {
    const totalBalance = parseFloat(document.getElementById("price-one").innerHTML);
    const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
    const finalTotal = parseFloat(document.getElementById("final-total").innerHTML);


    document.getElementById("item-one").style.display = "none";
    document.getElementById("subtotal").innerHTML = subTotal - totalBalance;
    document.getElementById("final-total").innerHTML = finalTotal - totalBalance;

})


// Deposit button event
// const depositBtn = document.getElementById("deposit-btn");
// depositBtn.addEventListener("click", function () {

//     const depositAmmount = parseFloat(document.getElementById("deposit-amt").value);
//     const currDeposit = parseFloat(document.getElementById("curr-deposit").innerHTML);
//     const totalBalance = parseFloat(document.getElementById("total-balance").innerHTML);

//     document.getElementById("curr-deposit").innerHTML = currDeposit + depositAmmount;
//     document.getElementById("total-balance").innerHTML = totalBalance + depositAmmount;
//     document.getElementById("deposit-amt").value = "";

// })
