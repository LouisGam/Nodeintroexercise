

const http = require("http");

http.createServer((request, response) => {
    response.end("Hey this is my server");
    
})

.listen(5000, () => {
    console.log("server is now listening on port 5000");
});