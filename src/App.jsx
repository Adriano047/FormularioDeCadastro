import React from "react"
import './styles/App.css';
import Imagem from './imgs/Login-bro.png'
import Formulario from './Formulario.jsx'
function App() {
  const handdleSubmit = (dadosFormulario) => {
  
  }
  return (
  <div className="App">

    {/* parte de cima */}
    <div className="Header">
          <h1> Junte-se a Nós</h1>
          <p>  
            Faça seu cadastro hoje mesmo. 
          </p>
    </div>
    {/* lado esquedo onde se tem a imagem */}
      <div className='Form'>
        <div className='Card-esquerdo'>  
            <img src={Imagem}  alt="imagem" /> 
            {/* <a href="https://storyset.com/user">User illustrations by Storyset</a> */}
        </div>
        {/* lado direto onde se tem o formulario */}
        <Formulario onSubmit={handdleSubmit}/>
      </div>
    </div>
  );
}

export default App;
