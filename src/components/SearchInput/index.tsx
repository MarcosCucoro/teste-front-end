import { Search } from 'lucide-react';
import './styles.scss';

interface Porps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  placeholder = 'O que você está buscando?',
  value,
  onChange,
}: Porps) => {

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log('buscar:', value);
          }
        }}
      />
      <Search size={28} className="search__icon" />
    </div>
  );
};

export default SearchInput;