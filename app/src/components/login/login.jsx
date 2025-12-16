import './login.css';

function Login(){
  return (
    <div className="loginContainer">

      <div className="titulosLogin">
        <h1 className="titleolaLogin">Olá,</h1>
        <h1 className="titlebemvindoLogin">Bem-vindo</h1>
        <h1 className="titleiaraLogin"><i id="aIARA">à</i> IAra</h1>
      </div> 

      <img src="../../public/img/iara.png" alt="iara" className="logoiara" />

      <form className="formLogin" method="POST">
        <input type="text" placeholder="Login" className="inputLogin" required/>
        <input type="password" placeholder="Senha" className="inputPassword" required/>
        <button type="submit" className="btnLogin">COMEÇAR</button>
      </form>

      <img src="../../public/img/anjos.png" alt="anjosDigitais" className="anjosDigitais" /> 

    </div>
  );
}

export default Login;
