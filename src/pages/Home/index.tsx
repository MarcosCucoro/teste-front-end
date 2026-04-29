import { useEffect, useState } from 'react';
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
import { getProducts } from '@/services/productService';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscas produtos: ', error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);
  
  if (loading) return <p>Carregando produtos...</p>

  return (
    <div>
      <Header />
      <Banner />
      <CategorySection />

      <ProductSection
        title='Produtos relacionados'
        products={products}
        categories={['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos']}
        onCategoryChange={(cat) => console.log('Categoria:', cat)}
        onProductClick={setSelectedProduct}
      />
      <BannerPartners />
      <ProductSection
        title='Produtos relacionados'
        products={products}
        onViewAll={() => console.log('Ver todos clicado')}
        onProductClick={setSelectedProduct}
      />
      <BannerPartners />
      <BrandsSection />
      <ProductSection
        title='Produtos relacionados'
        products={products}
        onViewAll={() => console.log('Ver todos clicado')}
        onProductClick={setSelectedProduct}
      />
      <Footer />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Home;