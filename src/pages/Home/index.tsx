import { useState } from 'react';
import Header from '@/components/Header';
import './styles.scss';
import Banner from '@/components/BannerSale';
import CategorySection from '@/components/CategorySection';
import ProductModal from '@/components/ProductModal';
import ProductSection from '@/components/ProductSection';
import type { Product } from '@/types/Product';
import BannerPartners from '@/components/BannerPartners';
import BrandsSection from '@/components/BrandsSection';
import Footer from '@/components/Footer';

const mockProducts: Product[] = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Lorem ipsum dolor sit amet ${i + 1}`,
  image: `https://placehold.co/200x200?text=Produto+${i + 1}`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  details: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
  originalPrice: 30.9,
  currentPrice: 1499.9,
  installments: 2,
  installmentPrice: 49.95,
}));

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div>
      <Header />
      <Banner />
      <CategorySection />

      <ProductSection
        title='Produtos relacionados'
        products={mockProducts}
        categories={['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']}
        onCategoryChange={(cat) => console.log('Categoria:', cat)}
        onProductClick={setSelectedProduct}
      />
      <BannerPartners />
      <ProductSection
        title='Produtos relacionados'
        products={mockProducts}
        onViewAll={() => console.log('Ver todos clicado')}
        onProductClick={setSelectedProduct}
      />
      <BannerPartners />
      <BrandsSection />
      <ProductSection
        title='Produtos relacionados'
        products={mockProducts}
        onViewAll={() => console.log('Ver todos clicado')}
        onProductClick={setSelectedProduct}
      />
      <Footer />
      <ProductModal
        key={selectedProduct?.id ?? 'closed'}
        product={selectedProduct}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Home;