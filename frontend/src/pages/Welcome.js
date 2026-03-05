import {useNavigate} from "react-router-dom"
import "./Welcome.css"

function Welcome(){

const username = localStorage.getItem("username")

const navigate = useNavigate()

const logout = ()=>{
localStorage.clear()
navigate("/")
}

return(

<div className="welcome">

<h1>Welcome {username}</h1>

<button onClick={logout}>Logout</button>

</div>

)

}

export default Welcome