import { useState, useEffect } from "react";

function UseEffectFetch() {
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(url);

      if (!response.ok) {
        console.log(`Response Status: ${response.status}`);
      }

      const json = await response.json();
      setUsers(json);
    }

    getUsers();
  }, [setUsers]);

  return (
    <>
      <h1>Use Effect Fetch</h1>
      <div>
        <ul className="users">
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default UseEffectFetch;
