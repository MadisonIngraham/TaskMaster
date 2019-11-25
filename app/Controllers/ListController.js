import ListService from "../Services/ListService.js";
import store from "../store.js";

function _drawLists() {
  let listTemplate = "";
  let lists = store.State.lists;
  lists.forEach(list => {
    listTemplate += list.Template;
  });
  document.querySelector("#lists").innerHTML = listTemplate;
}

//Public
export default class ListController {
  constructor() {
    _drawLists();
  }

  createNewList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      title: formData.newList.value,
      items: []
    };
    ListService.createNewList(newList);
    formData.reset();
    _drawLists();
  }

  deleteList(listId) {
    ListService.deleteList(listId);
    if (confirm("Are you sure you want to delete this list?")) {
      _drawLists();
    } else {
      // Do nothing!
    }
  }

  addItem(event, listId) {
    event.preventDefault();
    let formData = event.target;
    let newItem = {
      name: formData.newItem.value,
      listId: listId
    };
    ListService.addItem(newItem);
    formData.reset();
    _drawLists();
  }

  deleteItem(listId, itemId) {
    ListService.deleteItem(listId, itemId);
    if (confirm("Are you sure you want to delete this item?")) {
      _drawLists();
    } else {
      // Do nothing!
    }
  }
}
