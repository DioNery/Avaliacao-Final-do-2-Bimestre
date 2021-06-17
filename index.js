//1° Questao

var result = someFun({someProperty: 'interview'},function(value){
    console.log(`This pointing to ${value}`);
  
});
console.log('Result is', result);
function someFun(v1, v2){ 
v2(v1.someProperty); return 1;
}

//2° Questao

var someFN = function(nmb) 
    {
        var vl = nmb;

        return function (vamoversepega)
        {
            vl += vamoversepega;
            return vl;
        }
    }

    var counter  = someFN(1)

    console.log("First call", counter(3));
    console.log("second call", counter(1));
    console.log("Third call", counter(5));

//3° Questao

function calculator(a, b) {
  return callback => callback(a, b)
}


//4° Questao
//Resultado da Questão = 4 1 5 1

var a = 5;
var b = 10;
if(a===5)
{
let a = 4;
var b = 1;
console.log(a); //4
console.log(b); //1
}
console.log(a); //5
console.log(b); //1

//5° Questão

function tabuada(numero) {
    for(i=1; i <=10; i++){
        result=numero*i;
        console.log(result);
    }
}
console.log(tabuada(10));

}
