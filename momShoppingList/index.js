
const form = document["addItem"]

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    
    //assign new elements 
    const newLi = document.createElement("li");
    newLi.setAttribute('class', 'newItem');
    const newDiv = document.createElement("div");

    newDiv.textContent = form.title.value;
    
    form.title.value = "";

    

    const shopList = document.getElementById("list");
    newLi.append(newDiv);
    shopList.append(newLi);

    const editBtn = document.createElement('button');
    editBtn.textContent = "edit";
    newLi.append(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('id','delete')
    deleteBtn.textContent = "X";
    newLi.append(deleteBtn);

    
    // return an array so I can loop over it and delete items
    
    var allNewItems = document.querySelectorAll(".newItem");
    for (var i = 0; i < allNewItems.length; i++) {
        var clearBtn = document.getElementById("delete")
    clearBtn.addEventListener("click", function () {
        this.classList.toggle("active");
    });

    allNewItems[i]
    .addEventListener("click", function () {
        this.closest(".newItem").remove();
    })
    


}
})



