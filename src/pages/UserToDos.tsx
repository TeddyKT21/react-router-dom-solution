import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UserToDos() {
  const params = useParams();
  const [todos, setTodos] = useState<Record<string, unknown>[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}/todos`
      );
      const data = await response.json();
      console.log(data);
      setTodos(data);
    })();
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <div onClick={() => navigate(`/users/${params.id}/todos/${todo.id}`)}>{todo.title as string}</div>
      ))}
    </div>
  );
}
