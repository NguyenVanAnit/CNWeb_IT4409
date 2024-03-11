let [dropdownDay, dropdownMonth, dropdownYear] = ['day', 'month', 'year'].map(e => document.getElementById(e))

for(let i = 1; i <= 31; i++){
    let option = document.createElement('option')
    option.text = i
    option.value = i
    dropdownDay.appendChild(option)
}

for(let i = 1; i <= 12; i++){
    let option = document.createElement('option')
    option.text = i
    option.value = i
    dropdownMonth.appendChild(option)
}

for(let i = 2024; i > 1904; i--){
    let option = document.createElement('option')
    option.text = i
    option.value = i
    dropdownYear.appendChild(option)
}

let form = document.querySelector('.container')
let [firstname, lastname, emailphone, password] = ['firstname', 'surname', 'email', 'password'].map(e => document.getElementById(e))

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let checkPhone = /^[0-9]{10,11}$/

    if(!checkPhone.test(emailphone.value)) document.querySelector('.email-error').innerHTML = '<p style="color: red">Error</p>'
    else  document.querySelector('.email-error').innerHTML = ''
})


