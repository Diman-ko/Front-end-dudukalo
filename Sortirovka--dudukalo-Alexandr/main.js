// // Сортировка методом пузырька
//
// let a = 5;
// let b = 3;
// console.log('До', a , b) //  до сортировки  => 5 3
//
// if (a>b) {
//     let temp = a;
//     a = b;
//     b = temp;
// }
//
// console.log('После', a , b) // до сортировки  => 5 3
// =========================================================
// const arrSorted = [1, 2, 3, 4, 5,]
const arrUnsorted = [3, 5, 4, 1, 2,]
// =========================================================
// const arrSorted = [1, 2, 3, 4, 5,]
// const arrUnsorted = [3, 5, 4, 1, 2,]
// let arr = Object.assign([], arrUnsorted);
// console.log(arr) //[3, 5, 4, 1, 2,]
// console.log(arrUnsorted)//[3, 5, 4, 1, 2,]
// arr.push(6)
// console.log(arr)                // => [3, 5, 4, 1, 2, 6]
// console.log(arrUnsorted) //[3, 5, 4, 1, 2,]
// ===================== сортировка по возрастанию ===========================================
// let count = 0
// for (let j = 0; j < arrUnsorted.length; j++) {
//     for (let i = 0; i < arrUnsorted.length-1 ; i++) {
//         let a = arrUnsorted[i];
//         b = arrUnsorted[i+1];
//         if ( a > b) {
//             let temp = a;
//             a = b;
//             b = temp;
//         }
//         arrUnsorted[i] = a;
//         arrUnsorted[i + 1] = b;
//     }
//     count++
// }
// console.log(count)
// console.log(arrUnsorted)

// =========== Упрощаем сортировку ================
let count = 0
for (let j = 0; j < arrUnsorted.length; j++) {
    for (let i = 0; i < arrUnsorted.length-1 ; i++) {

        if ( arrUnsorted[i] > arrUnsorted[i +1]) {
            let temp = arrUnsorted[i];
            arrUnsorted[i] = arrUnsorted[i +1];
            arrUnsorted[i +1] = temp;
        }
    }
    count++
}


console.log(count)
console.log(arrUnsorted)


// ===================== сортировка по убыванию ===========================================

for (let j = 0; j < arrUnsorted.length; j++) {
    for (let i = 0; i < arrUnsorted.length-1 ; i++) {

        if ( arrUnsorted[i] < arrUnsorted[i +1]) {
            let temp = arrUnsorted[i];
            arrUnsorted[i] = arrUnsorted[i +1];
            arrUnsorted[i +1] = temp;
        }
    }
    count++
}


console.log(count)
console.log(arrUnsorted)


// ===================== сортировка по убыванию ===========================================

function getSot(arr) {
    let result = [...arr];
    for ( let j = 0; j < result.length; j++) {
        for (let i =0; i < result.length-1; i++) {
            if(result[i] > result[i+1]) {
                let temp = result[i];
                result[i] = result[i+1];
                result[i+1] = temp;
            }
        }
    }
return result
}

console.log(count)
console.log(getSot(arrUnsorted))


