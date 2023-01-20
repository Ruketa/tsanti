export class Description {
  description;

  constructor(description) {
    this.description = description;
  }

  shortDescription() {
    return this.description.slice(0, 5) + "...";
  }
}
