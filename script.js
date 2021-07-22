function f1(){
var array=[1,2,3,4,5]
let sum=0
for(const val in array){
    sum=sum+array[val]
}
console.log("The sum of First 5 natural no is :"+sum);
}
f1()