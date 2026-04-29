import Button from '../Button';
import './styles.scss';
import BannerPartner from '@/assets/images/bannerPartner.png';

const BannerPartners = () => {
  return (
    <section className="banner-partners">
      <div className="banner-partners__content">
        <div className="banner-partners__image-wrapper">
          <img src={BannerPartner} alt="Banner dos parceiros" />
          <div className="banner-partners__overlay">
            <h2 className="banner-partners__title">Parceiros</h2>
            <p className="banner-partners__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button variant='secondary' size='xs' uppercase>Confira</Button>
          </div>
        </div>
      </div>
      <div className="banner-partners__content">
        <div className="banner-partners__image-wrapper">
          <img src={BannerPartner} alt="Banner dos parceiros" />
          <div className="banner-partners__overlay">
            <h2 className="banner-partners__title">Parceiros</h2>
            <p className="banner-partners__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button variant='secondary' size='xs' uppercase>Confira</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerPartners;