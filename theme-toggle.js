var currentState = true;
let changeButton = document.getElementById("themeToggle");

function switchTheme() {
    if (currentState) {
        document.getElementById('style').href = "main.css", "header.css";
        document.getElementById('light').style.display = "inline";
        document.getElementById('dark').style.display = "none";
    }else{
        document.getElementById('style').href = "switch.css";
        document.getElementById('dark').style.display = "inline";
        document.getElementById('light').style.display = "none";
    }
    currentState = !currentState;
}
changeButton.addEventListener("click", switchTheme);


const button = document.getElementById('console');
button.addEventListener('click', function() {
  console.log("hello");
});