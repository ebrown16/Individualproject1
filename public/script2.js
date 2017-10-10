function calcTotal() {
         var itemTotal = 0;
         var item6 = document.getElementById("item6");
         var item7 = document.getElementById("item7");
         //each item numbers lines up with the product so that it can be priced correctly
         (item6.checked) ? (itemTotal += 149) : (itemTotal += 0);
         (item7.checked) ? (itemTotal += 199) : (itemTotal += 0);
         //Made sure the prices in the html file matched the prices here
         var salesTaxRate = 0.06;  //Made sure the tax rate is equal to that of the Maryland tax rate
         var orderTotal = itemTotal + (itemTotal * salesTaxRate);
         alert("Your order total is $" + orderTotal.toFixed(2));  //toFixed(2) writes out 2 decimals
}
document.getElementById("submit").addEventListener("click", calcTotal, false);