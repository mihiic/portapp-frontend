export class User {

  constructor(
    public firstName: String,
    public lastName: String,
    public subtitle: String,
    public profilePhoto: String
  ){}

  public getFullName(): String {
    return `${this.firstName} ${this.lastName}`;
  }
}
