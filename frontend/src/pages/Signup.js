import { useState } from "react"
import { signupUser } from "../services/authService"
import { useNavigate } from "react-router-dom"
import "./Signup.css"

function Signup(){

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [message,setMessage] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async(e)=>{

    e.preventDefault()

    try{

      await signupUser({username,password})

      setMessage("User created")

      setTimeout(()=>{
        navigate("/")
      },1500)

    }catch(err){
      setMessage(err.response?.data?.message || "Error")
    }

  }

  return(

    <div className="signup">

      <form onSubmit={handleSubmit}>

        <h2>Sign Up</h2>

        <input
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button>Create Account</button>

        <p>{message}</p>

      </form>

    </div>

  )

}

export default Signup