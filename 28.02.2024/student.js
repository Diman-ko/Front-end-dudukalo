export default class Student {
    constructor(surname, name, patronymic, birthday, faculty, start) {
        this.surname = surname
        this.name = name
        this.patronymic = patronymic
        this.birthday = birthday
        this.faculty = faculty
        this.start = start

    }

    get fio() {
        return this.surname + ' ' + this.name + ' ' + this.patronymic
    }

    get birthDate() {
        let yyyy = this.birthday.getFullYear();
        let mm = this.birthday.getMonth() + 1;
        let dd = this.birthday.getDate();
        if(mm < 10) mm = '0' + mm;
        if(dd < 10) dd = '0' + dd;
        return yyyy + '.' + mm + '.' + dd
    }

    get age() {
        const today = new Date();
        let age = today.getFullYear() - this.birthday.getFullYear();
        let mm = today.getMonth() - this.birthday.getMonth();
        if (mm < 0 || (mm == 0 && today.getDate() < this.birthday.getDate())) {
            age--
        }
        return age;
    }

    get studyPeriod() {
        const currentTime = new Date();
        let nowMonth = currentTime.getMonth();
        let nowDate = currentTime.getDate();
        let courses = currentTime.getFullYear() - this.start - (0 > (nowMonth - 8 || nowDate - 1));
        courses = ++courses > 4 ? 'Закончил' : `${courses} курс`;
        let range = `${this.start} - ${+this.start + 4} (${courses})`;
        return range;
    }
}





