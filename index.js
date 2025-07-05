// real time displayer

const realHrs = document.querySelector(".real-hrs");
const realMin = document.querySelector(".real-min");
const realSec = document.querySelector(".real-sec");

function realTimeDisplayer() {
    setInterval(() => {
        const newDate = new Date;

        realHrs.innerHTML = (newDate.getHours() < 10 ? "0" : "") + newDate.getHours();
        realMin.innerHTML = (newDate.getMinutes() < 10 ? "0" : "") + newDate.getMinutes();
        realSec.innerHTML = (newDate.getSeconds() < 10 ? "0" : "") + newDate.getSeconds();
        return newDate;
    }, 1000);
}
realTimeDisplayer();

// real time displayer


// upload saved lists
const addedLists = document.querySelector(".note-container");

if(localStorage.getItem("savedLists")){
    addedLists.innerHTML = localStorage.getItem("savedLists");
}
// upload saved lists



// Add input

const noteInput = document.querySelector("#note-input");
const inputForm = document.querySelector(".input-container");

function addInput() {
    const newDate = new Date;



    if (noteInput.value.trim().length > 0) {
        const addList = document.createElement("li")
        addList.innerHTML = `
        <div class="added-time">
            <span class="added-hrs">00</span>
            <span>:</span>
            <span class="added-min">00</span>
        </div>
        <p class ="list-p"></p>
        <button>+</button>
    `

        const addedHrs = addList.querySelector(".added-hrs");
        const addedMin = addList.querySelector(".added-min");
        const listP = addList.querySelector(".list-p");

        addedHrs.innerHTML = (newDate.getHours() < 10 ? "0" : "") + newDate.getHours();
        addedMin.innerHTML = (newDate.getMinutes() < 10 ? "0" : "") + newDate.getMinutes();
        listP.innerHTML = noteInput.value;
        addedLists.appendChild(addList);
        noteInput.value = "";
    } else {
        alert("Please, enter a task first!")
        noteInput.value = "";
    }
}

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addInput();
})
// Add input


// remove list

addedLists.addEventListener("click", (event) =>{
    if(event.target.tagName === "BUTTON"){
        event.target.closest("li").remove();
    }
});

// remove list

// mark as done

addedLists.addEventListener("click", (event) =>{
    if(event.target.tagName === "P"){
        event.target.classList.toggle("done");
    }
})

// mark as done


// save and clear everything

function saveEverything(){
    localStorage.setItem("savedLists", addedLists.innerHTML);
}

function clearAll(){
    addedLists.innerHTML = ""
    localStorage.setItem("savedLists", addedLists.innerHTML);
}
// save and clear everything


