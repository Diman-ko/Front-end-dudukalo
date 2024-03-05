export default class Student {
    constructor(surname, name, patronymic, birthday, faculty, start,) {
        this.surname = surname
        this.name = name
        this.patronymic = patronymic
        this.birthday = birthday
        this.start = start
        this.faculty = faculty
        this.start = start
    }

    get fio () {
        return this.surname + ' ' + this.name +' ' + this.patronymic
    }

    get birthday() {
        let yyyy = this.birthday.getFullYear();
        let mm = this.birthday.getMonth() + 1;
        let dd = this.birthday.getDate();
        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;
        return yyyy + '.' + mm + '.' + dd;
    }

}
