let form = document.getElementById('addForm')
let itemList = document.getElementById('items')

form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)

function addItem(e){
    e.preventDefault()

    let newItem = document.getElementById('item').value

    let li = document.createElement('li')
    li.className = 'list-group-item'

    li.appendChild(document.createTextNode(newItem))

    //create deletebtn 
    let delbtn = document.createElement('button')
    delbtn.className = "btn btn-danger btn-sm float-right delete"
    delbtn.appendChild(document.createTextNode('X'))
    li.appendChild(delbtn)

    //creating Edit button
    let editBtn = document.createElement('button')
    editBtn.className = "btn btn-danger btn-sm float-right"
    editBtn.appendChild(document.createTextNode('Edit'))
    li.appendChild(editBtn)
    //append li to list
    itemList.appendChild(li)

}

//REMOVE ITEM

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You sure?')){
            let li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
} 