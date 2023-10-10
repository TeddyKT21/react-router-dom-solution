import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ToDoDetails() {
    const params = useParams()
    const [todo, setDoto] = useState<Record<string,unknown>>({});
    useEffect(() =>{
        (async() =>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);
            const data = await response.json();
            console.log(data);
            setDoto(data);
        })()
    },[])
  return (
    <div>
        <h1>{todo.title as string}</h1>
        <div>completed:{todo.completed ? 'yes' : 'no'}</div>
    </div>
  )
}
