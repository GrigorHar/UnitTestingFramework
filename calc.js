const operations = require('./operations.js')
const readline = require('readline')

// create command line interface using readline module

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

console.log('enter two number and operatiion + or * for calculate numbers')


rl.question('enter the first num : ', (x) =>{
    rl.question('enter thw second number : ', (y) =>{
        rl.question(
            "" +
            "enter + for adding " +
            "enter * for multiply " +
            "enter choice : ",
            (choice) => {
                if(!operations.validateNumbers(x,y)){
                    console.log('please enter only numbers...restart program')
                }else{
                    switch (choice) {
                        case '+':
                            console.log("sum is ", operations.add(x,y))
                            break
                        case '*':
                            console.log("multiply is : ", operations.multiply(x,y))
                    }
                }
                rl.close()
            }
        )
    })
})
