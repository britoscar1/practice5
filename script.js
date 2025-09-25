document.addEventListener("DOMContentLoaded", ()=>{
//all code here

const btnAdd = document.getElementById("btnAdd")
const inputItem = document.getElementById("txtItem")
const list = document.getElementById("itemList")


//array of items with anonymus obj()   (obj constructor, obj literal)
let items = [
    {name:"Laptop", purchase: false},
    {name:"Speakers", purchase: true},
    {name:"MacBook", purchase: false}



]
let editingIndex = null;

function renderList(){
    list.innerHTML="";

    items.forEach((item, index)=>{
        let li = document.createElement("li");
        li.innerHTML = `
        <span class="item-name">${item.name}</span>
        <div class="actions">
        <button class="btn-edit" onclick="editItem(${index})">✏️</button>
        <button class="btn-delete" onclick="deleteItem(${index})">❌</button>
        </div>
        `
        ;

        list.appendChild(li)
    })

}
//deleting items
window.deleteItem = (deleteIndex)=>{
        if(editingIndex == null) {
            items.splice(deleteIndex,1);// remove from the array
        }
        renderList(); // update the list
        console.log(items);
    }

//edit items
window.editItem = (index) => {
        inputItem.value = items[index].name; 
        editingIndex = index; 
        btnAdd.textContent = "Save changes";
    };

//hook event add

btnAdd.addEventListener("click", () => {
    let item = inputItem.value.trim();

    if (item === "") {
        alert("Empty field");
        return;
    }

    if (editingIndex === null) {
        items.push({ name: item, purchase: false });
    } else {
        items[editingIndex].name = item;
        editingIndex = null; 
        btnAdd.textContent = "Add"; 
    }

    inputItem.value = ""; 
    renderList(); 
});

renderList() //initial render

});


