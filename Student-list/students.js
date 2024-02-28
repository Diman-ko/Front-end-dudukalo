export default class Students {
    constructor(name, patronymic, surname, birthday, faculty, start,) {
        this.name = name
        this.patronymic = patronymic
        this.surname = surname
        this.birthday = birthday
        this.faculty = faculty
        this.start = start
    }

    get fio() {
        return this.surname + ' ' + this.name + ' ' + this.patronymic
    }

    getBirthday() {

    }

}

