const score = 1000
if(score<300){
    console('score is less than 300')
} else if(score<450)
    console('score is less than 450')
    else if( score ==500){
        console.log("Score is 500 ")
    } else{
        console.log('Score is invalid')
    }



const userLoggenIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggenIn && debitcard){
    console.log('Allow to buy course')
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log('User logged in')
}
