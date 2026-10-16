import express from "express"

const PORT = 3333

const app = express()
app.use(express.json())

app.post("/products", (request, response) => {
  const {name, price } = request.query

 // response.send(`Página ${page} de ${limit}`)
 response.status(201).json({ name, price})
})

app.post("/products", (request,response) => {
  const {name, price} = request.body

  response.send(`Produto ${name} custa $ ${price}`)
})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))