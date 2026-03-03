const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.getElementById("nn");
const closeModalBtn = document.querySelector(".close-btn");
const okBtn = document.getElementById("ok");

const name = document.getElementById("name");
const email = document.getElementById("email");

openModalBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);


okBtn.addEventListener("click", function () {

  const mess = document.getElementById("mess");

  mess.style.display = "block";
  mess.innerHTML = `
  Domnul ${name.value}, veti primi un mesaj de confirmare pe e-mailul ${email.value}.
`;
});

okBtn.addEventListener("click", function(){

  let userData ={
    name: name.value.toUpperCase(),
    email: email.value
  };

  localStorage.setItem("userData", JSON.stringify(userData));
});

window.addEventListener("load", function(){
let savedData = JSON.parse(localStorage.getItem("userData"));

if(savedData) {
  name.value = savedData.name;
  email.value = savedData.email;
}
});