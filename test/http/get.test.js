// Proxy server is running at port 3000, 
// and it'll proxy all the GET request to http://localhost:9000

const express = require('express');
const axios = require('axios');
const faker = require('faker');
const app = express();

const cases = [
    ['/object', { content: faker.lorem.paragraph() }],
    ['/array', new Array(3).fill(0).map(i => ({ name: `${ faker.name.firstName() } ${ faker.name.lastName() }`}))],
    ['/text', faker.lorem.sentence()],
    ['/null', null],
    ['/buffer', new ArrayBuffer(100)]
];
const map = new Map(cases);

app.use((request, response) => {
    const path = request.path;
    const res_body = map.get(path);
    response.send(res_body);
});

app.listen(9000, async () => {
    const promise_list = cases.map(async ([path, request_body]) => {
        try {
            const proxy_url = 'http://localhost:3000' + path;
            const url = 'http://localhost:9000' + path;
            const proxy_response = await axios.get(proxy_url);
            const response = await axios.get(url);
            const proxy_response_data = proxy_response.data;
            const response_data = response.data;

            return ['GET', path, JSON.stringify(proxy_response_data) === JSON.stringify(response_data)];
        } catch (e) {
            return ['GET', path, false, e.message];
        }
    });

    const results = await Promise.all(promise_list);
    console.log(results);
});