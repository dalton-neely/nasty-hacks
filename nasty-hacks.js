const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let numTestCases = 0
let testCaseCounter = 0
let cases = []

const calc = () => {
    cases.forEach((x,i) => {
        const output = (x[0] - x[1]) + x[2]
        if(output < 0){
            console.log('advertise')
        }else if(output > 0){
            console.log('do not advertise')
        }else{
            console.log('does not matter')
        }
    })
}

rl.on('line', input => {
    if(!numTestCases){
        numTestCases = parseInt(input,10)
    }else{
        cases.push(input.split(' ').map(x => parseInt(x,10)))
        testCaseCounter++
        if(testCaseCounter === numTestCases){
            calc()
            rl.close()
        }
    }
})