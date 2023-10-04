function checkVoting(age){
    if(age < 18){
        console.log("Sorry, you are not eligible to vote yet.")
    }
    else if(age >= 18){
        console.log("You are eligible to vote!")
    }
}
console.log(checkVoting(17))
console.log(checkVoting(25))
console.log(checkVoting(18))