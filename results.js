document.addEventListener('DOMContentLoaded', function() {
    //ready function
    
        slowMath.add( 6, 2 )
        .then ((sum) => {
            console.log(`Sum of 6 and 2 is ${sum}`);
            return slowMath.multiply(sum, 2)    //Multiply by 2
        })  .then ((product) => {
            console.log(`Multiply that by 2 to get ${product}`);
            return slowMath.divide(product, 4)  //Divide by 4
        })  .then ((quotient) => {
            console.log(`Divide that number by 4 to get ${quotient}`);
            return slowMath.subtract(quotient, 3) //Subtract by 3
        })  .then ((difference) => {
            console.log(`Subtract 3 from that number to get ${difference}`);
            return slowMath.add(difference, 98) //Add 98
        })  .then ((sum) => {
            console.log(`Add 98 to that number to get ${sum}`);
            return slowMath.remainder(sum, 2) //Remainder of dividing by 2
        })  .then ((remainder) => {
            console.log(`The remainder after dividing by 2 is ${remainder}`);
            return slowMath.multiply(remainder, 50) //Multiply by 50
        })  .then ((product) => {
            console.log(`Add 50 to that number to get ${product}`);
            return slowMath.remainder(product, 40) //Remainder of dividing by 40
        })  .then ((remainder) => {
            console.log(`The remainder after dividing by 40 is ${remainder}`);
            return slowMath.add(remainder, 32) //Add 32
        })  .then ((sum) => {
            console.log(`Add 32 to that number to get ${sum}`); //print final answer
            console.log(`The final result of these operations is ${sum}!`); //Console log final result
        })
    
            //Add error catch all function
            .catch((err) => {
                console.log('There has been an issue!');
                console.log(err);
            })
    
    
    
    
    })//End DOMContentLoaded Function