// alert('jhlkahfdhsakjfasdf')
const studentsList = [
    {
        name: 'Ilia',
        patronymic: ' Petrovich',
        surname: 'Bykov',
        birthday: new Date(1991, 5, 12),
        start: 2004,
        faculty: 'cymistry11',
    },
    {
        name: 'Olia',
        patronymic: 'Vasilievna',
        surname: 'Bychkova',
        birthday: new Date(1992, 2, 1),
        start: 2003,
        faculty: 'cymistry4',
    },
    {
        name: 'Ulia',
        patronymic: 'Konstatinovna',
        surname: 'Pypkina',
        birthday: new Date(1993, 9, 1),
        start: 2000,
        faculty: 'cymistry3',
    },
    {
        name: 'Olia',
        patronymic: 'VIlievna',
        surname: 'Kiva',
        birthday: new Date(1994, 10, 1),
        start: 2002,
        faculty: 'cymistry2',
    },
    {
        name: 'Vasilij',
        patronymic: 'Ivanovich',
        surname: 'Libidze',
        birthday: new Date(1995, 3, 23),
        start: 2001,
        faculty: 'cymistry1',
    },
]

// console.log(studentsList)

function getNewStudentTr(studObj) {
    const newTr = document.createElement('tr');
    const tdFio = document.createElement('td');
    const tdBirth = document.createElement('td');
    const today = new Date(studObj.birthday);
    const yyyy = today.getFullYear();
    let mm = today.getMonth();
    let dd = today.getDate()
    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;
    const formattedToday = dd + '.' + mm + '.' + yyyy;

    const tdFaculty = document.createElement('td');
    const tdStart = document.createElement('td');

    tdFio.textContent = `${studObj.surname} ${studObj.name} ${studObj.patronymic}`;
    tdBirth.textContent = formattedToday;
    tdFaculty.textContent = `${studObj.faculty}`;
    tdStart.textContent = `${studObj.start}`;


    newTr.append(tdFio, tdBirth, tdFaculty, tdStart);

    return newTr
}

function render(arr) {
    let copyArr = [...arr];
    const studTable = document.getElementById('stud-table');
    // сортировка массива  copyArr
    // function sort(arr, prop, dir = false) {
    // // let result = arr.sort(function(a,b) {
    // return arr.sort(function(a,b) {
    //     // console.log(a,b)
    //     // let dirIf = dir == false ? a[prop] < b[prop] : a[prop] > b[prop]
    //
    //     // let dirIf = a[prop] < b[prop];
    //     // if (dir == true) dirIf = a[prop] > b[prop];
    //     // if (dirIf == true) return -1;
    //     // if (dir == false ? a[prop] < b[prop] : a[prop] > b[prop] == true) return -1;
    //     // if (dir == false ? a[prop] < b[prop] : a[prop] > b[prop] ) return -1;
    //     if (!dir ? a[prop] < b[prop] : a[prop] > b[prop] ) return -1;
    //
    // })
    // return result
    // return arr.sort((a,b) => !dir ? a[prop] < b[prop] : a[prop] > b[prop] ? -1 : 1)
    // }
    const sort = (arr, prop, dir = false) => arr.sort((a, b) => (!dir ? a[prop] > b[prop] : a[prop] < b[prop]) ? -1 : 1)
    // console.log(sort(arr, 'surname', true))

    // const nameInp = document.addEventListener('click', function() {
    //     sort(arr, 'surname', true)
    // })

   document.getElementById('table-fio').addEventListener('click', function(event) {
        // console.log('Это клик по таблице', sort(arr, 'surname', true))// ловит клики по таблице
       studTable.textContent = '';

       sort(arr, 'surname', true)
       render(arr)
    })

    document.getElementById('table-faculty').addEventListener('click', function(event) {
        // console.log('Это клик по таблице', sort(arr, 'surname', true))// ловит клики по таблице
        studTable.textContent = '';
       sort(arr, 'faculty', true)
       render(arr)
    })

    document.getElementById('table-birth').addEventListener('click', function(event) {
        // console.log('Это клик по таблице', sort(arr, 'surname', true))// ловит клики по таблице
        studTable.textContent = '';
       sort(arr, 'birthday', true)
       render(arr)
    })

    document.getElementById('table-start').addEventListener('click', function(event) {
        // console.log('Это клик по таблице', sort(arr, 'surname', true))// ловит клики по таблице
        studTable.textContent = '';
       sort(arr, 'start', true)
       render(arr)
    })
// =============================================
    //  Фильтрация массива
    function filter(arr, prop, value) {
        let result = [];
        let copyArr = [...arr]
        for (const item of copyArr) {
            if (String(item[prop]).includes(value) == true) result.push(item)
        }
        return result;
    }

// =============================================

    studTable.textContent = '';

    for (const studObj of copyArr) {
        // console.log(studObj)
        const newTrObj = getNewStudentTr(studObj);
        studTable.append(newTrObj);
    }
}

render(studentsList);


document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Валидация
    if (!document.getElementById('name-inp').value.trim()) {
        return
    }
    if (!document.getElementById('patronymic-inp').value.trim()) {
        return
    }
    if (!document.getElementById('surname-inp').value.trim()) {
        return
    }
    if (!document.getElementById('faculty-inp').value.trim()) {
        return
    }
    let newStudentObj = {
        name: document.getElementById('name-inp').value.trim(),
        patronymic: document.getElementById('patronymic-inp').value.trim(),
        surname: document.getElementById('surname-inp').value.trim(),
        birthday: new Date(document.getElementById('birthday-inp').value),
        start: document.getElementById('start-inp').value,
        faculty: document.getElementById('faculty-inp').value.trim(),
    }

    // console.log(newStudentObj)
    studentsList.push(newStudentObj);
    render(studentsList);

    document.getElementById('name-inp').value = ''; //  для очистки поля ввода, присваиваем ему пустую строку
    document.getElementById('patronymic-inp').value = ''; //  для очистки поля ввода, присваиваем ему пустую строку
    document.getElementById('surname-inp').value = ''; //  для очистки поля ввода, присваиваем ему пустую строку
    document.getElementById('faculty-inp').value = ''; //  для очистки поля ввода, присваиваем ему пустую строку

    // оставляем фокус на поле ввода  input
    document.getElementById('name-inp').focus();
})