//while loop
// var number = 2;
// while(number<=5){
//     console.log(number); // goes to infinity loop that why we have to add this number ++
//     number++;
// }

// do while loop

// var num1= 121;
// do{
//     console.log(num1); // first print the output then check the condition
//     num1++;
// }while(num1<=130){
//     console.log(num1);
// }

// for loop

// var num1= ['ram','shame','sunil','amm'];
// for(i=1;i<=num1.length;i++){
//     console.log(i);
// }

// table for 8 using for  loop
//   var tableof=8;
// for(var num=1;num<=10;num++){
//     console.log("table of number "+ 8 +"*" +num +"=" +tableof*num );
// }
// scoop in js

// var number=122;
// function num(a) {
//   var num2=2;
//   console.log(number);
// }
// // num(2);
// console.log(num(2));
// //  console.log(num2); 
  
// function fisrt(a,b) {
//   return a*b;
// }
// // fisrt(5);

//  function second(c,d) {
//   return c+d;
//  }
//  let result=second(15,10);
//  fisrt(30,result);
//  console.log(result);
// console.log(fisrt(30,result));
// // console.log(fisrt(5,6));

// closure();

// function fisrt(a,b) {
//   const age=20;
//   function second(c,d) {
//     console.log(age);
//   }
//   second(2,3);

// }
// fisrt(5,3);

// var nam=null;
// console.log(typeof nam);
// var nam1;
// console.log(nam1);

// for of loop and for in loop

// var arr=['anil','sunil','neha'];
// for(let elements in arr){
//     console.log(elements);
// }

// var arr1=['anil','sunil','neha'];
// for(let elements of arr1){
//     console.log(elements);
// }

// var arr2=['anil','sunil','neha'];
// arr2.forEach(function(element,index,array){
//    console.log(element);
//     console.log(`${element} + ${index} and ${array}`);
// })


// searching 
// var arr=['anil','sunil','neha'];
// var find=arr.indexOf('b',2);
// console.log(find);
// var find1=arr.indexOf('anil',0);
// console.log(find1);

// var find2=arr.lastIndexOf('sunil');
// console.log(find2);

// var inclde=arr.includes('sunil',3)
// console.log(inclde);
// // filter

// var arr=['anil','sunil','neha','rahul'];

// var filtr=arr.filter((ele,index,array)=>{
//     return index>=2;
// })
//     console.log(filtr);

    // splice method and delete array 

 // const ages=[5,6,3,90,50];
//      const updateages =ages.splice(4,0,1001);
//      console.log(ages);

//     //  const updatea=ages.splice(2,5,156600);
//     //  console.log(ages);
//      const updateag=ages.splice(2,1,156600);
// console.log(updateag);


// const updateage=ages.splice(2,2,156600);
// console.log(ages);

// const updateage1=ages.splice(ages.length-1,1,600);
// console.log(ages);
// console.log(ages.length); 

// search String
// var para='this is the best song ever';
// const sPare= para.search('a');
// console.log(sPare);
// const sPara1=para.slice(6);
// console.log(sPara1);

// console.log(para.slice(7,-2));

// console.log(typeof para);
// console.log(para.split(','));

// console.log ( typeof para.split(','));
// var text3='a,d,c,s,f,w,r,s';
// console.log(typeof text3.split(','));

// date and time
// var date=new Date();
// var date1=date.toLocaleDateString();
// console.log(date1);
// console.log(Date.now());


// var dat=new Date(2021,06,05,20,50,21,0);
// console.log(dat.toLocaleString());

// var inclu=['imran','sunnil','heri','neha'];
// const result=inclu.includes('heri',3);
// console.log(result);
// console.log(inclu.lastIndexOf('heri',1));


// search and update array
 const update =['imran','sunnil','heri','neha'];
//   const indexOfarray=update.indexOf('imran');
//   console.log(indexOfarray);
//   const newup=update.splice(0,1,"Imran");
//   console.log(update);
//   console.log(update.indexOf('heri'));
//   const dele=update.splice(0,3);
//   console.log(update);
//   console.log(update);

 const maparray=update.map((cur,index,array)=>{
    return cur=="imran";
 })
 console.log(maparray);
 const fruits ='hello Lion is king of the jungle';
 newLenght=fruits.slice(0,6);
 console.log(newLenght);