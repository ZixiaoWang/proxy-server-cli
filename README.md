# Proxy Server CLI
This is a cli wrapper for a express based proxy server, the middle ware is using [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware). It means to quickly setup a usable proxy server through one line command.

### Quick usage
Start a proxy server with port`3000`, and proxy the requests include `/api/**` and `/login` to `https://my-domain.com`.
```bash
    proxy-server \
        --target "https://my-domain.com" \
        --port 3000 \
        --path-match "/api/**, /login"
```

----  
### Installation
```bash
    git clone https://github.com/ZixiaoWang/proxy-server-cli.git
    yarn install
    yarn build
    node index.js --target <target> --port <port>
```
If you'd like to install it as a global command, you may use `yarn link`. 

----
### License
Copyright 2020 ZixiaoWang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.