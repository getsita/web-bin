//find,filter,map

var age=[10, 5, 30, 35, 25,20];
var dfind=age.find((a)=>a> 10)
console.log(dfind)

var dfilter=age.filter((a)=>a> 10)
console.log(dfilter)

var dmap=age.map((a)=>a+10)
console.log(dmap)


var fr=['apple','grapes','orange','kiwi']
console.log(fr .sort())
console.log(fr.reverse())
console.log(fr.slice())


var abc=[
    { id:1,fname:"Sita", roll:"101"},
{id:2, fname:"sushil", roll:"102"},
{id:2, fname:"dipak", roll:"103"},

]
console.log(abc[0].fname)