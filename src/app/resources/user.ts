export class User {

  constructor(
    public firstName: string,
    public lastName: string,
    public dateOfBirth: Date,
    public about?: string
  ){}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
