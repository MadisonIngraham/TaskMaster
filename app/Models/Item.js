import { generateId } from "../utils.js";

export default class Item {
  constructor({ id = generateId(), listId, name }) {
    this.id = id;
    this.listId = listId;
    this.name = name;
  }

  get Template() {
    return `
    
    <dt class="mb-1">${this.name} <i class="fas fa-trash-alt" id="trash-icon" onclick="app.listController.deleteItem('${this.listId}','${this.id}')"> </i></dt>
  
      `;
  }
}
