import { Product } from '../../types/product';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../ProductCard/ProductCard';
import styles from './ProductShelf.module.scss';

interface ProductShelfProps {
  onSelect: (product: Product) => void;
}

export function ProductShelf({ onSelect }: ProductShelfProps) {
  const { products, loading, error } = useProducts();

  return (
    <section className={styles.shelf}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Vitrine de Produtos</h2>

        {loading && (
          <p className={styles.status} role="status">
            Carregando produtos...
          </p>
        )}

        {error && (
          <p className={styles.statusError} role="alert">
            {error}
          </p>
        )}

        {!loading && !error && products.length === 0 && (
          <p className={styles.status}>Nenhum produto encontrado.</p>
        )}

        {!loading && !error && products.length > 0 && (
          <ul className={styles.grid}>
            {products.map((product) => (
              <li key={String(product.id)}>
                <ProductCard product={product} onSelect={onSelect} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
