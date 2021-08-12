var items = [];
var listholder = document.getElementById('list-holder');
var addTodo = document.getElementById('add-todo');

loadList = ()=>{
    listholder.innerHTML = "";
    items.forEach((element,index) =>{
        let listItem = document.createElement('li');
        listItem.className = "list-group-item todo-list";
        listItem.innerHTML = element;

      listItem.addEventListener('click',()=>{
       listItem.classList.toggle("done");
  
   });


   listItem.addEventListener('doubleclick',()=>{
    items.splice(index,1);
    
    loadlist();
});

        listholder.appendChild(listItem);
    });
}

addTodo.addEventListener('click',()=>{
    let txtTodo = document.getElementById("txt-todo-name");
    let todoName = txtTodo.value;

    if(todoName != ""){
     items.push(todoName);
     txtTodo.value = "";
     loadList();
    } else {
        alert("Please Enter the name!");
    }
})