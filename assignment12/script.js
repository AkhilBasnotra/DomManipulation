let myForm = document.getElementById('my-form')
let nameInput = document.getElementById('name')
let emailInput = document.querySelector('#email')
let userList = document.getElementById('users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault()
    
    let name = nameInput.value
    let email = emailInput.value

    // let key = `userDetail_${Date.now()}`

    let newUser = {
         name,
         email
    }

    let newUser_serializer = JSON.stringify(newUser)
    
    localStorage.setItem(newUser.email, newUser_serializer)
    

    let li = document.createElement('li')
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

    userList.appendChild(li)
    
    nameInput.value = ''
    emailInput.value= ''
    

}