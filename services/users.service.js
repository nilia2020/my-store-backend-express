const { faker } = require('@faker-js/faker');

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 1000;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        name: faker.name.firstName(),
        lastName: faker.name.lastName,
        image: faker.image.imageUrl(),
      });
    }
  }
  create() {}
  find() {
    return this.users;
  }
  findOne(id) {
    return this.users.find((item) => item.id === id);
  }
  update() {}
  delete() {}
}

module.exports = UserService;
