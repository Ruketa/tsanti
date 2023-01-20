export class Todo {
  id;
  title;
  status;
  assign;

  private _description;

  constructor(id, title, description, status, assign) {
    this.id = id;
    this.title = title;
    this._description = description;
    this.status = status;
    this.assign = assign;
  }

  get description() {
    return this._description.description;
  }

  get shortDescription() {
    return this._description.shortDescription();
  }
}
