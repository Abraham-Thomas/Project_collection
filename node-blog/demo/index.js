const http = require("http")
const querystring = require("querystring")

const server = http.createServer((req, res) => {
  console.log(req.method)
  const url = req.url
  console.log("url:", url)
  req.query = querystring.parse(url.split("?"[1]))
  console.log("query:", req.query)
  res.writeHead(200, { "content-type": "text/html" })
  res.end("<h1>hello world</h1>")
})

server.listen(3000, () => {
  console.log("listen on localhost:3000")
})
