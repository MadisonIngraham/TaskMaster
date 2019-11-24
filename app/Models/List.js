import { generateId } from "../utils.js";
import Item from "./Item.js";

export default class List {
  constructor({ id = generateId(), title, items }) {
    this.id = id;
    this.title = title;
    this.items = items.map(i => new Item(i));
  }

  get Template() {
    return `
  <div class="col-3 mb-4">

  <div class="card border-primary mb-3" style="max-width: 20rem;">

          <div class="card-header text-white bg-primary"><h5>${
            this.title
          }</h5></div>
          <dl class="d-flex flex-column align-items-center mt-3 mb-2"> 
          ${this.getItemTemplates()} 
          </dl>

          <div class="card-body bg-secondary text-dark pt-3">
          <form onsubmit="app.listController.addItem(event, '${this.id}')">
          <div class="form-group">
          <input class="form-control form-control-sm" type="text" placeholder="Add new list item here" id="newItem" />
          </div>
          <div class="d-flex justify-content-end">
             <i class="fas fa-trash-alt" id="trash-icon" onclick="app.listController.deleteList('${
               this.id
             }')"></i>
             </div>
          </form>
        </div>
        </div>
        </div>
  `;
  }
  getItemTemplates() {
    let template = "";
    this.items.forEach(item => {
      template += item.Template;
    });
    return template;
  }
}
