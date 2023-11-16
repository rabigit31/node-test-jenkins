const express = require('express')
const app = express()
const port = 3020

app.get('/', (req, res) => {
    res.send('This tis my first docer dfggdfhgfdhg jdhjhdfjh 888888 fjjhhf 55555 uyuyuy Test process ffgjhgjfhg fjgjfggh')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})