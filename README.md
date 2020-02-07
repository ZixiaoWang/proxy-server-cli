# Proxy Server CLI

[![license - MIT](https://img.shields.io/npm/l/http-proxy-cli.svg)](http://foss-haas.mit-license.org)

[![NPM version](https://badge.fury.io/js/start-proxy-server.svg)](http://badge.fury.io/js/start-proxy-server)

This is a cli wrapper for a express based proxy server, the middle ware is using [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware). It means to quickly setup a usable proxy server through one line command.

### Quick usage
Start a proxy server with port`3000`, and proxy the requests include `/api/**` and `/login` to `https://my-domain.com`.  
<br>
**create preset config file**
```bash
    start-proxy-server --init
```  
  
**start the proxy server**
```bash
    start-proxy-server \
        --config "./proxy.config.js" \
        --target "https://my-domain.com" \
        --port 3000 \
        --path-match "/api/**, /login"
```

----  
### Installation
**From NPM**  
```
    npm install -g start-proxy-server
```
<br/>

**From source**
```bash
    git clone https://github.com/ZixiaoWang/proxy-server-cli.git
    yarn install
    yarn build
    node index.js --target <target> --port <port>
```
If you'd like to install it as a global command, you may use `yarn link`. 


---
### CLI options
The command line supports a few options as the shortcut of proxy options.   
Use `start-proxy-server --help` to review the all the feasible commands.
```
Options:
  -p, --port [serverPort]   set port to proxy server, default is 8080
  -t, --target <url>        set target to proxy server, target is required
  -c, --config [filepath]   set config file path, ./proxy.config.js
                            will be used by default
  -P, --path-match <paths>  specify path(s) to proxy, otherwise the request
                            will be sent without proxy.
                            if there are multiple paths, use "," to separate
                            the path.
                            e.g. $ start-proxy-server --path-match
                            "/path1,/path2" --target
                            "https://mydomain.com"
  -i, --init                initailize the config file
  -h, --help                output usage information
```

---
### Config file options
Custom config file is supported, all [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#http-proxy-middleware-options) options can be used, along with some extra `proxy-server` options as following:  
- **options.port**: specify the port for proxy-server, if the specified port is occupied, it will attempt to use any available ports next to that.
- **options.pathMatch**: specify which request's path to be proxied. It can be multiple paths separated by comma, or wildcard paths. Please refer to [Context Matching](https://github.com/chimurai/http-proxy-middleware#context-matching) for further information.
- **options.config**: specify the custom file's path. Both `*.json` and `*.js` are valid, `*.js` must export a valid module. Use `start-proxy-server --init` to create a configuration template file. 

---
### Known issue
**permission denied**: some will met `permission denied` exception after running `yarn link`, you may use `sudo chmod +x you/path/to/bin` to grand access. 

----
### License
Copyright 2020 ZixiaoWang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.