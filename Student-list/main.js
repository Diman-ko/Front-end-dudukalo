import Students from './students.js '

// let listStudent = [
//     {
//         name: 'Илья',
//         patronymic: 'Олегович',
//         surname: 'Стуков',
//         birthday: new Date(1995, 3, 5),
//         faculty: 'Химия',
//         start: 2019,
//     },
//     {
//         name: 'Юлия',
//         patronymic: 'Степановна',
//         surname: 'Похожев',
//         birthday: new Date(1996, 4, 20),
//         faculty: 'Химия',
//         start: 2017,
//     },
//     {
//         name: 'Петр',
//         patronymic: 'Сергеевич',
//         surname: 'Шокин',
//         birthday: new Date(1990, 7, 12),
//         faculty: 'Химия',
//         start: 2012,
//     },
// ]

let listStudents = [
    new student('Илья', 'Олегович', 'Стуков', new Date(1995, 3, 5), 'Химия', 2019,),
    new student('Юлия', 'Степановна', 'Похожев', new Date(1996, 4, 20), 'Химия', 2017,),
    new student('Петр', 'Сергеевич', 'Шокин', new Date(1990, 7, 12), 'Химия', 2012,),
]
// console.log(listStudent);

console.log(fio)
function getNewStudentTr(studObj) {
    const newTr = document.createElement('tr');
    const fioTd = document.createElement('td');
    const birthdayTd = document.createElement('td');
    const facultyTd = document.createElement('td');
    const startTd = document.createElement('td');

    fioTd.textContent = `${studObj.name}  ${studObj.patronymic}  ${studObj.surname}`;
    // -----------------------------------------------------------------------------------
    const today = new Date(studObj.birthday);
    const yyyy = today.getFullYear();
    let mm = today.getMonth();
    let dd = today.getDate()
    if (mm < 10) mm = '0' + mm;
    if (dd < 10) dd = '0' + dd;
    const formattedToday = yyyy + '.' + mm + '.' + dd;
    birthdayTd.textContent = formattedToday;
// -------------------------------------------------------------------------------------------
    facultyTd.textContent = studObj.faculty;
    startTd.textContent = studObj.start;

    newTr.append(fioTd, birthdayTd, facultyTd, startTd);
    return newTr

}

function renderStudent(arr) {
    let copyArr = [...arr]
    const studTable = document.getElementById('stud-table');
    studTable.textContent = '';
    for (const studObj of copyArr) {
        // console.log(studObg);
        const $newTr = getNewStudentTr(studObj);

        studTable.append($newTr);
    }
}

renderStudent(listStudents)

document.getElementById('add-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let newStudentObj = {
        name: document.getElementById('name-inp').value,
        patronymic: document.getElementById('patronymic-inp').value,
        surname: document.getElementById('surname-inp').value,
        birthday: new Date(document.getElementById('birthday-inp').value,),
        faculty: document.getElementById('faculty-inp').value,
        start: document.getElementById('start-inp').value,
    }
    listStudent.push(newStudentObj);
    renderStudent(listStudent)
    document.getElementById('name-inp').value = '';
    document.getElementById('patronymic-inp').value = '';
    document.getElementById('surname-inp').value = '';
    document.getElementById('birthday-inp').value = '';
    document.getElementById('faculty-inp').value = '';
    document.getElementById('start-inp').value = 'Год поступления';

})


function sortTableByColumn(html_table_object) {
    //  получаем голову таблицы
    let head = html_table_object.tHead;
    //  Получаем тело таблицы
    let body = html_table_object.tBodies[0];
    //  Получаем ячейки головы (объекты с названием столбцов)
    let column_marks = head.children[0].children;
    //  Получаем элементы тела (записи)
    let rows = body.children;
    //  Положение элемента заголовка столбца
    let position;
    //  Переключатель порядка сортировки
    let trigger = true;

    //  Слушатель события клика
    html_table_object.addEventListener('click', handler1)


    //  Обработчик события клика
    function handler1(event){
        // console.log('Клик сработал на таблице')
        let t = event.target;
        if(t.parentNode == column_marks[0].parentNode) {
            position = [...column_marks].findIndex(el=>el==t);
            console.log(`индекс ячейки: ${position}`);
            handler2(position);

        }
    };
    function handler2(position) {
        if(trigger) {
            trigger = false;
            body.replaceChildren(...sortBodyAsc(position));
        }else {
            trigger = true;
            body.replaceChildren(...sortBodyDesc(position));
        }
    };

    //  Функция сортировки
    //  Массив, сортированный по возрастанию
    function sortBodyAsc(position) {
        return [...rows].sort((a, b) => (a.children[position].innerText < b.children[position].innerText ?  -1: 1))
    }
    //  Массив, сортированный по убыванию
    function sortBodyDesc(position) {
        return [...rows].sort((a, b) => (a.children[position].innerText > b.children[position].innerText ?  -1: 1))
    }
}

sortTableByColumn(document.querySelector("body > div > table"))



