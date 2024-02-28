const users = [
    {
        fio: 'Ivanov Vasiliy Viktorovich',
        login: 'Vasia123',
        age: 17,
    },
    {
        fio: 'Duda Alibaba Semenovich',
        login: 'Alik23',
        age: 17,
    },
    {
        fio: 'Strogov Ivan Petrovich',
        login: 'Vasia123',
        age: 23,
    },
    {
        fio: 'Petrov Semien Vasilievich',
        login: 'Senia123',
        age: 24,
    },
    {
        fio: 'Seldina Margarita Lvovna',
        login: 'Maga123',
        age: 25,
    },
];

// =================================================================
let newList = [];
// for (const item of users) {
//     // console.log(item) //  выведет всех при каждой итерации
//     if(item.age == 17) newList.push(item)
// }
// console.log(newList) // выведет только тех кому 17
// for (const item of users) {
//     // if (item.fio == 'Duda Alibaba Semenovich') newList.push(item)
//     if (item.fio.includes('Duda') == true) newList.push(item)
// }
// console.log(newList)
//фильтровать по нескольким критериям, фильтрация  по двум полям.
// let newList1 = [];
// for (const item of users) {
//     if (item.fio.includes('a')) newList1.push(item)
// }console.log(newList1)
//
// let newList2 = []; // создаём новый массив
// for (const item of newList1) {
//     if (String(item.age).includes('17') == true) newList2.push(item)
// }
// console.log(newList2)
// ============================================================================
// let newList3 = [];
function getFilter(arr, prop, value) {
    let resultArr = [],
    copy = [...arr];
    for (const item of copy) {
        // users.age ===users[age]
        if (String(item[prop]).includes(value) == true)  resultArr.push(item);
    }
    return resultArr;
}
// console.log(getFilter(users, 'fio', 'l'));
// console.log(newList3)

function render(arr) {
    const ulList = document.querySelector('.users-list');
    ulList.innerHTML = '';  // clear

    //  получаем значения из наших полей
    const fioValue = document.getElementById('fio-inp').value,
    ageValue = document.getElementById('age-inp').value;
    let  newArr = [...arr];
    if (fioValue !== '') newArr = getFilter(newArr, 'fio', fioValue);
    if (ageValue !== '') newArr = getFilter(newArr, 'age', ageValue);
    // =========================================


    for (const user of newArr) {
        const liEl = document.createElement('li');
        liEl.textContent = user.fio + ', Age: ' + user.age;
        ulList.append(liEl);
    }
}

document.getElementById('filter-form').addEventListener('submit', function (event) {
    event.preventDefault();
    render(users);
});

render(users);











