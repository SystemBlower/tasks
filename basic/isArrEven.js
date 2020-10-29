 const mixedArray = [3,13,74,14,66,15,22,4];//задаем массив
 
 const isEven = num =>{
 return num % 2 == 0;//проверяется остаток от деления на 2 
 }
 
const filterArray = (arrayToFilter, filterFn) => {
	
  const filteredArray=[];
  
  arrayToFilter.forEach(num => {
  if (filterFn(num)){
 		filteredArray.push(num);
  }
  })
  
  return filteredArray;

}


      console.log(filterArray(mixedArray, isEven));
     