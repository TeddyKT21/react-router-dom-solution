import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function UserDetails() {
    const params = useParams()
    const [user, setUser] = useState<Record<string,unknown>>({});
    const navigate = useNavigate();
    useEffect(() =>{
        (async() =>{
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            const data = await response.json();
            console.log(data);
            setUser(data);
        })()
    },[])
  return (
    <div>
        <h1>{user.name as string}</h1>
        <div>{user.email as string}</div>
        <button onClick={() =>navigate(`/users/${params.id}/todos`)}>see todos</button>
    </div>
  )
}
