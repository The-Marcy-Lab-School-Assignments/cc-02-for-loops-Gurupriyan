//1
function countToTen(){
  for (let i = 1; i <= 10; i++){
      console.log(i);
  }
}

//2
function countFromOne( num ){
    for (let i = 1; i < num; i++){
        console.log(i);
    }
}

//3
function countEveryEven(num){
    for (let i = 1; i <= num; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

//4
function countEveryOdd(num){
  for (let i= 1; i <= num; i += 2){
      console.log(i);
  }
}

//5 
let evenArray = [];
function countEvens(array){
  for (let i = 0; i < array.length; i++){
      if (array[i] % 2 === 0){
          evenArray.push(array[i]);
      }
  }
  return evenArray;
}


countToTen();
countFromOne(12);
countEveryEven(14);
countEveryOdd(15);
console.log(countEvens([1,2,3,4,5,6,7,8,9,10]));