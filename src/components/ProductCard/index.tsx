import type { Product } from '../../types/Product';
import Button from '../Button';
import './styles.scss';

interface Props {
  product: Product;
  onClick?: () => void;
}

const formatPrice = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

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
        <img src={product.image} alt={product.description} />
      </div>
      <div className="product-card__body">
        <p className="product-card__description">{product.description}</p>
        <p className="product-card__original-price">{formatPrice(product.originalPrice)}</p>
        <p className="product-card__price">{formatPrice(product.currentPrice)}</p>
        <p className="product-card__installments">
          ou {product.installments}x de {formatPrice(product.installmentPrice)} sem juros
        </p>
        <span className="product-card__shipping">Frete grátis</span>
        <Button fullWidth onClick={onClick}>COMPRAR</Button>
      </div>
    </div>
  );
};

export default ProductCard;