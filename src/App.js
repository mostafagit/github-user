import React from "react";
import { Dashboard, Login, PrivateRoute, Error } from "./pages";
import { Routes, Route } from "react-router-dom";


function App() {
  return (

    <Routes>
      <Route  path="/" element={<PrivateRoute/>} >
        <Route index element={<Dashboard/>} />
       </Route>
       <Route path="login" element={<Login/>}/>
      <Route path="*" element={<Error/>} />
    </Routes>

  )
}

export default App;
