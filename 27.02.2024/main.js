import Student from './student.js'

const studentsArray = [
    new Student('Илья', 'Олегович', 'Стуков', new Date(1995, 3, 5), 'Химия', 2019,),
    new Student('Юлия', 'Степановна', 'Похожев', new Date(1996, 4, 20), 'Физика', 2017,),
    new Student('Петр', 'Сергеевич', 'Шокин', new Date(1990, 7, 12), 'Биохимия', 2012,),
]

const $studentsList = document.getElementById('student-list')

for (const student of studentsArray) {
    console.log(student)
}

function $newStudentTr(student) {
    const $studentTr = document.createElement('tr'),
     $fioTd = document.createElement('td'),
     $birthdayTd = document.createElement('td'),
     $facultyTd = document.createElement('td'),
     $startTd = document.createElement('td')



    $fioTd.textContent = student.fio;
    $birthdayTd.textContent = student.birthday;
    $facultyTd.textContent = student.faculty;
    $startTd.textContent = student.start;

    // $studentTr.append($fioTd, $birthdayTd, $facultyTd, $startTd,)
    $studentTr.append($fioTd,)
        return $studentTr
}

function render() {
    let studentsCopy = [...studentsArray];
    console.log(studentsCopy)

    // workersCopy = getSortWorkers(column, false);
    // studentsCopy = getSortWorkers(column, dir);
    $studentList.innerHTML = '';
    for (const student of studentCopy) {
        console.log(studentsCopy)
        $studentList.append($newStudentTr(student))
    }
}
render()