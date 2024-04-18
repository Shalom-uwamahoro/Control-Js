//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values


let numbers=[22,33,44,55,66,77];
let newarr=[];
function addMultiply(){
  numbers.slice(0,4).forEach((a)=>{
    newarr.push(a*a)
  });
  numbers.slice(-2).forEach((a)=>{
    newarr.push(a+10)
  });
  console.log(newarr)
  return newarr
}
addMultiply(newarr);

// function multiplyAdd(arrNumb){
//     arrNumb.forEach((numb, index)=>{
//         if(index < 4){
//             arrNumb[index] = numb * numb;
//         }
//         else if(index >= arrNumb.length - 2){
//             arrNumb[index]= numb + 10;
//         }

//  })
//     console.log(arrNumb);
//     return arrNumb;
   
//      };
// multiplyAdd(arrNumb);   This is wrong because I did not create a new array that will hold new nbrs



//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

let arrNum = [1,2,3,4,5,6,7,8,9];
let i = 0;
     while (i < arrNum.length)
      {  if (arrNum[i] === 4)   //if we were to set i only as a conditin in if() then it would be if(i===3)
        break; 
         console.log(arrNum[i])
         i++;
       };


//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

let fruits= ['apple','plum','banana','strawberries','kiwi']

function arrStrs(array) {
    for (let i = 0; i < array.length; i++) {
        if (i === 1) 
            continue; 
            console.log(array[i])
        
        } };

  arrStrs(fruits);


// //Write a function that accepts an array of strings and console.logs each element using a for loop.

   function arrString(arr){
     for (let j = 0; j < arr.length; j++) {
       console.log(arr[j]); }
   }
    arrString(['Nice', 'Digestive', 'Riham', 'Akarabo']);


// //Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.


function reversedString(strs){
  let reverse = '';
  let j = strs.length - 1;
     while (j >= 0)
     { reverse += strs[j]; j--; }
    return reverse; };

let reverseString = reversedString("I enjoy coding");   
 console.log(reverseString);




