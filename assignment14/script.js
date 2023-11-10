let form = document.querySelector(".my-form");
let itemList = document.getElementById("items");
let email = document.getElementById("email").value;

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let time = document.querySelector(".time").value;

  let myObj = {
    name: name,
    email: email,
    phone: phone,
    time: time,
  };

  let myObj_serialized = JSON.stringify(myObj);

  localStorage.setItem(email, myObj_serialized);

  // localStorage.setItem("name", name);
  // localStorage.setItem("email", email);

  //create new li

  let li = document.createElement("li");
  // li.dataset.email = email;
  li.appendChild(
    document.createTextNode(`${name}, ${email}, ${phone}, ${time}`)
  );

  let delbtn = document.createElement("button");
  delbtn.classList.add("del");
  delbtn.appendChild(document.createTextNode("Delete"));

  let editbtn = document.createElement("button");
  editbtn.className = "del";
  editbtn.appendChild(document.createTextNode("Edit"));

  delbtn.addEventListener("click", removeItem);

  editbtn.onclick = () => {
    localStorage.removeItem(email);
    itemList.removeChild(li);
    document.getElementById("name").value = myObj.name;
    document.getElementById("email").value = myObj.email;
    document.getElementById("phone").value = myObj.phone;
    document.querySelector(".time").value = myObj.time;
  };

  itemList.appendChild(li);
  li.appendChild(delbtn);
  li.appendChild(editbtn);
}

function removeItem(e) {
  if (e.target.classList.contains("del")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
      // let email = li.dataset.email;
      localStorage.removeItem(email);
    }
  }
}
