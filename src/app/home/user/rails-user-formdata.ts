export class RailsUserFormData extends FormData {
  model: any;
  constructor(model) {
    super();
    this.model = model;
  }
  append(key, value) {
    super.append(`${this.model}[${key}]`, value);
  }
}
