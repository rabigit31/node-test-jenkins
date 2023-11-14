const express = require('express')
const app = express()
const port = 3020

app.get('/', (req, res) => {
    res.send('Hello World!ttt hi rabi bhakat Bajran Bali 6666 66 99 11')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})