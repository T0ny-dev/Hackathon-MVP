import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import "../style/login.css"


function Login () {

  /**use state from inputs values */
  const [user, setUser] = useState({
    email:'',
    password:'',
  });

    const {login, loginWithGoogle} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState();

  const handleChange = ({target:{name, value}}) => setUser({...user,[name]:value})
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await login(user.email, user.password)
      navigate("/");
    }
    catch(error) {
      setError(error.message);
    }
  }

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      navigate("/");
    }catch(error){
      setError(error.message);
    }
  }
  
  return (
    <div className="login">
      {/**this part is the Login */}
      <div className="login__Container">
        <div className="login__form">
        <div className="login__form__return">
          <a href="#">
          <img src="./return.png" alt="" />
          </a>
        </div>
        <img src="/logolaborcamp.svg" alt="" />
        <h2>Hola de nuevo por aquí ⛺</h2>
        <img id="login__form__avatar"  src="avatarbear.png"></img>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="name@company.com" onChange={handleChange}/>
          <input type="password" name="password" id="password" onChange={handleChange} placeholder="******"/>
          <button className="Primary__Button">Iniciar Sesion</button>
          <p>OR</p>
        </form>
        <button id="google__Button" onClick={handleGoogleSignin}> <img src="/google.png"
        width={18}/></button>
        </div>
      </div>
    </div>
  )
}

export default Login;