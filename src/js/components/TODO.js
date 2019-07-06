class TODO {
  constructor(store) {
    this.store = store;
    this.button = document.getElementById("button");
    this.list = document.getElementById("todoList");
    this.init();
  }

  init() {
    this.store.subscribe(this.onStateChange.bind(this));
    this.button.addEventListener("click", event => {
      const value = document.getElementById("addTodo").value;
      this.store.dispachAction("ADD_TODO", { name: value, completed: false });
    });
  }

  onStateChange(state) {
    this.list.innerHTML = "";

    state.forEach(element => {
      const li = document.createElement("li");
      li.innerHTML = `
      <span class=${element.completed ? "strike-through" : ""}>
         ${element.name}
      </span>
      ${
        element.completed
          ? `<button id="${element.name}-undone">Mark as Undone</button>`
          : ""
      }
      ${
        !element.completed
          ? `<button id="${element.name}-done">Mark as Done</button>`
          : ""
      }
      <button id="${element.name}-remove">Remove</button>
      `;
      this.list.appendChild(li);

      document
        .getElementById(`${element.name}-remove`)
        .addEventListener("click", () => {
          this.store.dispachAction("REMOVE_TODO", element.name);
        });

      if (element.completed) {
        document
          .getElementById(`${element.name}-undone`)
          .addEventListener("click", () => {
            this.store.dispachAction("MARK_UN_DONE", element.name);
          });
      } else {
        document
          .getElementById(`${element.name}-done`)
          .addEventListener("click", () => {
            this.store.dispachAction("MARK_DONE", element.name);
          });
      }
    });
  }
}

export default TODO;
