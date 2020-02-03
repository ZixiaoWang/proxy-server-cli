// Proxy server is running at port 3000, 
// and it'll proxy all the GET request to http://localhost:9000

const express = require('express');
const axios = require('axios');
const case_array = require('./cases');
const faker = require('faker');

const case_map = new Map();
const app = express();

const cases = case_array.map(item => {
    const id = faker.random.uuid();
    item.request.id = id;

    return {
        id, 
        ...item
    }
});

cases.forEach(item => {
    case_map.set(item.id, item);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use((req, res) => {
    const id = req.body.id;
    const item = case_map.get(id);
    res.send(item.response);
})

app.listen(9000, async () => {
    const promise_list = cases.map(async (item) => {
        try {
            const proxy_url = 'http://localhost:3000' + item.path;
            const url = 'http://localhost:9000' + item.path;
            const options = {
                method: item.method,
                data: item.request
            }

            const proxy_response = await axios({ url: proxy_url, ...options });
            const response = await axios({ url: url, ...options });

            const proxy_response_data = proxy_response.data;
            const response_data = response.data;

            return [item.method, item.path, JSON.stringify(proxy_response_data) === JSON.stringify(response_data)];
        } catch (e) {
            return [item.method, item.path, false, e.message];
        }
    });

    const results = await Promise.all(promise_list);
    console.log(results);

    process.exit(0);
});