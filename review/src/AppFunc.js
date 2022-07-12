import React, { useState, useEffect } from "react";

const AppFunc = () => {
  console.log("AppFunc: Component setup state:")
  const [name, setName] = useState("Warren");
  
  const handleClick = () => {
    console.log("AppFunc: component changes state:", name)
    setName("Allison");
  };

  useEffect(() => {
    console.log("AppFunc: Component Mounted")
    setName("Rinat")
  }, [])

  useEffect(() => {
    console.log("AppFunc: Component Updated")
  })

  console.log("AppFunc: Component renders:", name)
  return (
    <div>
      <h1>Hello {name}!</h1>
  
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
