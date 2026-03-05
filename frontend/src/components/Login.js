import {useState} from "react"
import {loginUser} from "../services/authService"
import {useNavigate} from "react-router-dom"
import "./Login.css"

function Login(){

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")

const navigate = useNavigate()

const submit = async(e)=>{

e.preventDefault()

try{

const res = await loginUser({username,password})

localStorage.setItem("token",res.data.token)
localStorage.setItem("username",res.data.username)

navigate("/welcome")

}catch(err){
setError("Invalid login")
}

}

return(

<div className="login">

<form onSubmit={submit}>

<h2>Login</h2>

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

<button>Login</button>

<p>{error}</p>

<a href="/signup">Create account</a>

</form>

</div>

)

}

export default Login