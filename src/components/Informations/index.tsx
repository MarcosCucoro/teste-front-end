import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import './styles.scss';
import Logo from '@/assets/images/logo.png';

const Informations = () => {
  return (
    <section className="informations">
      <div className="informations__content">
        <div className="informations__section">
          <div className="informations__brand">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="informations__description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="informations__social">
            <a href="#">
              <FiInstagram size={24} />
            </a>
            <a href="#">
              <FiFacebook size={24} />
            </a>
            <a href="#">
              <FiLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="informations__links">
        <div className="informations__section">
          <h3>Institucional</h3>
          <a href="#">Sobre Nós</a>
          <a href="#">Movimento</a>
          <a href="#">Trabalhe conosco</a>
        </div>
        <div className="informations__section">
          <h3>Ajuda</h3>
          <a href="#">Suporte</a>
          <a href="#">Fale conosco</a>
          <a href="#">Perguntas Frequentes</a>
        </div>
        <div className="informations__section">
          <h3>Termos</h3>
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Troca e Devolução</a>
        </div>
      </div>
    </section>
  );
};

export default Informations;