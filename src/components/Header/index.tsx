import { CircleUserRound, CreditCard, Crown, Heart, Package2, ShieldCheck, ShoppingCart, Truck } from 'lucide-react';
import './styles.scss';
import logo from '@/assets/images/logo.png';
import SearchInput from '../SearchInput';

const Header = () => {
  return (
    <div className='header'>
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
          <Package2 size={32} className='header__icon'/>
          <Heart size={32} className='header__icon'/>
          <CircleUserRound size={32} className='header__icon'/>
          <ShoppingCart size={32} className='header__icon'/>
        </div>
      </div>
      <hr />
        <div className='navbar'>
          <ul className='nav'>
            <li className='nav__item'>Todas Categorias</li>
            <li className='nav__item'>Supermercado</li>
            <li className='nav__item'>Livros</li>
            <li className='nav__item'>Moda</li>
            <li className='nav__item'>Lançamentos</li>
            <li className='nav__item'>Ofertas do dia</li>
            <li className='nav__item'>
              <Crown />
              Assinatura
            </li>
          </ul>
        </div>

      {/* <Button variant="primary">
        Comprar
      </Button>

      <Button variant="secondary">
        Ver produto
      </Button> */}

      {/* <div>
        <h1 className="text" >Hello World</h1>
      </div> */}
    </div>
  );
};

export default Header;