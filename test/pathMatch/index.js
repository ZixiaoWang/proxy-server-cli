const express = require('express');
const faker = require('faker');
const axios = require('axios');
const colors = require('colors');
const proxy = require('../../dist/server/index.js');

const app = express();

// Functions
const randomArray = (minNumber = 10) => {
    const length = Math.floor( Math.random() * 10 + minNumber );
    return new Array(length).fill(1);
}

const randomPath = () => {
    const random_num = Math.floor( Math.random() * 3 + 1 );
    const random_paths = new Array(random_num).fill(0).map(i => `/${ faker.lorem.word() }`);
    return random_paths.join('');
}

const randomObject = () => {
    const object = {};
    const random_num = Math.floor( Math.random() * 5 + 1 );
    new Array(random_num).fill(0).forEach(i => {
        object[faker.lorem.word()] = faker.lorem.word();
    });
    return object;
}


// Cases
const proxy_requests = randomArray(10).map(i => ({ _id: faker.random.number(), uuid: faker.random.uuid(), path: randomPath(), params: randomObject() }));
const normal_requests = randomArray(50).map(i => ({ _id: faker.random.number(), uuid: faker.random.uuid(), path: randomPath(), params: randomObject() }));
const paths_match = proxy_requests.map(obj => obj.path);
const paths_match_set = new Set(paths_match);
const requests = proxy_requests.concat(normal_requests).sort((pre, next) => pre._id - next._id);
const received_path = [];

app.all("*", (req, res) => {
    const path = req.path;
    received_path.push(path);
    if (paths_match_set.has(path)) {
        console.log(`[REC] ${ colors.green(path) }`);
        paths_match_set.delete(path);
    } else {
        console.log(`[ERR] ${ colors.red(path) }`);
    }
    res.status(200).send(true);
});

const test_server = app.listen(9999, async () => {
    const options = {
        ws: false,
        changeOrigin: true,
        port: 7025,
        target: 'http://localhost:9999',
        pathMatch: paths_match.join(', '),
        onError: (err) => {
            console.log(err)
        }
    }
    const proxy_server = await proxy.start_server(options);
    
    console.log('==================================');
    try {
        await requests.reduce(async (promise, request) => {
            try {
                await promise;
                return axios.get('http://localhost:7025' + request.path, { params: request.params });
            } catch (e) {
                return Promise.resolve();
            }
        }, Promise.resolve());
    } catch (e) {
        console.log(e.message);
    } finally {
        test_server.close();
        proxy_server.close();
        
        console.log('==================================');
        console.log(`${ colors.magenta('PROXY') } ${ proxy_requests.length } paths`);
        console.log(`${ colors.blue('NORMAL') } ${ normal_requests.length } paths`);
        console.log(`${ colors.yellow('SENT') } ${ requests.length } requests`);
        console.log(`${ colors.green('RECEIVED') } ${ received_path.length } path(s)`);
        console.log(`${ colors.red('REMAIN') } ${ paths_match_set.size } path(s) have not been hit`);
        console.log('==================================');
        console.log('Remained paths: ');
        paths_match_set.forEach(url => {
            console.log(url);
        });
        console.log('==================================');
    }
});