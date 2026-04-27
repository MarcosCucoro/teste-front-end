import { useEffect } from 'react';
import { Product } from '../../types/product';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      aria-hidden="true"
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label={product.productName}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ✕
        </button>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={product.photo} alt={product.productName} />
          </div>
          <div className={styles.details}>
            <h2 className={styles.name}>{product.productName}</h2>
            {product.capsule && (
              <span className={styles.capsule}>{product.capsule}</span>
            )}
            <p className={styles.price}>{formattedPrice}</p>
            <p className={styles.description}>{product.description}</p>
            {product.rating !== undefined && (
              <p className={styles.rating}>
                Avaliação: <strong>{product.rating}</strong> / 5
              </p>
            )}
            <button className={styles.buyButton}>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
