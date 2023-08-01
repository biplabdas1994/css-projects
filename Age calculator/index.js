const btnEL = document.getElementById('btn')
const birthdayEL = document.getElementById('birthday')
const resultEl = document.getElementById('result')
function calculateAge() {
    const birthdayValue = birthdayEL.value;
    if (birthdayValue === "") {
        alert("Please enter valid birthday")
    }
    else {
        let age = getAge(birthdayValue)
        resultEl.innerText = `Your age is ${age} ${age >1 ?"years":"year"} old` 
    }
}
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue) 
    let age = currentDate.getFullYear() - birthdayDate.getFullYear() ;
    const month = currentDate.getMonth() - birthdayDate.getMonth()
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--
    }
    return age ;
}
btnEL.addEventListener('click', calculateAge)
