import React, { useState, useEffect } from "react";
import './styles/App.css';

function Formulario({ onSubmit }) {
  // armazenando os valores dos campos do formulário.
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [confSenha, setconfSenha] = useState('')
    useEffect(() => {
    // Recupera os dados do formulário do armazenamento local ao carregar a página
    const storedNome = localStorage.getItem('nome');
    const storedEmail = localStorage.getItem('email');
    if (storedNome) {
      setNome(storedNome);
    }

    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    // Armazena os dados do formulário no armazenamento local ao alterar o estado do nome ou do email
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
  }, [nome, email]);

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
  //processando os dados de um formulario 
    event.preventDefault();
    onSubmit({ nome, email, senha, confSenha });
  }
  const handleLimpar = () => {
    // limpando os dados ao clicar em enviar apenas se todos os componentes forem prenchidos
    if(senha !== confSenha) {
        alert('Os valores de senha e confirmar senha precisam ser iguais')
    }
    else if(nome && email && senha && confSenha) {
      setNome('');
      setEmail('');
      setSenha('');
      setconfSenha('');
    }
  };

  return (
    <form className='Card-direito' onSubmit={handleSubmit}>
      <div className="ItensForm">
        <h1> Cadastre-se</h1>
        <div className="CampoDeTexto">
          <label htmlFor="nome">Nome:</label>
          <input type="text" name="nome" value={nome}
            onChange={(e) => setNome(e.target.value)} 
            onInput={handleChangeNome} 
            placeholder="Informe seu nome" required />
        </div>
        <div className="CampoDeTexto">
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} 
            onInput={handleChangeEmail} 
            placeholder="Informe seu e-mail" required />
        </div>
        <div className="CampoDeTexto">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" value={senha}
            onChange={(e) => setSenha(e.target.value)} 
           placeholder="Digite sua senha" required />
        </div>
        <div className="CampoDeTexto">
          <label htmlFor="confSenha">Confirmar senha:</label>
          <input type="password" id="confSenha" name="confSenha" value={confSenha}
            onChange={(e) => setconfSenha(e.target.value)} 
           placeholder="Digite-a novamente" required />
        </div>
        <button type="submit" classname="botão" onClick={handleLimpar}> Cadastro </button>
      </div>
    </form>
  )
}

export default Formulario;