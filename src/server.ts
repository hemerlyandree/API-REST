import express from "express"

const PORT = 3333

const app = express()

app.get("/", (request, response) => {
  // console.log
  response.send("Hello World Express!")
})


app.listen(PORT, () => console.log(`Server is running at ${PORT}`))