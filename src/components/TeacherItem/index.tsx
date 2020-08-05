/* eslint-disable max-len */
import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/54728248?s=460&u=4775c5b1a6ca003e71d9b04ac0b6c7cb2bc47fb5&v=4" alt="Iagor de Sousa" />
        <div>
          <strong>Iagor de Sousa</strong>
          <span>Coach</span>
        </div>
      </header>

      <p>
        Mestre em falar abobrinha
        <br />
        <br />
        Eu não tenho a menor ideia do que eu estou dizendo, logo, você também não tem e esse texto vai continuar sem fazer sentido nenhum perante nossa ínfima existência.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$200,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
