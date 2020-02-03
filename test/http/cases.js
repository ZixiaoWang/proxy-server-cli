const faker = require('faker');

module.exports = [
    {
        method: 'post',
        path: '/object', 
        request: { content: faker.lorem.paragraph() },
        response: { name: faker.name.firstName(), address: faker.address.streetAddress() }
    }
];