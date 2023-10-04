function checkVoting(){
    let age = document.getElementById("input").value;
    if(age < 18){
        return document.getElementById("result").textContent = "Sorry, you are not eligible to vote yet."
    }
    else if(age >= 18){
        return document.getElementById("result").textContent = "You are eligible to vote!"
    }
    else {
        return document.getElementById("result").textContent = "Wrong Data Type"
    }
}
