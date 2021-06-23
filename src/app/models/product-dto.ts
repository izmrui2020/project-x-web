export class ProductDto {
  /** ID */
  id: number;
  /** 名前 */
  name: string;
  /** 説明 */
  description: string;

  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
