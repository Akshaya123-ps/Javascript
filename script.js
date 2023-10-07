console.log('Hello there!');
// alert('Hello friends');

// var a=9;
// console.log(a);

// {
//     var a=20;
//     console.log(a);
// }
// // let b=23;
// console.log(b);
// {
//     let b=34;
//     console.log(b);
// }
// console.log(b);
// const t=30;
// console.log(t);
// {
    const t=90;
    console.log(t);
// }
console.log(t);
// data type
var nam='akshaya';
console.log(typeof(nam));
var nam='my name is AKSHAYA';
console.log(typeof(nam));
// numbers
var count=10;
console.log(typeof(count));
var bg=true;
console.log(typeof(bg));                                                                                                                                                                                                                                                                                                                                                                                                                             
var gtype;
console.log(typeof(gtype));
// arrays
let arr=['Red','Blue','white',10]
console.log(arr[1]);
console.log(arr[3]);
console.log(arr.length);
arr.push('violet');
console.log(arr);
arr.pop('violet');
console.log(arr);
// javascript objects
let car={
    mileage:100,
    model:'i10',
    color:'red'

}
console.log(car);
console.log(car.model);
console.log(car.mileage);
let person=new Object();
person.gender='male';
person.height=180;
person.weight=50;
console.log(person);
// var a=25; b=15;
// sum=a+b;
// console.log(sum);
// diff=a-b;
// console.log(diff);
// mult=a*b;
// console.log(mult);
// divide=a/b;
// console.log(divide);
// remainder=a%b;
// console.log(remainder);
// var a=10;
// var b=++a;
// console.log(b);
// console.log(a);
// if else
// if (a==b || a==10) {
//     console.log('a is equal to b');
// } else {
//     console.log('a is not equal to b and a is not 10');
// }
// if (a!=b) {
//     console.log('a is not equal to b');
// } else {
//     console.log('a is greater than b');
    
// }
// c=20;
// d='20';
// if (c===d) {
//     console.log('c is equal to d');
// } else {
//     console.log('c is not equal to d');
// }
// if (c==d) {
//     console.log('c is equal to d');
// } else {
//     console.log('c is not equal to d');
// }
g=30;
f=25
if (g>f || g==20) {
    console.log('g is greater than f ')
} else {
    console.log('g is not greater than f and g is not 20')
}
let add=5;
add *= 3;
console.log(add);
let a=10;
let b=34;
let c=70;
let d=12;
var exp=a+b*(c-d)-7;
console.log(exp);
// functions
function display(name){
    console.log('Hi '+name+' Welcome to JS!');
}
display('Akshaya'); 
 function addition(f,a){
    var result=f+a;
    console.log(result);
 }
 addition (20,40);
   function addition(f,a){
    var result=f+a;
    return result;
 }
 var result=addition (20,40);
 console.log('The sum is '+result);
   
 function sub(t,s){
    var value=f-a;
    return value;
 }
 var value=sub(35,20);
 console.log('The difference is '+value);

 function multi(x,y){
    var pro=x*y;
    return pro;
 }
 var pro=multi(60,25);
 console.log('The product is '+pro);
