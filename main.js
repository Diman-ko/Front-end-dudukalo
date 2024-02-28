// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).

// Этап 2. Создайте массив объектов студентов. Добавьте в него объекты студентов, например 5 студентов.

const studentsList = [

    {
        id: 1,
        name: 'Ilia',
        patronymic: ' Petrovich',
        surname: 'Bykov',
        birthday: new Date(1994, 5, 12),
        start: 2000,
        faculty: 'cymistry',
    },
    {
        id: 2,
        name: 'Olia',
        patronymic: 'Vasilievna',
        surname: 'Bychkova',
        birthday: new Date(1994, 2, 1),
        start: 2000,
        faculty: 'cymistry',
    },
    {
        id: 2,
        name: 'Ulia',
        patronymic: 'Konstatinovna',
        surname: 'Pypkina',
        birthday: new Date(1994, 9, 1),
        start: 2000,
        faculty: 'cymistry',
    },
    {
        id: 2,
        name: 'Olia',
        patronymic: 'VIlievna',
        surname: 'Kiva',
        birthday: new Date(1994, 10, 1),
        start: 2002,
        faculty: 'cymistry',
    },
    {
        id: 3,
        name: 'Vasilij',
        patronymic: 'Ivanovich',
        surname: 'Libidze',
        birthday: new Date(1994, 3, 23),
        start: 2001,
        faculty: 'cymistry',
    },
    // Добавьте сюда объекты студентов
]

// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод
// одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.
// У функции должен быть один аргумент - объект студента.

function getStudentItem(studentObj) {
    const newTr = document.createElement('tr');
    const newTdFio = document.createElement('td');
    // ---------------------------------------------------------------------------------
    const newTdBirthday = document.createElement('td');
    const today = new Date(studentObj.birthday);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;  // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = dd + '.' + mm + '.' + yyyy;
    // ---------------------------------------------------------------------------------
    const newTdStart = document.createElement('td');
    const newTdFaculty = document.createElement('td');
    // ----------------------------------------------------------------------------------
    newTdFio.textContent = `${studentObj.name} ${studentObj.patronymic} ${studentObj.surname}`;
    newTdBirthday.textContent = formattedToday;
    newTdFaculty.textContent = studentObj.faculty;
    newTdStart.textContent = studentObj.start;
    newTr.append(newTdFio, newTdBirthday, newTdStart, newTdFaculty);
    return newTr
}

// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.
// Функция должна использовать ранее созданную функцию создания одной записи для студента.
// Цикл поможет вам создать список студентов. Каждый раз при изменении списка студента вы будете вызывать
// эту функцию для отрисовки таблицы.

function renderStudentsTable(studentsArray) {
    let copyArr = [...studentsArray];
    const studentTable = document.getElementById('stud-table');

    studentTable.innnerHTML = '';
    for (const studentObj of copyArr) {
        const $newTr = getStudentItem(studentObj);
        studentTable.append($newTr)
    }
}

renderStudentsTable(listStudents)

// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет
// проверка введенных данных. Если проверка пройдет успешно, добавляйте объект с данными студентов в
// массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.


// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
// =============================================================================================

// const $studTable = document.getElementById('stud-table');
//
//
// let listStudents = [
//     {
//         id: 1,
//         name: 'Ilia',
//         patronymic: ' Petrovich',
//         surname: 'Bykov',
//         birthday: new Date(1994, 5, 12),
//         start: 2000,
//         faculty: 'cymistry',
//     },
//     {
//         id: 2,
//         name: 'Olia',
//         patronymic: 'Vasilievna',
//         surname: 'Bychkiva',
//         birthday: new Date(1994, 2, 1),
//         start: 2000,
//         faculty: 'cymistry',
//     },
//     {
//         id: 3,
//         name: 'Vasilij',
//         patronymic: 'Ivanovich',
//         surname: 'Libidze',
//         birthday: new Date(1994, 3, 23),
//         start: 2000,
//         faculty: 'cymistry',
//     },
// ];
// // console.log(listStudents)//  проверка работает
//
// function renderStudentsTable(studentsArray) {
//
//     const newTr = document.createElement('tr')
//     const newTdFio = document.createElement('td')
//     // ---------------------------------------------------------------------------------
//     const newTdBirthday = document.createElement('td')
//     const today = new Date(studObj.birthday);
//     const yyyy = today.getFullYear();
//     let mm = today.getMonth() + 1; // Months start at 0!
//     let dd = today.getDate();
//     if (dd < 10) dd = '0' + dd;
//     if (mm < 10) mm = '0' + mm;
//     const formattedToday = dd + '.' + mm + '.' + yyyy;
//     // ---------------------------------------------------------------------------------
//     const newTdStart = document.createElement('td');
//     const newTdFaculty = document.createElement('td');
//     // ----------------------------------------------------------------------------------
//
//     newTdFio.textContent = `${studObj.name} ${studObj.patronymic} ${studObj.surname} `;
//     newTdBirthday.textContent = formattedToday;
//     newTdStart.textContent = studObj.start;
//     newTdFaculty.textContent = studObj.faculty;
//     // -------------------------------------------------------------------------------------
//     newTr.append(newTdFio, newTdBirthday, newTdStart, newTdFaculty);
//
//  }
// for (const studObj of listStudents) {
//     // console.log(listStudents)
//     $studTable.append(newTr);
// };
//
// // =====================================================================================================
//
