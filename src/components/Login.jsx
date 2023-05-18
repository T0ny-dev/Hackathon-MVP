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
      {/**this part is the banner section */}
      <div className="login__banner">
        
      </div>
      {/**this part is the Login */}
      <div className="login__Container">
        <div className="login__form">
        {/*<img src="/logobunisess.svg" alt="logo bunisess-center" width={200}/>*/}
        <h1>Bienvenido! 👋</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electronico</label>
          <input type="email" name="email" placeholder="name@company.com" onChange={handleChange}/>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" onChange={handleChange} placeholder="******"/>
          <button className="Primary__Button">Iniciar Sesion</button>
          <p>OR</p>
        </form>
        <button className="google__Button" onClick={handleGoogleSignin}> <img src="/google.png"
        width={18}/> Inicia sesion con Google</button>
        </div>
      </div>
    </div>
  )
}

export default Login;