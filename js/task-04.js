const counterValue = document.querySelector("#value");
const decrementEl = document.querySelector("button[data-action='decrement']");
const incrementEl= document.querySelector("button[data-action='increment']");


let value = 0;
decrementEl.addEventListener("click", () => {
value -=1;
counterValue.textContent = value;
});
incrementEl.addEventListener("click", () => {
    value +=1;
    counterValue.textContent  = value ;

})