import { BottleWine, Dumbbell, HeartPulse, MonitorSmartphone, Shirt, Store, Wrench } from 'lucide-react';
import './styles.scss';
import { useState } from 'react';

const CategorySection = () => {
  const [active, setActive] = useState<string | null>(null);

  const categories = [
    {
      icon: <MonitorSmartphone size={61} strokeWidth={1} />,
      name: 'Tecnologia',
    },
    {
      icon: <Store size={61} strokeWidth={1} />,
      name: 'Supermercado',
    },
    {
      icon: <BottleWine size={61} strokeWidth={1} />,
      name: 'Bebidas',
    },
    {
      icon: <Wrench size={61} strokeWidth={1} />,
      name: 'Ferramentas',
    },
    {
      icon: <HeartPulse size={61} strokeWidth={1} />,
      name: 'Saúde',
    },
    {
      icon: <Dumbbell size={61} strokeWidth={1} />,
      name: 'Esportes e Fitness',
    },
    {
      icon: <Shirt size={61} strokeWidth={1} />,
      name: 'Moda',
    }
  ]

  return (
    <section className="category-section">
      <div className='category-card'>
        {categories.map((category) => (
          <div
            key={category.name}
            className={`category-item ${active === category.name ? 'category-item--active' : ''
              }`}
            onClick={() => setActive(category.name)}
          >
            <div className="category-item__icon">{category.icon}</div>
            <span className="category-item__name">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;