import List from "../Models/List.js";
import store from "../store.js";
import Item from "../Models/Item.js";

//Public
class ListService {
  createNewList(newList) {
    let created = new List(newList);
    store.State.lists.push(created);
    store.saveState();
  }

  deleteList(listId) {
    let listToRemove = store.State.lists.find(l => l.id == listId);
    let listIndex = store.State.lists.findIndex(l => l.id == listId);
    store.State.lists.splice(listIndex, 1);
    store.saveState();
  }

  addItem(newItem) {
    let item = new Item(newItem);
    let list = store.State.lists.find(l => l.id == item.listId);
    list.items.push(item);
    store.saveState();
  }

  deleteItem(listId, itemId) {
    let listToRemoveItemFrom = store.State.lists.find(l => l.id == listId);
    let itemIndex = listToRemoveItemFrom.items.findIndex(i => i.id == itemId);
    listToRemoveItemFrom.items.splice(itemIndex, 1);
    store.saveState();
  }
}

const SERVICE = new ListService();
export default SERVICE;
