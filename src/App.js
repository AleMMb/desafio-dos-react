import React from "react"
import Input from "./components/Input"
import Boton from "./components/Boton"
import { useState } from "react"


function App() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState ('')


  return (
    <div className="AppBody my-[42px] mx-[200px] p-[30px] rounded-md h-64">
      <h3 className="text-2xl text-orange-600 text-center tracking-tighter font-bold m-4">Log-in please</h3>
      <Input name = {name}  setName= {setName}
             password ={password} setPassword={setPassword}/>
      {password === "252525" ? <Boton /> : null}
    </div>
  );
}

export default App
