import React, { useState, useEffect } from "react";

const AppFunc = () => {
  const [name, setName] = useState("Warren");
  const handleClick = () => {
    setName("Allison");
  };
  console.log("APPFUNC: Component Constructed");

  useEffect(()=>{
    console.log("APPFUNC: Component Mounted");
  }, []);

  useEffect(()=>{
    console.log("APPFUNC: Component Updated");
  }, [name]);

  console.log("APPFUNC: Component Rendered");
  return (
    <div>
      <h1>Hello {name}!</h1>
  
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
