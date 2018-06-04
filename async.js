document.addEventListener('DOMContentLoaded', function(){
    //this is where I will begin my PROMISE CHAIN WITH slowMath//

    slowMath.add(7, 4)
    .then((sum) => {
        console.log(`Sum of 6 and 2 is ${sum}`); // this is where I console.log what I've added//
        return slowMath.multiply(sum, 2) // this will multiply my add sum by 2 and give me 8//
    })  .then ((product) =>{
        console.log(`multiply this by 2 and your answer is ${product}`); // this should get you 16//
        return slowMath.divide(product, 4) // this should give me 4//
    })  .then ((quotent) => {
        console.log(`when I divide this by 4 your answer is ${quotent}`);
        return slowMath.subtract(quotent, 3) //this should give me 1//
    })  .then((difference) => {
        console.log(`when I subtract this by 3 the answer is ${difference}`);
        return slowMath.add(difference, 98)
    })  .then((sum) => {
        console.log(`when I add this by 98 the answer is ${sum}`);
        return slowMath.remainder(sum, 2)
    })  .then((remainder) => {
        console.log(`when you divde this by 2 your answer is ${remainder}`);
        return slowMath.multiply(remainder, 50)
    })  .then((product) => {
        console.log(`when I multipy this by 50 your answer is ${product}`);
        return slowMath.remainder(product, 40)
    })  .then((remainder) => {
        console.log(`when you divide this by 40 your answer is ${remainder}`);
        return slowMath.add(remainder, 32)
    })  .then((sum) => {
        console.log(`when you add this by 32 your answer is ${sum}`);
        console.log(`the final answer is ${sum}`);
    })

        .catch((err) => {
            console.log('we found an error');
            console.log(err);
            
        })
}) //in the slowMath function, practicing working on how this function was able to work//

