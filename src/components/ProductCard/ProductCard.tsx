import { Product } from '../../types/product';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <article className={styles.card} onClick={() => onSelect(product)}>
      <div className={styles.imageWrapper}>
        <img src={product.photo} alt={product.productName} loading="lazy" />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.productName}</h3>
        {product.capsule && (
          <span className={styles.capsule}>{product.capsule}</span>
        )}
        <p className={styles.price}>{formattedPrice}</p>
        <button
          className={styles.button}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          aria-label={`Ver detalhes de ${product.productName}`}
        >
          Ver detalhes
        </button>
      </div>
    </article>
  );
}
