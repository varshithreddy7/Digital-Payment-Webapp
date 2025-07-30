import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBoxes } from "../components/InputBoxes"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signin = ()=>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"}/>
        <SubHeading label={"Enter your credentials to access your account"}/>
        <InputBoxes onChange={e => {
          setUsername(e.target.value);
        }} placeholder={"johndee@gmail.com"} label={"Email"}/>
        <InputBoxes onChange={e => {
          setPassword(e.target.value);
        }} placeholder={"123456"} label={"Password"} type="password"/>
        <div className="pt-4">
          <Button onClick={async () => {
            try {
              const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
              });
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard")
            } catch (error) {
              alert("Invalid credentials");
            }
          }} label={"Sign in"}/>
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
      </div>
    </div>

  </div>
}
