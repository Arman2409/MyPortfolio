const express = require('express')
const app = express()


app.get('/', (req, res) => res.send('Server running!'));



const port = process.env.PORT
app.listen(port, () => console.log(`server listening on port ${port}!`))