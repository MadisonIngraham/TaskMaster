import { generateId } from "../utils.js";

export default class Item {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.listId = listId;
    this.name = name;
  }

  get Template() {
    return `
      <dt>${this.name}</dt> <i class="fas fa-trash-alt" id="trash-icon" onclick="app.listController.deleteItem('${this.listId}','${this.id}')"> </i>
      `;
  }
}
