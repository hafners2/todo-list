const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const complete = new Audio("./complete.wav");

const addTask = () => {
    if(inputBox.value === ""){
        alert("no task present");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }

    if(e.target.classList == "checked") {
        complete.play();
    }
}, false);