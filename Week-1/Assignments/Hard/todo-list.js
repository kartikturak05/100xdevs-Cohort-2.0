/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.Todo = [];
  }
  add(todo){
    this.Todo.push(todo);
  }

  remove(indexOfTodo){
    this.Todo.splice(indexOfTodo,1);
  }

  update(index, updatedTodo){
    if(index >= this.Todo.length){
      return null;
    }else{

      this.Todo[index] = updatedTodo; 
    }
  }

  getAll(){
    return this.Todo;
  }

  get(indexOfTodo){
    if(indexOfTodo >= this.Todo.length){
      return null;
    }
    else{
      return this.Todo[indexOfTodo];
    }
  }

  clear(){
    this.Todo.length = 0;
  }
}

module.exports = Todo;
