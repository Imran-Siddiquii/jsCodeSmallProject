//  basic problem with javascript

//print number from 1 to 10
 
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     }

    //print odd number less then 100;
    // for (i = 1; i <10 ; i+=2) {
    //   console.log(i);
    // }
    //print the multiplecation with 7

    // for(var i=0;i<=10;i++){
    //    var num=7;
    //     console.log('table of ' + num +'into' + i + '=' + num*i);
    // }

    // print all the application table with number from 1 to 10;

    // for(var i=1;i<=10;i++){
    //   for(var j=1;j<=10;j++){
    //     console.log('print table' + i + "*" + j + "=" + i*j );
    //   }
    // }

    // Coding challenge #5: Calculate the sum of numbers from 1 to 10

    // var sum=0;
    // for(var i=1; i<=10;i++){
    //     sum +=i;
    //     console.log(sum);
    // }

    // Coding challenge #6: Calculate 10!

 //Day 2 
 
   //  Coding challenge #6: Calculate 10!

    // var Calculate=1;
    // for(var i=1;i<=10;i++){
    //   Calculate *=i;
    //   console.log(Calculate);
    // }

    // Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30

    // var sum=0;
    // for(var i=11;i<=30;i+=2){
    //   sum +=i;
    //   console.log(sum);
    // }
       
      
    // Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
    //censius to fahrenheit
    // function CtoF(a) {
    //   convert=(a*9/5) +32;
    //   console.log(convert);
    // }
    // CtoF(30);

    // Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
//  fahrenheit to celsius
    // function FtoC(a) {
    //   convert=(a- 32)*5/9;
    //   console.log(convert);
    // }
    // FtoC(25);
      


    // Coding challenge #10: Calculate the sum of numbers in an array of numbers

    // var number=[2, 3, -1, 5, 7, 9, 10, 15, 95];
    // var sum=0;
    // for (const key of number) {
    //   sum += key;
    //    console.log(sum);
    // }

    // Coding challenge #11: Calculate the average of the numbers in an array of numbers

    // var num1=[6,8,4,2,8,4,3,-5,-9];
    // var sum=0;
    //  var n=num1.length;
    //  console.log(n);
    // for(let arr of num1){
    //    sum +=arr;
    //    console.log(sum/n);
    //   }
    
    // var arr=[5,6,4,9]
    //   function avarage(arr) {
    //     var sum=0;
    //     var n=arr.length;
    //     for(i=0;i<n;i++){
    //       sum += arr[i];
    //     }
    //     // sumof number 
    //     console.log(sum);
    //     //avarage of number
    //     console.log("number of array " + sum/n); 
    //   }
    //   // avarage(arr);
    //   var number1=avarage(arr);

    //   console.log(number1);

      // Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

      // var number2=[-12,-5,6,7,8,-10,12];
      //  n=number2.length;
      // function arr(number2) {
      //   for(i=0;i<n;i++){
      //     var pos=number2[i];
      //     console.log(pos);
      //   }
      // }
        
      //   arr(number2)


// function getPositives(ar)
// {
//     var ar2 = [];
    
//     for(var i = 0; i < ar.length; i++)
//     {
//         var el = ar[i];
        
//         if (el >= 0)
//         {
//             ar2.push(el);
//         }
//     }
    
//     return ar2;

// }
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// // var ar2 = getPositives(ar);

// // console.log(ar2);
//    function postive(ar) {
//     return ar.filter((e)=> e>=0);
//   }
//   var ar2=postive(ar);
//    console.log(ar2); 

  //  Coding challenge #13: Find the maximum number in an array of numbers

//   var maxnumber=[100,20,1,54,60,401];
   
//   function max(maxnumber) {
//     var numbermax=maxnumber[0];
//     for(i=1;i<maxnumber.length;i++){
//       if(maxnumber[i] > numbermax){
//          numbermax=maxnumber[i];
//       }
//     }
//     return numbermax;
//   }
//  var no= max(maxnumber);
//  console.log(no);


// find a minmium number of array 
//step1  array = [3,4,2,1,4]
// step2  array supppose arry[0] < array[1]

// function minNumber(arr) {
   
//   if(!arr.length){
//     throw new Error('array sholud not be empty');
//    }
//     var min = arr[0]; 
//    for (let i = 1; i < arr.length; i++) {
//     if(arr[i] < min){
//       min = arr[i]
//     }
    
