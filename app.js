


// Increment work item one
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

})

// Increment work item two
const incrementBtn2 = document.getElementById("increment-two");
incrementBtn2.addEventListener("click", function () {
    const itemRate2 = parseFloat(document.getElementById("rate-two").innerHTML);
    const currentQty2 = parseFloat(document.getElementById("quantity-two").value);
    const totalBalance2 = parseFloat(document.getElementById("price-two").innerHTML);
    const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
    const finalTotal = parseFloat(document.getElementById("final-total").innerHTML);

    document.getElementById("quantity-two").value = currentQty2 + 1;
    document.getElementById("price-two").innerHTML = totalBalance2 + itemRate2;
    document.getElementById("subtotal").innerHTML = subTotal + itemRate2;
    document.getElementById("final-total").innerHTML = finalTotal + itemRate2;

})


// decrement work item one
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

// decrement work item two
const decrementBtn2 = document.getElementById("decrement-two");
decrementBtn2.addEventListener("click", function () {
    const itemRate2 = parseFloat(document.getElementById("rate-two").innerHTML);
    const currentQty2 = parseFloat(document.getElementById("quantity-two").value);
    const totalBalance2 = parseFloat(document.getElementById("price-two").innerHTML);
    const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
    const finalTotal = parseFloat(document.getElementById("final-total").innerHTML);

    document.getElementById("quantity-two").value = currentQty2 - 1;
    document.getElementById("price-two").innerHTML = totalBalance2 - itemRate2;
    document.getElementById("subtotal").innerHTML = subTotal - itemRate2;
    document.getElementById("final-total").innerHTML = finalTotal - itemRate2;


})


// Remove work item one
const removetBtn = document.getElementById("remove-one");
removetBtn.addEventListener("click", function () {
    const totalBalance = parseFloat(document.getElementById("price-one").innerHTML);
    const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
    const finalTotal = parseFloat(document.getElementById("final-total").innerHTML);

    document.getElementById("item-one").style.display = "none";
    document.getElementById("subtotal").innerHTML = subTotal - totalBalance;
    document.getElementById("final-total").innerHTML = finalTotal - totalBalance;
})

// Remove two work item one
const removetBtn2 = document.getElementById("remove-two");
removetBtn2.addEventListener("click", function () {
    const totalBalance = parseFloat(document.getElementById("price-two").innerHTML);
    const subTotal = parseFloat(document.getElementById("subtotal").innerHTML);
    const finalTotal = parseFloat(document.getElementById("final-total").innerHTML);

    document.getElementById("item-two").style.display = "none";
    document.getElementById("subtotal").innerHTML = subTotal - totalBalance;
    document.getElementById("final-total").innerHTML = finalTotal - totalBalance;
})
