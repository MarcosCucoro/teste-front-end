import type { Product } from '../../types/Product';
import Button from '../Button';
import './styles.scss';

interface Props {
  product: Product;
  onClick?: () => void;
}

const formatPrice = (value?: number) =>
  value?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) ?? '';

const ProductCard = ({ product, onClick }: Props) => {
  return (
    <div
      className="product-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="product-card__image">
        <img src={product.photo} alt={product.descriptionShort} />
      </div>
      <div className="product-card__body">
        <p className="product-card__description">{product.descriptionShort}</p>
        <p className="product-card__original-price">{formatPrice(product.price)}</p>
        <p className="product-card__price">{formatPrice(product.price)}</p>
        <p className="product-card__installments">
          ou 2x de {formatPrice(product.price ? product.price / 2 : 0)} sem juros
        </p>
        <span className="product-card__shipping">Frete grátis</span>
        <Button fullWidth onClick={onClick}>COMPRAR</Button>
      </div>
    </div>
  );
};

export default ProductCard;