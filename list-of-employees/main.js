import Worker from './worker.js'

// Массив сотрудников
const workersArr = [
    new Worker('Фролов', 'Игорь', 'Сергеевич', new Date(1992, 2, 21), 2011, 'student1'),
    new Worker('Фролова', 'Алёна', 'Сергеевна', new Date(1993, 3, 22), 2012, 'student2'),
    new Worker('Фролович', 'Игорь', 'Сергеевич', new Date(1994, 4, 23), 2013, 'student3'),
]

// console.log(workersArr)
// получаем таблицу
const $workersList = document.getElementById('workers-list'),
    $workersListTHAll = document.querySelectorAll('.workers-table th');

let column = 'fio',
    dir = true;

function newWorkerTR(worker) {
    const $workerTR = document.createElement('tr'),
        $fioTD = document.createElement('td'),
        $birthdayTD = document.createElement('td'),
        $workTimeTD = document.createElement('td'),
        $postTD = document.createElement('td')

    $fioTD.textContent = worker.fio;// прописано как свойство объекта  в worker.js
    // $fioTD.textContent = worker.getFio();
    $birthdayTD.textContent = worker.getBirthdayDateString() + ', (' + worker.getAge() + ' лет)';
    $workTimeTD.textContent = worker.workStart + ' год, (' + worker.getWorkPeriod() + ' лет)';
    $postTD.textContent = worker.getPost();

    $workerTR.append($fioTD, $birthdayTD, $workTimeTD, $postTD);

    return $workerTR;
}


//сортировка массива
function getSortWorkers(prop, dir) {
    const workersCopy = [...workersArr];
    return workersCopy.sort(function (workerA, workerB) {
        if ((!dir == false ? workerA[prop] < workerB[prop] : workerA[prop] > workerB[prop]))
            return -1;
    })
}


// создаём рендер нашей таблицы
function render() {
    let workersCopy = [...workersArr];
    // console.log(workersCopy)

    // workersCopy = getSortWorkers(column, false);
    workersCopy = getSortWorkers(column, dir);
    $workersList.innerHTML = '';
    for (const worker of workersCopy) {
        // console.log(workersCopy)
        $workersList.append(newWorkerTR(worker))
    }
}

//события кликов для сортировки
$workersListTHAll.forEach(element => {
    element.addEventListener('click', function () {
        // const column = this.dataset.column;
        column = this.dataset.column;
        dir = !dir
        console.log(column)
        render()

    })
})


render()



