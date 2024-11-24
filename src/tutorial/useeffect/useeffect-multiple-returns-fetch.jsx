import { useState, useEffect } from "react";

function UseEffectFetch() {
  const [user, setUser] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://api.github.com/users/QuincyLarson";

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
        }

        const json = await response.json();
        setUser(json);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    }

    getUser();
  }, [setUser]);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>There was an error</h2>;
  }

  //destructure user for ease of use
  const { avatar_url, name, company, bio } = user;

  return (
    <>
      <h1>Use Effect Fetch</h1>
      <div>
        <img
          src={avatar_url}
          style={{ width: "150px", borderRadius: "25px" }}
          alt={name}
        />
        <h2>{name}</h2>
        <h4>Works At: {company}</h4>
        <p>{bio}</p>
      </div>
    </>
  );
}

export default UseEffectFetch;
