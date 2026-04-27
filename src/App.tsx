import { useState } from 'react';
import { Product } from './types/product';
import { Header } from './components/Header/Header';
import { ProductShelf } from './components/ProductShelf/ProductShelf';
import { ProductModal } from './components/ProductModal/ProductModal';
import styles from './App.module.scss';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <ProductShelf onSelect={setSelectedProduct} />
      </main>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default App;
