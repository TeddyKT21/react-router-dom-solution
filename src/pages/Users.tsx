import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState<Record<string, unknown>[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);
      setUsers(data);
    })();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div onClick={() => navigate(`/users/${user.id}`)}>
          {user.name as string}
        </div>
      ))}
    </div>
  );
}
