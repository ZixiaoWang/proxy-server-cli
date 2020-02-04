export const get_config_template = (): string => {
    return `module.exports = {
    /**
     * Options for local server
    */
    port: 3000,         // set the port for your proxy server,
    pathMatch: '/',     // matched path will be proxied, others will be ignored

    /** 
     * Options from http-proxy-middleware
     * Please go to https://github.com/chimurai/http-proxy-middleware#http-proxy-middleware-options for more detailed specification.
     * Auther:  chimurai
     * Github repository: https://github.com/chimurai/http-proxy-middleware#http-proxy-middleware-options
    */
    // target: null, 		    // url string to be parsed with the url module
    // forward: null, 		    // url string to be parsed with the url module
    // agent: null, 		    // object to be passed to http(s).request (see Node's https agent and http agent objects)
    // ssl: null, 		        // object to be passed to https.createServer()
    ws: true, 		            // true/false: if you want to proxy websockets
    // xfwd: false, 		    // true/false, adds x-forward headers
    // secure: false, 		    // true/false, if you want to verify the SSL Certs
    // toProxy: false, 		    // true/false, passes the absolute URL as the path (useful for proxying to proxies)
    // prependPath: true, 		// true/false, Default: true - specify whether you want to prepend the target's path to the proxy path
    // ignorePath: false, 		// true/false, Default: false - specify whether you want to ignore the proxy path of the incoming request (note: you will have to append / manually if required).
    // localAddress: null, 		// Local interface string to bind for outgoing connections
    changeOrigin: true, 		// true/false, Default: false - changes the origin of the host header to the target URL
    // preserveHeaderKeyCase: false, 		// true/false, Default: false - specify whether you want to keep letter case of response header key
    // auth: null, 		        // Basic authentication i.e. 'user:password' to compute an Authorization header.
    // hostRewrite: null, 		// rewrites the location hostname on (301/302/307/308) redirects.
    // autoRewrite: null, 		// rewrites the location host/port on (301/302/307/308) redirects based on requested host/port. Default: false.
    // protocolRewrite: null, 		    // rewrites the location protocol on (301/302/307/308) redirects to 'http' or 'https'. Default: null.
    // cookieDomainRewrite: null, 		// rewrites domain of set-cookie headers.
    // cookiePathRewrite: null, 		// rewrites path of set-cookie headers.
    // headers: null, 		    // object, adds request headers. (Example: {host:'www.example.org'})
    // proxyTimeout: null, 		// timeout (in millis) when proxy receives no response from target
    // timeout: null, 		    // timeout (in millis) for incoming requests
    // followRedirects: false, 		    // true/false, Default: false - specify whether you want to follow redirects
    // selfHandleResponse: false, 		// true/false, if set to true, none of the webOutgoing passes are called and it's your responsibility to appropriately return the response by listening and acting on the proxyRes event
    // buffer: null, 		            // stream of data to send as the request body. Maybe you have some middleware that consumes the request stream before proxying it on e.g. If you read the body of a request into a field called 'req.rawbody' you could restream this field in the buffer 
}`
}