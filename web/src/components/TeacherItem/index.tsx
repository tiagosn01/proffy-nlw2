import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://github.com/tiagosn01.png" alt="Diego Fernandes"/>
        <div>
          <strong>Tiago Silva</strong>
          <span>Informática</span>
        </div>
      </header>

      <p>
        Mestre em tecnologia, didática e bem preparado.
        <br/><br/>
        hehehehehehehhe.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;