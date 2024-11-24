import { useState, useEffect } from "react";

function UseEffectMultipleReturns() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 5000);
  }, []);

  if (isLoading) {
    return <h2>Is Loading</h2>;
  }
  return (
    <>
      <h1>Use Effect Mltiple Returns</h1>

      <div>Loaded</div>
    </>
  );
}

export default UseEffectMultipleReturns;
