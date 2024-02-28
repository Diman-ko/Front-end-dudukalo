function validation(form)  {
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLable = document.createElement('lable');

        errorLable.textContent = 'Заполни поле';
        errorLable.classList.add('error-lable')
        parent.classList.add('error')
        console.log(parent);
        parent.append(errorLable)
    }



    let result = true;
    // const allInput = form.querySelectorAll('input');
    // for (const input of allInputs) {console.log(input)} //аналог того что ниже
    form.querySelectorAll('input').forEach(input => {
        console.log(input)
        if (input.value == '') {

            createError(input,'Заполни поле');
            console.log('error');
            result = false;

        }
    });

    return result
};


document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault();
if(validation(this) == true) {
    console.log('Norma')
}
});
