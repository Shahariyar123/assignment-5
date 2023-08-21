let serialNumber = 1; // Initialize serial number
let total = 0;

function getAllMoney(target) {
  const selectedItems = document.getElementById('select-item');
  const itemNames = target.parentNode.childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = `${serialNumber}. ${itemNames}`;
  serialNumber++;
  // Append the list item to the selectedItems list
  selectedItems.appendChild(li);
  const price = parseFloat(target.parentNode.childNodes[5].innerText.split(" ")[0]);
  
  total += price;
  const totalPriceElement = document.getElementById('Total-price');
  totalPriceElement.innerText = total;

  applyDiscountIfNeeded();
}


function applyDiscountIfNeeded() {
  const totalPrice = parseFloat(document.getElementById('Total-price').innerText);

  if (totalPrice >= 200 && isCouponApplied()) {
    const discount = (totalPrice * 20) / 100;
    const discountedTotal = totalPrice - discount;

    const discountTotalElement = document.getElementById('discount-total');
    discountTotalElement.innerText = discount.toFixed(2);

    const mainPriceElement = document.getElementById('main-price');
    mainPriceElement.innerText = discountedTotal.toFixed(2);
  } else {
    const discountTotalElement = document.getElementById('discount-total');
    discountTotalElement.innerText = "0.00";

    const mainPriceElement = document.getElementById('main-price');
    mainPriceElement.innerText = totalPrice.toFixed(2);
  }
}

function isCouponApplied() {
  const couponInput = document.getElementById('coupon-input').value;
  return couponInput === "SELL200";
}

function resetAllMoney() {
  const selectedItems = document.getElementById('select-item');
  selectedItems.innerHTML = '';

  const totalPriceElement = document.getElementById('Total-price');
  totalPriceElement.innerText = "0.00";

  const couponInput = document.getElementById('coupon-input');
  couponInput.value = "";

  applyDiscountIfNeeded();
}



