let btns = document.querySelectorAll(".btn");
let clearBtn = document.querySelector(".clear");
let equalBtn = document.querySelector("#equal");
let display = document.querySelector("#display");

console.log(btns);

btns.forEach( function(btn) {
    btn.addEventListener("click", ()=> {
        display.value += btn.innerText;
    })
})

clearBtn.addEventListener("click", () => {
    display.value = " ";
})

equalBtn.addEventListener("click", () => {
    calculateResult();
})


function calculateResult() {        
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (e) {
        console.log(e);
        display.value = "error";
    }
}

    
