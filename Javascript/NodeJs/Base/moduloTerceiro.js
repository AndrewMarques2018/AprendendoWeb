const _ = require("lodash")
setInterval( () => {console.log(_.random(0, 100))}, 1000 )

const http = require("http")
http.createServer( (req, res) => {
    res.write("Hellow Web")
    res.end()
}).listen(8080)