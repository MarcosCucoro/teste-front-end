import './styles.scss';

import logo from '@/assets/images/logo.png';
import { CircleUserRound, CreditCard, Crown, Heart, Menu, Package2, ShieldCheck, ShoppingCart, Truck, X } from 'lucide-react';
import { useState } from 'react';

import SearchInput from '../SearchInput';

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <button
          className='header__menu-btn'
          onClick={() => setIsMenuOpen(true)}
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
        <div className='header__logo'>
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

      {isMenuOpen && (
        <div className='mobile-menu' onClick={() => setIsMenuOpen(false)} role="presentation">
          <div
            className='mobile-menu__drawer'
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <button
              className='mobile-menu__close'
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
            <nav className='mobile-menu__nav'>
              {allCategories.map((category) => (
                <a
                  href='#'
                  key={category.name}
                  className={`mobile-menu__item ${active === category.name ? 'mobile-menu__item--active' : ''}`}
                  onClick={() => { setActive(category.name); setIsMenuOpen(false); }}
                >
                  {category.icon}{category.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;