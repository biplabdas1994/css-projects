const countersEl = document.querySelectorAll(".counter")

countersEl.forEach(countersEl => {
    countersEl.innerText = "0"
    incrementCounter()
    function incrementCounter() {
        let currentNum = +countersEl.innerText
        const dataCeil = countersEl.getAttribute("data-ceil")
        const increment = dataCeil / 15
        currentNum = Math.ceil(currentNum + increment)
        if(currentNum < dataCeil ){
            countersEl.innerText = currentNum
            setTimeout(incrementCounter,100)
        }else{
            countersEl.innerText  = dataCeil
        }
    }
})