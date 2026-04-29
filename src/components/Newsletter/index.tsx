import { useState } from 'react';
import './styles.scss';
import Button from '../Button';

const Newsletter = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__section">
        <div className="newsletter__content">
          <h3 className="newsletter__title">
            Inscreva-se na nossa newsletter
          </h3>
          <p className="newsletter__description">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>
        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <div className="newsletter__fields">
            <input
              type="text"
              className="newsletter__input"
              placeholder="Digite seu nome"
            />
            <input
              type="email"
              className="newsletter__input"
              placeholder="Digite seu email"
            />
            <Button variant='secondary' size='sm' uppercase>
              Inscrever
            </Button>
          </div>
          <div className="newsletter__terms">
            <label className='newsletter__label'>
              <input type="checkbox" name="newsletter" id="newsletter" checked={isChecked}
                onChange={handleOnChange} />
              <span>Aceito os termos e condições</span>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;