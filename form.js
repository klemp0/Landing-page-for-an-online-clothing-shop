const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector("#open-modal-btn");
const closeModalBtn = document.querySelector(".close-btn");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Event listeners
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// Close when clicking outside the modal
overlay.addEventListener("click", closeModal);

// Optional: Close with the Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

function signin() {
const mess = document.getElementById("mess").value;
const name = document.getElementById("name").value;
const email=document.getElementById("email").value;

mess.style.display = "block";
mess.innerHTML=`
Domnul ${name} va vom contacta pe e-mailul ${email}`;

document.getElementById("ok").close();
return false;
}