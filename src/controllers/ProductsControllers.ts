import { Request, Response } from "express"
import { AppError } from "../utils/AppError"

export class ProductsController {

  index(request: Request, response: Response) {
    const { page, limit } = request.query
    
     response.send(`Página ${page} de ${limit}`)
  }

  create(request: Request, response: Response) {
    const {name, price} = request.body

   // throw new Error("ERRO DE EXEMPLO!")

   if(!name) {
    throw new AppError("Nome do produto é obrigatório", 400)
   }

   // throw new AppError("Erro ao tentar criar um produto")
    response.status(201).json({ name, price, user_id: request.user_id })
  }
 }

