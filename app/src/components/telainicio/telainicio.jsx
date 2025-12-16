import './telaincio.css';
import { useNavigate } from 'react-router-dom';

function Telainicio(){
     const navigate = useNavigate();

     
  function irParaLogin() {
    navigate('/login');
  }


    return (

        <div className="indexContainer">
            <div className='conteudoindex'>

            <h1 className='tituloindex'>IAra</h1>            
                <img src="/img/iara.png" alt="logoiara" className='logoiaraindex' />
                <button className='btnEntrar' onClick={irParaLogin} >Entrar</button>
                <img src="/img/anjos.png" alt="anjosdigitais" className='anjosDigitais1' />
            </div>


        </div>
    );
    
}
export default Telainicio;