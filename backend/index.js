require('dotenv').config();
const server = require('./server')

const port = process.env.BACKEND_PORT || 3001
server.listen(port, () => console.log(`API server started on ${port}`))
