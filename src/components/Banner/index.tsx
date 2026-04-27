import './styles.scss';
import bannerImage from '@/assets/images/black-friday-banner.png';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__image">
        <img src={bannerImage} alt="Banner Black Friday" />
      </div>
      <div className="banner__content">
        <h1>Venha conhecer nossas promoções</h1>
        <p><span>50% Off</span> nos produtos</p>
        <button className="banner__btn">Ver produto</button>
      </div>
    </div>
  );
};

export default Banner;