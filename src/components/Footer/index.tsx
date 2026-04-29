import Informations from '../Informations';
import Newsletter from '../Newsletter';
import './styles.scss';

const Footer = () => {
  

  return (
    <footer className="footer">
      <Newsletter />
      <Informations />
      <div className="footer__copy">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;