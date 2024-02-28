// создаём класс
export default class Worker {
// создаём конструктор, он будет принимать аргументы
    constructor(surname, name, patronymic, birthday, workStart, post) {
        //работаем через  this
        this.surname = surname
        this.name = name
        this.patronymic = patronymic
        this.birthday = birthday
        this.workStart = workStart
        this.post = post
    }
    // getFio() {
    //     return this.surname + ' ' + this.name + ' ' + this.patronymic;
    // }
// устанавливаем geter
    get fio() {
        return this.surname + ' ' + this.name + ' ' + this.patronymic;
    }


    getWorkPeriod() {
        let currentTime = new Date();
        return currentTime.getFullYear() - this.workStart;
        // console
    }
    getBirthdayDateString() {
        const yyyy = this.birthday.getFullYear();
        let mm = this.birthday.getMonth() + 1;
        let dd = this.birthday.getDate()
        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;
        const formattedToday = dd + '.' + mm + '.' + yyyy;
        return formattedToday;
    }
    getAge(worker) {
        const today = new Date();
        let age = today.getFullYear() -this.birthday.getFullYear();
        let mm = today.getMonth() - this.birthday.getMonth();
        if (mm < 0 || (mm == 0 && today.getDate() < this.birthday.getDate())) {
            age--
        }
        return age;
    }
    getPost() {
        return this.post
    }

}
//  создаём массив
// const workersArr = [
//     new Worker('Фролов', 'Игорь', 'Сергеевич',  new Date(1992, 2, 21), 2011,),
//     new Worker('Фролова', 'Алёна', 'Сергеевна',  new Date(1993, 3, 22), 2012,),
//     new Worker('Фролович', 'Игорь', 'Сергеевич',  new Date(19942, 4, 23), 2013,),
// ]
// for (const worker of workersArr) {
//     // console.log(worker) // выведет массивы
//     console.log(worker.getFio())// выведет ФИО
// }
// console.log(workersArr[0].getAge())


// что бы начать с ним работать нужно создать его копию
// при инициализации класса, параметры должны прописывать через запятую
// const igor = new Worker('Фролов', 'Игорь', 'Сергеевич',  new Date(1992, 2, 21), 2011,);
// console.log(igor)
// // благодаря этой конструкции можем создавать новых сотрудников
// const alena = new Worker('Фролова', 'Алёна', 'Сергеевна',  new Date(1993, 3, 22), 2012,);
// const ivan = new Worker('Фролович', 'Игорь', 'Сергеевич',  new Date(19942, 4, 23), 2013,);
// console.log(alena);
// console.log(ivan);



//
// const worker = {
//     surname: 'Фролов',
//     name: ' Игорь',
//     patronymic: 'Сергеевич',
//     birthday: new Date(1992, 2, 21),
//     workStart: 2011,
// }
// console.log(worker);


// вывести полное ФИО
// function getFio(worker) {
//     return worker.surname + " " + worker.name + " " + worker.patronymic;
// }
// getFio()
// console.log(getFio(worker))

// вернуть сколько лет работает сотрудник
// function gerWorkPeriod(worker) {
//  let currentTime = new Date();
//
//  return currentTime.getFullYear() - worker.workStart;
//     // console.log(currentTime.getFullYear());
// }
// gerWorkPeriod(worker)
// console.log(gerWorkPeriod(worker));

//  Дата Рождения
//  function getBirthdayDateString(worker) {
//      const today = new Date(worker.birthday);
//      const yyyy = today.getFullYear();
//      let mm = today.getMonth() + 1;
//      let dd = today.getDate()
//      if (mm < 10) mm = '0' + mm;
//      if (dd < 10) dd = '0' + dd;
//      const formattedToday = dd + '.' + mm + '.' + yyyy;
//      return formattedToday;
//  }
//  function getBirthdayDateString(worker) {
//      // const today = new Date(worker.birthday);
//      const yyyy = worker.birthday.getFullYear();
//      let mm = worker.birthday.getMonth() + 1;
//      let dd = worker.birthday.getDate()
//      if (mm < 10) mm = '0' + mm;
//      if (dd < 10) dd = '0' + dd;
//      const formattedToday = dd + '.' + mm + '.' + yyyy;
//      return formattedToday;
//  }
// getBirthdayDateString(worker)
// console.log(getBirthdayDateString(worker));


//  function getAge(worker) {
//      const today = new Date();
//      let age = today.getFullYear() - worker.birthday.getFullYear();
//      let mm = today.getMonth() - worker.birthday.getMonth();
//      if (mm < 0 || (mm == 0 && today.getDate() < worker.birthday.getDate())) {
//          age--
//      }
//      return age;
//  }
// getAge(worker)
// console.log(getAge(worker));


