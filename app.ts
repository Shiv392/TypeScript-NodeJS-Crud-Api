import express from 'express';
const app=express();
import bodyparser  from 'body-parser';
import todosRoute from './routes/todos';
const port:number=8000;

app.use(bodyparser.json());
app.use(todosRoute);

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
    
})