import { Request, Response } from "express"
import { AppError } from "../utils/AppError"
import { z } from "zod"


export class ProductsController {

  index(request: Request, response: Response) {
    const { page, limit } = request.query
    
     response.send(`Página ${page} de ${limit}`)
  }

  create(request: Request, response: Response) {
   // throw new Error("ERRO DE EXEMPLO!")
    const bodySchema = z.object({
      name: z.string(),
      price: z.number()
    })

    const { name, price } = bodySchema.parse(request.body)
  /*
  if(!name) {
    throw new AppError("Nome do produto é obrigatório", 400)
   }

   if(name.trim().length < 6) {
    throw new AppError("Nome do produto precisa ter pelo menos 6 caracteres!")
   }

   if(price < 0) {
    throw new AppError("Preço do produto não pode ser menor que 0.")
   }

   if(!price) {
    throw new AppError("O preço do produto é obrigatório", 400)
   }
    */

   // throw new AppError("Erro ao tentar criar um produto")
    response.status(201).json({ name, price, user_id: request.user_id })
  }
 }

