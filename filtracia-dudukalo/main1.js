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
function filter(arr, prop, value) {
    let arrCopy = [...arr],
        result = [];
    for (const item of arrCopy) {
        if(String(item[prop]).includes(value) == true) result.push(item)
    }return result
}


function render(arr) {
    const $list = document.getElementById('myUl');

    $list.textContent = '';

    const fioValue = document.getElementById('fio-inp').value,
    ageValue = document.getElementById('age-inp').value;

    let newArr = [...arr];

    if (fioValue !== '') newArr = filter(newArr, 'fio', fioValue);
    if (ageValue !== '') newArr = filter(newArr, 'age', ageValue);

    for (const user of newArr) {
        const $li = document.createElement('li');
        $li.textContent = user.fio + ', Age: ' + user.age +'.'
        $list.append($li)
    }
}

document.getElementById('filter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    render(users)
})

render(users)


//
// function filter(arr, prop, value) {
//     let arrCopy = [...arr]
//     let result = [];
//     for (const item of arrCopy) {
//         if (String(item[prop]).includes(value)) result.push(item)
//     }
//     return result
// }
//
//
// console.log(filter(users, 'age', 17));
// console.log(filter(users, 'fio', 'e'));
//
// let arr = filter(users, 'fio', 'e')
// arr = filter(users, 'age', 17)
//
// console.log(arr)

// =================================

//
// let newList = [];
// for (const user of users) {
//     if (user.age == 17) newList.push(user)
// }


// let newList2 = [];
// for (const user of users) {
//     if (user.fio == 'Seldina Margarita Lvovna') newList2.push(user)
// }
// console.log(newList2)

//
// let newList2 = [];
// for (const user of users) {
//     if (user.fio.includes('e')) newList2.push(user)
// }
// console.log(newList2)
// let newList3 = []
// for (const user of newList2) {
//     // console.log(user)
//     if (String(user.age).includes('17')) newList3.push(user)
// }
//
// console.log(newList3)













