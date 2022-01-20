console.log("Hi");
displayNotes();
var notesObj;

let addBtn = document.getElementById("addBtn"); //trigegering the button "add"
addBtn.addEventListener("click", function() { // saving the text in object
    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
   if(addTxt.value.length==0 && addTitle.value.length ==0)
   {alert('Enter some Text')}
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

// let mode = document.getElementById("mode")
// mode.addEventListener("click",function(){
//     console.log('hiii')
//     let page = document.getElementById('page')
//     let pageClass = page.getAttribute('class')
//     const card = document.getElementById('card')
//     let cardClass = card.getAttribute('class')
//     let modeName = document.getElementById('modeName')

//     if (modeName.innerHTML==='Enable Dark Mode'){
//         modeName.innerHTML='Enable Light Mode'
//         pageClass.value= 'bg-dark text-white'
//     } 

//     else if(modeName.innerHTML==='Enable light Mode'){
//         modeName.innerHTML='Enable Dark Mode' 
//     }

    

    

// })