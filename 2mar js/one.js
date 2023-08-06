console.log('happy coding')//console display
document.write('testing')//html display

//data type in javascript
//primitive and non-prmiritve
//primitive -> 1.string 2.number 3.boolean 4.undefined 5.null 6.symbol 7.BigInt
//non-primitive -> 1.array 2. object

//1.string
var var1 = 'happy coding!!!'
console.log(var1)
console.log(typeof var1)

//2.number
var var2 = 2023
console.log(var2)
console.log(typeof var2)

//3.boolean
var var3 = false
console.log(var3)
console.log(typeof var3)

//4.undefined
var var4 
console.log(var4)
console.log(typeof var4)

//5.null
var var5 = null
console.log(var5)
console.log(typeof var5)

//6.symbol
var var6 = 'sita'
var var7 = 'sita'
console.log(var6 == var7)

//7. BigINt
var var6 = Symbol('pranish')
var var7 = Symbol('pranish')
console.log(var6 == var7)

var var8 = 12345678910111213141516
console.log(var8)
console.log(BigInt(var8))


//non-primitive
//array
var var9 = ['sita' ,'jyoti' ,'jen']
console.log(var9)
console.log(typeof var9)

//object 
 var var10 = {Id:1, Name: 'sita', Address: 'jorpati'}
 console.log(var10)
 console.log(typeof var10)

 //variable var let const

 //var can redeclared and reassigned
 var a='sita'
 console.log(a)
 var a='sushil'
 console.log(a)

 //let can be re-declared but can reassigned
 let u='sita'
 console.log(u)

 u='sushil'
 console.log(u)

 //const can no declared and no reassigned
 const l='sita'
 console.log(l)

 var q=0;
 console.log(q) //0
 if(true)
 {
    var q=2;
    console.log(q)//2
 }
 console.log(q)//0

 let qq=0;
 console.log(qq)//0
 if(true)
 {
    let qq=2;
    console.log(qq)//2
 }
 console.log(qq)//0

 //2+2 operand operator operand
 /*
 arithmetic operators +,-,/,*,%, ++,--,**
 comparison operators
 logical operators
 assignment operatora
 conditional operators
 ternary operators
 */

 //arithmetic operators
 var a,b;
 a=2; b=3;
 console.log(a+b)//5
 console.log(a-b)
 console.log(a*b)
 console.log(a/b)
 console.log(a++)//a=2
 console.log(++a) //3 a=a+1   3
 console.log(a--) //3
 console.log(--a)
 console.log(a)
 console.log(a**b)//2*2*2

 //assignment operators
 console.log(a+=b) //a=a+b //2+3 // compound
 console.log(a-=b) // a=a-b //5-3=2 bcz a=5
 console.log(a*=b) //a = 6
 console.log(a/=b) // a =2
 console.log(a%=b) 
let a = 11;


 //comparison operatora
 var x=2; var y=3; var z='2'
 console.log(x==z) //true
 console.log(x===z) //false
 console.log(x>y)  //false
 console.log(x<y) //true

 //logical operators
 var z=true;
 var xx=false
console.log(z && xx) //false
console.log( z || xx)
console.log(!z)

//conditional operators if elseif switch
if(2>2)
{
    console.log("its true")
}
else if(2==='2')
{
    console.log("its same")
}
else
{
console.log("its false")
}

//switch
var w=22;
switch(w)
{
    case 1: console.log("today is sunday"); break;
    case 2: console.log("today is monday"); break;
    case 3: console.log("today is tuesday")
}
// ==
// === 





/*
var = function scoped // hoisted
let = blocked scoped // not hoisted
const = blocked scoped // not hoisted 
*/
const a ;
var b;
let c;
console.log(a); // reference error
console.log(b); // 
console.log(c); //



