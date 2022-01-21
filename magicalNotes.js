console.log("Hi");
displayNotes();
var notesObj;

let addBtn = document.getElementById("addBtn"); //trigegering the button "add"
addBtn.addEventListener("click", function() { // saving the text in object
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
   if(addTxt.value.length==0 || addTitle.value.length ==0)
   {alert('Enter a heading and a note ')}
   else {
       if (notes == null) {
            notesObj = [];
        } 
        else {
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
   }
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
            <h5 style="font-size: 35px;font-weight: bold; "class="card-title">${element.Title.toUpperCase()}</h5>
            <p style="font-size: 23px;" class="card-text">${element.text}</p>
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

// let mode = document.getElementById("mode")
// mode.addEventListener("click",function(){
    
    // if (modeName.innerHTML==='Enable Dark Mode'){
    //     modeName.innerHTML='Enable Light Mode'
    //     console.log('This is Dark Mode')
    // } 
    
    // else if(modeName.innerHTML==='Enable Light Mode'){
    //         modeName.innerHTML='Enable Dark Mode'
    //         page.classList.toggle("page")
    //         card.classList.toggle("card")
    //         console.log('This is Light Mode')
    // }
// })