//    }
//    return min;
// }
// var arr=[4,3,8,6,8];
//   var result= minNumber(arr);
//   console.log(result);

  // find the max number

  // array  [2,6,8,74,14,10,1] find max number
  //  maxnumber array[0]
  // compare with arr[0]>array[1] 
  //   array[i] =arr[0];
  // ruturn arr[0];

  // function maxNumber(arr1) {
  //   if(!arr1.length){
  //     console.log("array sholud not be empty");
  //   }
  //   else if(arr1.length==1){
  //     console.log(arr1);
  //   }
  //   else{
  //     var max=arr1[0];
  //     for( var i=1;i<arr1.length;i++){
  //       if(arr1[i]> max){
  //         max=arr1[i];
  //       }
  //     }
  //     return max;
  //   }
  // }
  //  const maxresult=maxNumber([45,100,698,1440]);
  //  console.log(maxresult);

  //  find minimum number with different appraoch
    // [2,6,7,10];

  // fisrt i will sort array and will access first elementt 
  // then call comapare to next element fisrt[0] > sencod[1] swap second[1]== first[0]
  // then fisrt index will check to third index secoond[1]> third[i] third[i]=second[i]  
  // and repeat till end

// log approach will take more time then fisrt one
//   function mini(array) {
//     for (let i = 0; i < array.length; i++) {
//           let outernumber=array[i];
//           for (let j =i+1 ; j < array.length; j++) {
//               let innernumber =array[j];
//                if (outernumber>innernumber) {
//                 array[i]=innernumber;
//                 array[j]=outernumber;
//                 outernumber=array[j];
//                 innernumber=array[i];
//                 } 
//               }
//             }
//             return array[0]
//           }
// const result3=mini([5,1,6,3])
// console.log(result3);

//squre with given array

// [2,4,6,1,7,5]-->[4,16,36,49,25]
 
// function findSqure(square) {
//   const Square=square.map((ele)=>ele*ele)
//   return Square;
// }
//  var square1=findSqure([2,9,4,2,1,6]);
// console.log(square1);
           
          
 // find a 2 number in array whose sum is zero;
 
 function sumToZero(sumarray) {
  if(!sumarray.length){
    throw console.log("array should not be empyt");
  }
  if(sumarray.length==1){
    console.log("must be 2 number");
  }
  // if(sumarray<0 && sumarray >0){
  //   console.log('array must have one positive number and one negative number');
  // }
  for(var i=0;i<sumarray.length-1;i++){
    // console.log(i);
    // console.log(sumarray[i]);
    var num=0;
    var negative;
    var positive;
    if(sumarray[i] < num){
       negative= sumarray[i]
      console.log( "negative number" + "=" + negative);
    }
    if(sumarray[i]>num){
      positive=sumarray[i]
      console.log("positive number " + "=" + positive);
    }
    if(negative === num){
    console.log("negative number " + negative + "positive number" + positive + "==" + num );
    }
  }
  // console.log(positive);
  // return negative , positive;
}
  var sumZero=sumToZero([-5,6,-4,3,0,1,33,-7,-5,45]);
  console.log(sumZero);  

  // not getting answer
  // another method Means try

  // compare fisrt element to all element to check is true or not 

  // array [ -4,- 6, 2, -1,9,7,6,-8 ]

//   function zero(SumZero) {
//     let start=SumZero[0];

//     for(let i=1;i<SumZero.length;i++){
//       if(SumZero[i]== +start){
        
//       }
//     }
//   }
// var ss= zero([-4,- 6, 2, -1,9,7,6,-8]);
// console.log(ss);

  // different apparoch

  function getnumber(array) {
    for(let number of array){
      for(var i=1;i<array.length;i++){
        if(number + array[i] === 0 ){
          return [number,array[i]]
        }
      }
    }
  }
  const result=getnumber([-3,-5,8,-6,-4,-4,-8])
  console.log(result);


  // different approach  keep pointer both side and compare with start point to last point 

  function pointerSum(array) {
    var left=array[0];
    var right=array.length-1;
    while(left < right){
     let sum = array[left] + array[right];
      if(sum===0){
      return [array[left],array[right]]
      }
     else if(sum>0){
        right--;
      }else{
        left++;
    }
    }
  }
  const result1=pointerSum([-5,-4,-3,7,-2,-1,0,1,-5,9,-7,10])
  console.log(result1);