// const $studTable = document.getElementById('stud-table');

let listStudents = [
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
        surname: 'Bychkiva',
        birthday: new Date(1994, 2, 1),
        start: 2000,
        faculty: 'cymistry',
    },
    {
        id: 3,
        name: 'Vasilij',
        patronymic: 'Ivanovich',
        surname: 'Libidze',
        birthday: new Date(1994, 3, 23),
        start: 2000,
        faculty: 'cymistry',
    },
];

// console.log(listStudents)//  проверка работает

function getNewStudentTR(studObj) {
    const newTr = document.createElement('tr')
    const newTdFio = document.createElement('td')
    // ---------------------------------------------------------------------------------
    const newTdBirthday = document.createElement('td')
    const today = new Date(studObj.birthday);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = dd + '.' + mm + '.' + yyyy;
    // ---------------------------------------------------------------------------------
    const newTdStart = document.createElement('td');
    const newTdFaculty = document.createElement('td');
    // ----------------------------------------------------------------------------------

    newTdFio.textContent = `${studObj.name} ${studObj.patronymic} ${studObj.surname} `;
    newTdBirthday.textContent = formattedToday;
    newTdStart.textContent = studObj.start;
    newTdFaculty.textContent = studObj.faculty;
    // -------------------------------------------------------------------------------------
    newTr.append(newTdFio, newTdBirthday, newTdStart, newTdFaculty);
    return newTr

};


// =====================================================================================================

function render(arr) {
    let copyArr = [...arr];
    const $studTable = document.getElementById('stud-table');
    // сортировка массива
    // const table = document.getElementById('table')
    // table.onclick = function(e) {
    //     if (e.target.tagName != 'TH') return
    //     let th = e.target;
    //     sortTable(th.cellIndex, th.dataset.type);
    //     function sortTable(colNum, type) {
    //         let tbody = table.querySelector('tbody');
    //         let rowsArray = Array.from(tbody.rows);
    //         let compare;
    //         switch(type) {
    //             case 'number':
    //                 compare = function(rowA, rowB) {
    //                     return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
    //                 }
    //                 break;
    //             case 'string':
    //                 compare = function(rowA, rowB) {
    //                     return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1: -1;
    //                 }
    //                 break;
    //         }
    //         rowsArray.sort(compare);
    //         tbody.append(...rowsArray);
    //
    //     }

    }

    //фильтрация массива


    $studTable.innerHTML = ''; // clear
    for (const studObj of copyArr) {
        // console.log(listStudents)
        const $newTr = getNewStudentTR(studObj)
        $studTable.append($newTr);
    }
};

render(listStudents);

// =====================================================================

document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let newStudentObj = {
        // id: 1,
        name: document.getElementById('name-inp').value,
        patronymic: document.getElementById('patronymic-inp').value,
        surname: document.getElementById('surname-inp').value,
        birthday: new Date(document.getElementById('birthday-inp').value),
        start: document.getElementById('surname-inp').value,
        faculty: document.getElementById('faculty-inp').value,
    }

    listStudents.push(newStudentObj);

    render(listStudents);
});

