  if (todo.length) {
    //prevent entering empty string
    generateTemplate(todo);
    addForm.reset(); //clear previous
  }
});

// delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
    console.log(term);
};

//keyup event 
search.addEventListener("keyup", (e) => {
    const term = search.value.trim();
});