// GET's THE TODO's FROM THE DB
function getData(){
    axios.get("https://api.vschool.io/leonwest/todo")
        .then(res => listData(res.data))
        // .then(res => console.log(res.data))
        .catch(err => console.log(err))
}


// LISTS THE TODO TITLES TO THE DOM
function listData(data){

    console.log('data', data)

    // we call it here so that when we get the new data we added to the 
    // API it clears out the old data before inserting the new data
    // so we wont have the data repeated. 
    clearList()

    for(let i = 0; i < data.length; i++){

        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)
       
        if(data[i].completed == true){
            
            h1.style.textDecoration = 'line-through';

        }

        if(data[i].imgUrl != ''){
            const img = document.createElement('img')
            img.src = data[i].imgUrl
            document.getElementById('todo-list').appendChild(img)
            img.style.width = '300px'
            img.style.height = '300px'
            
        }


        const deleteBtn = document.createElement('button')
        deleteBtn.type = 'button'
        deleteBtn.id = 'deleteBtn'
        deleteBtn.innerHTML = 'Delete'
        deleteBtn.addEventListener("click", function(e) {
            e.preventDefault()
            axios
                .delete(`https://api.vschool.io/leonwest/todo/${data[i]._id}`)
                .then(() => getData())
                .catch(err => console.log(err))
        })

        
        document.getElementById('todo-list').appendChild(deleteBtn)
        
        const complete = document.createElement('input')
        complete.type = 'radio'
        complete.id = 'complete'
        complete.name = 'value'
        complete.value = 'true'
        document.getElementById('todo-list').appendChild(complete)

        // added the completed checkbox to stay on refresh.
        if(data[i].completed == true){
            complete.checked = true
        }
       

        complete.addEventListener('click', function() {

            const updates = {
                completed: true
            }
            
            axios.put(`https://api.vschool.io/leonwest/todo/${data[i]._id}`, updates)
            
            .then(res => getData())
            .catch(err => console.log(err))



            h1.classList.add('done')
        })


        const labelOne = document.createElement('label')
        labelOne.type = 'label'
        labelOne.innerHTML = 'Completed'
       
        document.getElementById('todo-list').appendChild(labelOne)

        const incomplete = document.createElement('input')
        incomplete.type = 'radio'
        incomplete.id = 'incomplete'
        incomplete.name = 'value'
        incomplete.value = 'false'

        incomplete.addEventListener('click', function(e) {
            e.preventDefault()

            const updates = {
                completed: false
            }
            
            axios.put(`https://api.vschool.io/leonwest/todo/${data[i]._id}`, updates)
            
            .then(res => getData())
            .catch(err => console.log(err))


            h1.classList.remove('done')
           
            

        })


        document.getElementById('todo-list').appendChild(incomplete)

        const labelTwo = document.createElement('label')
        labelOne.type = 'label'
        labelTwo.innerHTML = 'Incomplete'
        document.getElementById('todo-list').appendChild(labelTwo)

    }
    
}


// this is removing any element in the "todo-list" div we call it on line 12
function clearList(){
    const el = document.getElementById('todo-list') // created const from the "todo-list" div element
    
    // this while loop is looping through the div and as long 
    // as it has a first child it will erase it. 
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()


// FORM FOR THE POST REQUEST
const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }
    
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.imgUrl.value = ""


    
    axios.post("https://api.vschool.io/leonwest/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})