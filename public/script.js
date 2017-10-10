function calcTotal() {
         var itemTotal = 0;
         var item1 = document.getElementById("item1");
         var item2 = document.getElementById("item2");
         var item3 = document.getElementById("item3");
         var item4 = document.getElementById("item4");
         var item5 = document.getElementById("item5");
         //each item numbers lines up with the product so that it can be priced correctly
         (item1.checked) ? (itemTotal += 3.17) : (itemTotal += 0);
         (item2.checked) ? (itemTotal += 38) : (itemTotal += 0);
         (item3.checked) ? (itemTotal += 2.29) : (itemTotal += 0);
         (item4.checked) ? (itemTotal += 28.99) : (itemTotal += 0);
         (item5.checked) ? (itemTotal += 57) : (itemTotal += 0);
         //Made sure the prices in the html file matched the prices here
         var salesTaxRate = 0.06;  //Made sure the tax rate is equal to that of the Maryland tax rate
         var orderTotal = itemTotal + (itemTotal * salesTaxRate);
         alert("Your order total is $" + orderTotal.toFixed(2));  //toFixed(2) writes out 2 decimals
}
document.getElementById("submit").addEventListener("click", calcTotal, false);