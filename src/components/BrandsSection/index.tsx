import './styles.scss';
import Logo from '@/assets/images/logo.png';

const BrandsSection = () => {
  return (
    <section className="brands-section">
      <div className="brands-section__header">
        <h2 className="brands-section__title">Navegue por marcas</h2>
      </div>
      <div className="brands-container">
        <div className="brands-container__brands">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="brands-container__brands">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="brands-container__brands">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="brands-container__brands">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="brands-container__brands">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;