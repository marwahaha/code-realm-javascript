// The core logic of the store will go here.

const store = [
  {
    name: "Test",
    status: "open",
    added: false
  }
];

function listStore() {
  return store;
}

function addInStore(task) {
  store.push({
    name: task,
    status: "open",
    added: false
  });
}

function changeStatus(taskName) {
  const storeItem = store.find(item => item.name == taskName);
  if (storeItem.status == "open") {
    storeItem.status = "completed";
  } else {
    storeItem.status = "open";
  }
}
