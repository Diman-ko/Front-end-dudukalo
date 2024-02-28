let arrNum = [4, 6, 1, 12, 6, 8,];

// let result = arr.sort()
// console.log(result) // [ 1, 12, 4, 6, 6, 8 ]

// let result = arr.sort(function(a, b) {
//     if (a > b) return -1
// })
// console.log(result) // [ 12, 8, 6, 6, 4, 1 ]

let result = arrNum.sort(function (a, b) {
    if (a < b) return -1
})
console.log(result) // [ 1, 4, 6, 6, 8, 12 ]

// ==================================================================

let arrStr = ['Олеся', 'Ян', 'Аня', 'Влад', 'Ира']

let resultStr = arrStr.sort(function (a, b) {
    if (a < b) return -1;
})

console.log(resultStr) // [ 'Аня', 'Влад', 'Ира', 'Олеся', 'Ян' ]

// ===========================================================================================

let array = [
    {
        name: 'Olia',
        age: 22,
    },
    {
        name: 'Pavel',
        age: 32,
    },
    {
        name: 'Alexei',
        age: 19,
    },
    {
        name: 'Boris',
        age: 15,
    },
]
// Сортировка по имени
// let resultByName = array.sort(function(a, b) {
//     if (a['name'] < b['name']) return  -1;
// });
//
// console.log(resultByName) //[
// { name: 'Alexei', age: 19 },
// { name: 'Boris', age: 15 },
// { name: 'Olia', age: 22 },
// { name: 'Pavel', age: 32 }
// ]

// Сортировка по возрасту

// let resultByAge = array.sort(function(a, b) {
//     if (a['age'] < b['age']) return  -1;
// });

// console.log(resultByAge) //[
// { name: 'Boris', age: 15 },
// { name: 'Alexei', age: 19 },
// { name: 'Olia', age: 22 },
// { name: 'Pavel', age: 32 }
// ]
//=================================================================

function sortUsers(arr, prop, dir = false) {
    let resultArr = arr.sort(function (a, b) {
        if (a[prop] < b[prop]) return -1;
    })
    return resultArr;
}

console.log(sortUsers(array, 'name')); // [
// { name: 'Alexei', age: 19 },
// { name: 'Boris', age: 15 },
// { name: 'Olia', age: 22 },
// {  name: 'Pavel', age: 32 }
// ]

let arrayDir = [...array];

function sortUsersDir(arr, prop, dir = false) {

    let resultArr = arr.sort(function (a, b) {
        let dirRight = a[prop] < b[prop];

        if (dir == true) dirRight = a[prop] > b[prop];

        if (dirRight == true) return -1;
    })
    return resultArr;
}

console.log(sortUsersDir(arrayDir, 'name')); //[
// { name: 'Alexei', age: 19 },
// { name: 'Boris', age: 15 },
// { name: 'Olia', age: 22 },
// { name: 'Pavel', age: 32 }
// ]


console.log(sortUsersDir(arrayDir, 'name', true)); //[
// { name: 'Pavel', age: 32 },
// { name: 'Olia', age: 22 },
// { name: 'Boris', age: 15 },
// { name: 'Alexei', age: 19 }
// ]

// ===========================================================================
let arrayTernar = [...array];

function sortUsersTernar(arr, prop, dir = false) {
// let resultArr = arr.sort(function(a,b){
// return arr.sort(function(a,b){
//     // let dirRight = dir == false ? a[prop] < b[prop] : a[prop] > b[prop];
//     // if (dir == false ? a[prop] < b[prop] : a[prop] > b[prop] == true) return -1;
//     if (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) return -1;
// })
    return arr.sort((a, b) => !dir ? a[prop] < b[prop] : a[prop] > b[prop] ? -1 : 1);
// return resultArr;
}

console.log(sortUsersTernar(arrayTernar, 'name', true))

const sortUsersTernar2 = (arr, prop, dir = false) => arr.sort((a, b) => (!dir ? a[prop] < b[prop] : a[prop] > b[prop] ? -1 : 1));

console.log('sortUsersTernar2');
console.log(sortUsersTernar2(arrayTernar, 'name', true)) //[
// { name: 'Pavel', age: 32 },
// { name: 'Olia', age: 22 },
// { name: 'Boris', age: 15 },
// { name: 'Alexei', age: 19 }
// ]



