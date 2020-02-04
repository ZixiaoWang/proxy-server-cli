const faker = require('faker');

module.exports = [
    {
        method: 'get',
        path: '/string',
        request: undefined,
        response: faker.lorem.paragraph()
    },
    {
        method: 'get',
        path: '/boolean',
        request: undefined,
        response: false
    },
    {
        method: 'get',
        path: '/number',
        request: undefined,
        response: faker.random.number()
    },
    {
        method: 'get',
        path: '/null',
        request: undefined,
        response: null
    },
    {
        method: 'get',
        path: '/array',
        request: undefined,
        response: new Array(faker.random.number()).fill(0).map(i => faker.random.number())
    },


    {
        method: 'post',
        path: '/object', 
        request: { content: faker.lorem.paragraph() },
        response: { name: faker.name.firstName(), address: faker.address.streetAddress() }
    },
];