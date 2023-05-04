import { Router } from "express";
const router=Router();
import { Todo } from "../models/todo";
let todos:Todo[]=[];

router.get('/',(req,res,next)=>{
  res.json({todos:todos});
})

router.post('/add',(req,res,next)=>{
    
    const newTodo: Todo={
        id:new Date().toISOString(),
         text: req.body.text
    };
    todos.push(newTodo);
    return res.status(201).json({success:false,message:'new data added',todo:todos});
})

router.put('/todo/:id',(req,res,next)=>{
    const tid=req.params.id;
    const todoindex=todos.findIndex(ele=> ele.id===tid);
    if(todoindex>=0){
  todos[todoindex]= {
    id:todos[todoindex].id,
    text:req.body.text
  }
  return res.status(201).json({success:true,message:'data changed',todo:todos});
    }
    else{
        res.status(404).json({success:false,message:'could not find data',todo:todos})
    }
})

router.delete('/todo/:id',(req,res)=>{
    const id=req.params.id;
   todos= todos.filter(ele=> ele.id!==id);
   res.status(200).json({success:true,message:'deleted'});
})

export default router;
