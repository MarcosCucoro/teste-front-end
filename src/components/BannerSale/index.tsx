import Button from '../Button';
import './styles.scss';
import bannerImage from '@/assets/images/black-friday-banner.png';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__image">
        <img src={bannerImage} alt="Banner Black Friday" />
      </div>
      <div className="banner__content">
        <h1>Venha conhecer nossas promoções</h1>
        <p><span>50% Off</span> nos produtos</p>
        <Button variant="secondary" size="md">
          Ver produto
        </Button>
      </div>
    </section>
  );
};

export default Banner;