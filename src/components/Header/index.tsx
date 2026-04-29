import './styles.scss';

import logo from '@/assets/images/logo.png';
import { CircleUserRound, CreditCard, Crown, Heart, Package2, ShieldCheck, ShoppingCart, Truck } from 'lucide-react';
import { useState } from 'react';

import SearchInput from '../SearchInput';

const Header = () => {
  const [active, setActive] = useState<string | null>(null);

  const allCategories = [
    {
      name: 'Todas Categorias',
    },
    {
      name: 'Supermercado',
    },
    {
      name: 'Livros',
    },
    {
      name: 'Moda',
    },
    {
      name: 'Lançamentos',
    },
    {
      name: 'Ofertas do dia',
    },
    {
      icon: <Crown size={20} />,
      name: 'Assinatura',
    }
  ]

  return (
    <header className='header'>
      <div className='topbar'>
        <div className='topbar__item'>
          <ShieldCheck size={20} />
          <p>Compra <span>100% segura</span></p>
        </div>
        <div className='topbar__item'>
          <Truck size={20} />
          <p><span>Frete grátis</span> acima de R$ 200</p>
        </div>
        <div className='topbar__item'>
          <CreditCard size={20} />
          <p><span>Parcele</span> suas compras</p>
        </div>
      </div>
      <hr />
      <div className='header__content'>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <SearchInput />
        <div className='header__icons'>
          <Package2 size={32} className='header__icon' />
          <Heart size={32} className='header__icon' />
          <CircleUserRound size={32} className='header__icon' />
          <ShoppingCart size={32} className='header__icon' />
        </div>
      </div>
      <hr />
      <div className='navbar'>
        <div className='nav'>
          {allCategories.map((category) => (
            <a href='#'
              key={category.name}
              className={`nav__item ${active === category.name ? 'nav__item--active' : ''
                }`}
              onClick={() => setActive(category.name)}
            >
              {category.icon}{category.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;