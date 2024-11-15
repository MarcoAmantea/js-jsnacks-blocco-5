const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const evenNum = nums.filter((curNums) => {
    return (curNums % 2) === 0
})
console.log(evenNum);


//ALTRO METODO//

//let evenNums = []
//nums.forEach((curNum) =>{
//    if(curNum % 2 === 0){
//        evenNums.push(curNum)
//    }
//})
//console.log(evenNums);

