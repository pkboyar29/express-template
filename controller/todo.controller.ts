import { Router, Request, Response } from 'express'
import todoService from '../service/todo.service'
const router = Router()

router.get('/', async (req: Request, res: Response) => {
   const data = await todoService.getAll()
   res.json(data)
})

router.get('/:id', async (req: Request, res: Response) => {
   const data = await todoService.getOne(Number(req.params.id))
   res.json(data)
})

router.post('/', async (req: Request, res: Response) => {
   const data = await todoService.create(req.body)
   res.json(data)
})

router.put('/:id', async (req: Request, res: Response) => {
   const data = await todoService.update(Number(req.params.id), req.body)
   res.json(data)
})

router.delete('/:id', async (req: Request, res: Response) => {
   const data = await todoService.delete(Number(req.params.id))
   res.json(data)
})

export default router