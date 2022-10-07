const express = require('express')
const fs = require('fs')
const app = express()
const cors = require('cors')

app.use(cors()) // Use this after the variable declaration


const port = 3000

const bookDir = './books/'

app.get('/data', (req, res) => {
  // list all files in the directory
  try {
    const files = fs.readdirSync(bookDir)
    res.json(files)
    console.log("request received")
  } catch (err) {
    console.log(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})