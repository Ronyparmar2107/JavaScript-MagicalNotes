console.log("Hi");
displayNotes();
var notesObj;

let addBtn = document.getElementById("addBtn"); //trigegering the button "add"
addBtn.addEventListener("click", function() { // saving the text in object
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        Title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    displayNotes(); //displaying the notes that are being saved  

});

function displayNotes() {

    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let txt = "";
    notesObj.forEach(function(element, index) {
        txt += `
        <div class=""noteCards my-2 mx-2 card" style="width: 18rem;">
        <div class=Cards">
            <h5 class="card-title">${element.Title}</h5>
            <p class="card-text">${element.text}</p>
            <button class="btn btn-primary" id="${index}"onclick ="Delete(this.id)" >Delete</button>
        </div>
    </div>`;

    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = txt;
    } else {
        notesElm.innerHTML = "You have no Notes, use Megical Notes to add a note"
    }



};

function Delete(index) {
    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(notesObj));

    displayNotes();

}

let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function() {
    console.log("heya")
    let noteCards = document.getElementsByClassName("noteCards")
    Array.from(noteCards).forEach(function(element) {

        let inputVal = searchTxt.value;
        let cardTxt = document.getElementsByTagName("p")[0].innerHTML;
        // let cardTitle = document.getElementsByTagName("h5")[0].innerHTML;

        if (cardTxt.value.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }


    })


})