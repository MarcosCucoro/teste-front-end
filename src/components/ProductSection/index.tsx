import { useRef, useState } from 'react';
import ProductCard from '../ProductCard';
import type { Product } from '../../types/Product';
import './styles.scss';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  title: string;
  products: Product[];
  categories?: string[];
  onViewAll?: () => void;
  onProductClick?: (product: Product) => void;
  onCategoryChange?: (category: string) => void;
}

const SCROLL_AMOUNT = 280;

const ProductSection = ({
  title,
  products,
  categories,
  onViewAll,
  onProductClick,
  onCategoryChange,
}: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(categories?.[0] ?? '');

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      trackRef.current.scrollBy({
        left: direction === 'right' ? SCROLL_AMOUNT : -SCROLL_AMOUNT,
        behavior: 'smooth',
      });
    }
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <section className="product-section">
      <h2 className='product-section__title'>
        <span>{title}</span>
      </h2>

      {categories && (
        <div className='product-section__categories'>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`product-section__category${activeCategory === cat ? ' product-section__category--active' : ''}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {!categories && onViewAll && (
        <div className='product-section__view-all-wrapper'>
          <button className='product-section__view-all' onClick={onViewAll}>
            Ver todos
          </button>
        </div>
      )}

      <div className='product-section__carousel'>
        <button
          className='product-section__arrow'
          onClick={() => scroll('left')}
          aria-label="Anterior"
        >
          <ChevronLeft />
        </button>

        <div className='product-section__track' ref={trackRef}>
          {products.map((product, index) => (
            <ProductCard
              key={product.id ?? index}
              product={product}
              onClick={() => onProductClick?.(product)}
            />
          ))}
        </div>

        <button
          className='product-section__arrow'
          onClick={() => scroll('right')}
          aria-label="Próximo"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ProductSection;