import './telaincio.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Telainicio() {
  const navigate = useNavigate();
  const [comecando, setComecando] = useState(false);
  const [saindo, setSaindo] = useState(false);

  function irParaLogin() {
    setComecando(true);
    setSaindo(true);

    setTimeout(() => {
      navigate('/login');
    }, 1000);
  }

  return (
    /* Adicionamos a classe 'flex-center' para garantir centralização total */
    <div className={`indexContainer ${saindo ? 'fade-out' : ''} flex-center`}>
      <div className="conteudoindex">

        <h1 className="tituloindex">IAra</h1>

        {/* Removi estilos inline ou posições fixas agressivas daqui */}
        <img src="/img/iara.png" alt="logoiara" className="logoiaraindex" />

        <button
          className="btnEntrar"
          onClick={irParaLogin}
          disabled={comecando}
        >
          {comecando ? 'Começando...' : 'Entrar'}
        </button>

        <img
          src="/img/anjos.png"
          alt="anjosdigitais"
          className="anjosDigitais1"
        />
      </div>
    </div>
  );
}

export default Telainicio;