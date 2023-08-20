let total = 0;   
   
   function getAllMoney(target){
    // console.log('je')
    const secletedItmes =document.getElementById('seclect-item')
const itemNames = target.parentNode.childNodes[3].innerText
const ul= document.createElement("ul")
ul.innerText = itemNames;
// console.log(li);
secletedItmes.appendChild(ul)
 
// console.log(target.parentNode.childNodes[5].innerText.split(" ")[0])

const price =target.parentNode.childNodes[5].innerText.split(" ")[0];

total = parseFloat(total) + parseFloat(price)

// console.log(total);
const totalPrice = (document.getElementById('Total-price').innerText = total)



 // Example: Applying a discount if the price value is less than or equal to 200
let prices = 0;
if (prices <= 200) {
  const discount = (totalPrice*20)/100
 const totalDis = discount
const discountTotal = (document.getElementById('discount-total').innerText = totalDis)
console.log('total')
const count =total-discount;
const mainPrice = (document.getElementById('main-price').innerText =  count )
} 


}
function updateInput(){
  //get the current amount from the 'discount' field
  var discount = document.getElementsByName("discount")[0].value;
  //get the current amount from the 'price' field
  var currentPrice = document.getElementsByName("price")[0].value;
  //new price should be "old price" - "discount%" * "old price"
  document.getElementsByName("price")[0].value =  currentPrice - ((discount/100) * currentPrice);
}





