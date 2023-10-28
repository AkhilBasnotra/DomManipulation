let item = document.getElementsByClassName('list-group-item')
let item1 = document.getElementsByTagName('li')

console.log(item)
console.log(item1)

item[1].style.fontWeight = 'bold'
console.log(item[4])

// item1[1].style.backgroundColor = '#f4f4f4'

for(let i=0; i<item.length;i++){
    item[i].style.backgroundColor = 'yellow'
}

for(let i=0; i<item1.length;i++){
    item1[i].style.backgroundColor = 'yellow'
}
