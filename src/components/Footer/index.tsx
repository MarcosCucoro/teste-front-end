import Informations from '../Informations';
import Newsletter from '../Newsletter';
import './styles.scss';

const Footer = () => {
  

  return (
    <footer className="footer">
      <Newsletter />
      <Informations />
      <div className="footer__copy">
        <p>&copy; 2026 - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;