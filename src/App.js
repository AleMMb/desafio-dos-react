import React from "react"
import Input from "./components/Input"
import Boton from "./components/Boton"
import { useState } from "react"


function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState ('')


  return (
    <div className="AppBody my-[120px] mx-[580px] p-[30px] rounded-md h-64 flex-column">
      <h3 className=" text-2xl max-w-xs text-orange-600 text-center tracking-tighter font-bold">Log-in please</h3>
      <Input name = {name}  setName= {setName}
             password ={password} setPassword={setPassword}/>
      {password === "252525" && name !== "" ? <Boton /> : null}
    </div>
  );
}

export default App

/* solo se muestra el boton cuando la password es 252525 y el user no sea vacío*/