let [dropdownDay, dropdownMonth, dropdownYear] = ['day', 'month', 'year'].map(e => document.getElementById(e))

for (let i = 1; i <= 31; i++) {
    let option = document.createElement('option')
    option.text = i
    option.value = i
    dropdownDay.appendChild(option)
}

for (let i = 1; i <= 12; i++) {
    let option = document.createElement('option')
    option.text = i
    option.value = i
    dropdownMonth.appendChild(option)
}

for (let i = 2024; i > 1904; i--) {
    let option = document.createElement('option')
    option.text = i
    option.value = i
    dropdownYear.appendChild(option)
}

let [day, month, year] = ['day', 'month', 'year'].map(e => document.getElementById(e))
function checkDate() {
    if(day.value == '' || month.value == '' || year.value == '') return false
    if (month.value == 4 || month.value == 6 || month.value == 9 || month.value == 11) {
        if (day.value == 31) return false
    }
    if (month.value == 2) {
        if(day.value > 29) return false
        if (!(year.value % 400 == 0 || (year.value % 4 == 0 && year.value % 100 != 0))){
            if(day.value == 29) return false
        }
    }
    return true
}

let form = document.querySelector('.container')
let [firstname, surname, emailphone, password] = ['firstname', 'surname', 'email', 'password'].map(e => document.getElementById(e))

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let checkPhone = /^[0-9]{10}$/
    let checkEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (checkPhone.test(emailphone.value) || checkEmail.test(emailphone.value)) document.querySelector('.email-error').innerHTML = ''
    else document.querySelector('.email-error').innerHTML = '<p style="color: red">Error phone or email</p>'

    if (firstname.value == '') document.querySelector('.firstname-error').innerHTML = '<p style="color: red">Error first name. What\'s your first name?</p>'
    else document.querySelector('.firstname-error').innerHTML = ''

    if (surname.value == '') document.querySelector('.surname-error').innerHTML = '<p style="color: red">Error surname. What\'s your surname?</p>'
    else document.querySelector('.surname-error').innerHTML = ''

    let checkPassword = /^.{6,}$/

    if (checkPassword.test(password.value)) document.querySelector('.password-error').innerHTML = ''
    else document.querySelector('.password-error').innerHTML = '<p style="color: red">Enter a combination of at least 6 numbers, letters, and punctuation marks</p>'

    if(checkDate()) document.querySelector('.date-error').innerHTML = ''
    else document.querySelector('.date-error').innerHTML = '<p style="color: red">Error date</p>'
})




