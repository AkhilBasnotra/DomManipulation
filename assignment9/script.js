let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')
let discription = document.getElementById('discription')

form.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)

function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let dis = document.getElementById('discription').value;

    let li = document.createElement('li');
    li.className = 'list-group-item';

    // Concatenate item name and description before creating a text node
    li.appendChild(document.createTextNode(`${newItem} ${dis}`));

    //create delete button 
    let delbtn = document.createElement('button');
    delbtn.className = "btn btn-danger btn-sm float-right delete";
    delbtn.appendChild(document.createTextNode('X'));
    li.appendChild(delbtn);

    // creating Edit button
    let editBtn = document.createElement('button');
    editBtn.className = "float-right";
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

    // append li to list
    itemList.appendChild(li);
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


function filterItems(e){
    //convert text to lowercase
    let text = e.target.value.toLowerCase()
    //get li
    let items = itemList.getElementsByTagName('li')
    //convert to an array
    Array.from(items).forEach(function(item){

        let itemName = item.firstChild.textContent
        let description = item.childNodes[1].textContent;

        if(itemName.toLowerCase().indexOf(text) !== -1 || description.toLowerCase().indexOf(text) !== -1){
            item.style.display = 'block'
        }else{
            item.style.display = 'none'
        }
    })
}