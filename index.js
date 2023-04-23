// code your solution here

// Write a function called superbowlWin() in index.js:

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return, sadly, undefined




// function superbowlWin(record) {
//    let winner = record.find( (record) => record.result === "W");
//    return winner ? winner.year : undefined;
// }







function superbowlWin(record){
//here we declare the variable winner with let to use the method find() to iterate over the array object passing each element until if finds the letter W else it will return false, once it does the callback in this case broncos will return true and find() will return that element in this case W. it stops the iteration
    let winner = record.find(function(broncos){  
        if(broncos.result === 'W' ){
            return broncos
        }   
    }) 
    //here if I understand correctly because the function declaration winner did not find undefined and returned W as a true value it returned the year the Broncos won the superbowl
    if (winner !== undefined){ 
        return winner.year
    } 
}