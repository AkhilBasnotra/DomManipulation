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

  //create new li

  let li = document.createElement("li");
  // li.dataset.email = email;
  li.appendChild(
    document.createTextNode(`${name}, ${email}, ${phone}, ${time}`)
  );

  let delbtn = document.createElement("button");
  delbtn.classList.add("del");
  delbtn.appendChild(document.createTextNode("DELETE"));

  delbtn.addEventListener("click", removeItem);

  itemList.appendChild(li);
  li.appendChild(delbtn);

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
