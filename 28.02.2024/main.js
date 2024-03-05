import Student from './student.js'

//  список студентов
let students = [
    new Student('Петров', 'Игорь', 'Васильевич', new Date(1991, 2, 13), 'Химия', 2011,),
    new Student('Похожев', 'Юлий', 'Степанович', new Date(1996, 4, 20), 'Физика', 2021,),
    new Student('Похожева', 'Юлия', 'Степановна', new Date(1996, 4, 20), 'Физика', 2017,),
    new Student('Шокин', 'Петр', 'Сергеевич', new Date(1990, 7, 12), 'Биохимия', 2022,),
    new Student('Стуков', 'Илья', 'Олегович', new Date(1995, 3, 5), 'Химия', 2019,),
]

const $studentList = document.getElementById('stud-list');
const $studentListThAll = document.querySelectorAll('.table-th th');

let column = 'fio',
    columnDir = true;


function $newStudentTr(student) {
    const $studentTr = document.createElement('tr'),
        $fioTd = document.createElement('td'),
        $birthdayTd = document.createElement('td'),
        $facultyTd = document.createElement('td'),
        $startTd = document.createElement('td')

    $fioTd.textContent = student.fio;
    $birthdayTd.textContent = student.birthDate + ' (' + student.age + ' лет)';
    $facultyTd.textContent = student.faculty;
    $startTd.textContent =  student.studyPeriod;

    $studentTr.append($fioTd);
    $studentTr.append($birthdayTd);
    $studentTr.append($facultyTd);
    $studentTr.append($startTd);

    return $studentTr;
}

// сортировка массива по параметрам
function getSortStudents(prop, dir) {
    let studentsCopy = [...students];
    return studentsCopy.sort(function (student1, student2) {
        if ((!dir == false ? student1[prop] < student2[prop] : student1[prop] > student2[prop]))
            return -1;
    })
}

// Фильтрация таблицы
function filter(arr, prop, value) {
    let arrCopy = [...arr],
        result = [];
    for (const item of arrCopy) {
        if (String(item[prop]).toLowerCase().includes(value) == true) result.push(item)
    }
    return result
}

// Отрисовка таблицы
function render() {
    let studentsCopy = [...students];
    studentsCopy = getSortStudents(column, columnDir);
    $studentList.innerHTML = '';
    console.log(studentsCopy)


    const surnameValue = document.getElementById('surname-filter').value.toLowerCase().trim(),
        nameValue = document.getElementById('name-filter').value.toLowerCase().trim(),
        patronymicValue = document.getElementById('patronymic-filter').value.toLowerCase().trim(),
        facultyValue = document.getElementById('faculty-filter').value.toLowerCase().trim(),
        birthdayValue = document.getElementById('birthday-filter').value,
        startValue = document.getElementById('start-filter').value

    if (surnameValue !== '') {
        $studentList.innerHTML = '';
        studentsCopy = filter(studentsCopy, 'surname', surnameValue)
    }

    if (nameValue !== '') {
        $studentList.innerHTML = '';
        studentsCopy = filter(studentsCopy, 'name', nameValue)
    }

    if (patronymicValue !== '') {
        $studentList.innerHTML = '';
        studentsCopy = filter(studentsCopy, 'patronymic',patronymicValue)
    }

    if (facultyValue !== '')  {
        $studentList.innerHTML = '';
        studentsCopy = filter(studentsCopy, 'faculty', facultyValue)
    }
    // if (nameValue !== '') studentsCopy = filter(studentsCopy, 'name', nameValue)
    // if (patronymicValue !== '') studentsCopy = filter(studentsCopy, 'patronymic',patronymicValue)
    // if (facultyValue !== '') studentsCopy = filter(studentsCopy, 'faculty', facultyValue)
    if (birthdayValue !== '') {studentsCopy = filter(studentsCopy, 'birthday', birthdayValue)}
    if (startValue !== '') {studentsCopy = filter(studentsCopy, 'start', startValue)}
    console.log(studentsCopy)

    for (const elem of studentsCopy) {
        $studentList.append($newStudentTr(elem))
    }
}



$studentListThAll.forEach(elem => {
    elem.addEventListener('click', function () {
        // console.log('click')
        column = this.dataset.column;
        columnDir = !columnDir;
        console.log(column)
        render()
    })
})

document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault();
    students.push(new Student(
        document.getElementById('surname-inp').value.trim(),
        document.getElementById('name-inp').value.trim(),
        document.getElementById('patronymic-inp').value.trim(),
        new Date(document.getElementById('birthday-inp').value),
        document.getElementById('faculty-inp').value.trim(),
        Number(document.getElementById('start-inp').value),
    ))
    render()
    document.getElementById('surname-inp').value = '';
    document.getElementById('name-inp').value = '';
    document.getElementById('patronymic-inp').value = '';
    document.getElementById('faculty-inp').value = '';
})

document.getElementById('filter-form').addEventListener('input', function (e) {
    e.preventDefault();
    render(students)
})

render()










