export default class Todo {
  constructor(data) {
    //NOTE Have you ever wanted to know the temperature measured in kelvin?
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try
    this._id = data._id;
    this.description = data.description;
    this.completed = data.completed;
  }

  get Template() {
    return /*html*/ `
        
        <div class="my-3 d-flex justify-content-center item-div" >
				<div class="d-inline task-div align-self-center ">
					<label class="checkbox-container"id="">
					<input type="checkbox" onclick="app.todoController.toggleTodoStatus('${
            this._id
          }')" ${this.completed ? "checked" : ""}>
					<span class="checkmark" ></span>
          <span class="item-title">${this.description}</span>
          <span class="${
            this.completed ? "" : "d-none"
          }" onclick="app.todoController.removeTodo('${
      this._id
    }')"  ><i class="fas fa-trash"></i></span>
					</label> 
				</div>
			</div>

        `;
  }
}
