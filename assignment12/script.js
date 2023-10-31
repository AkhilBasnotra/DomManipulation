let myForm = document.getElementById('my-form')
let nameInput = document.getElementById('name')
let emailInput = document.querySelector('#email')
let userList = document.getElementById('users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault()

    let key = `userDetail_${Date.now()}`

    let newUser = {
         name : nameInput.value,
         email : emailInput.value,
    }

    let newUser_serializer = JSON.stringify(newUser)
    
    localStorage.setItem(key, newUser_serializer)
    

    let li = document.createElement('li')
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

    userList.appendChild(li)
    
    nameInput.value = ''
    emailInput.value= ''
    

}