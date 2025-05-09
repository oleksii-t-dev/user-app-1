export class User {
  constructor({ id, name, username, email, phone, website, address, company }) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.address = address;
    this.company = company;
  }

  get fullAddress() {
    return `${this.address.city}, ${this.address.street}, ${this.address.suite}`;
  }

  get companyName() {
    return this.company.name;
  }
}
