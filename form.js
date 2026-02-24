const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.getElementById("nn");
const closeModalBtn = document.querySelector(".close-btn");
const okBtn = document.getElementById("ok");

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
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mess = document.getElementById("mess");

  mess.style.display = "block";
  mess.innerHTML = `
    Domnul ${name}, veti primi un mesaj de confirmare pe e-mailul ${email}.
  `;
});