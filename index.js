var fs = require('fs')

console.log("inicio")

fs.readFile('prueba.txt', (error, data)=>{
    if(error){
        console.log(err);
        return
    }
    console.log(data);
})

var num1=1
var num2=2

var num3= num1 * num2

console.log(num3)

console.log("fin")
