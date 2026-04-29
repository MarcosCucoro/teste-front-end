import { useEffect, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import type { Product } from '@/types/Product';
import Button from '../Button';
import './styles.scss';

interface Props {
	product: Product | null;
	isOpen: boolean;
	onClose: () => void;
}

const formatPrice = (value: number) =>
	value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const ProductModal = ({ product, isOpen, onClose }: Props) => {
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		if (!isOpen) {
			return undefined;
		}

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', handleEscape);

		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen, onClose]);

	if (!isOpen || !product) {
		return null;
	}

	return (
		<div className="product-modal" onClick={onClose} role="presentation">
			<div
				className="product-modal__dialog"
				onClick={(event) => event.stopPropagation()}
				role="dialog"
				aria-modal="true"
				aria-labelledby="product-modal-title"
			>
				<button className="product-modal__close" onClick={onClose} aria-label="Fechar modal">
					<IoCloseOutline />
				</button>

				<div className="product-modal__media">
					<img src={product.image} alt={product.description} />
				</div>

				<div className="product-modal__content">
					<h2 id="product-modal-title" className="product-modal__title">{product.name}</h2>
					<p className="product-modal__price">{formatPrice(product.currentPrice)}</p>
					<p className="product-modal__description">{product.details}</p>
					<button className="product-modal__link" type="button">
						Veja mais detalhes do produto &gt;
					</button>

					<div className="product-modal__actions">
						<div className="product-modal__quantity" aria-label="Quantidade">
							<button
								type="button"
								onClick={() => setQuantity((current) => Math.max(1, current - 1))}
								aria-label="Diminuir quantidade"
							>
								-
							</button>
							<span>{String(quantity).padStart(2, '0')}</span>
							<button
								type="button"
								onClick={() => setQuantity((current) => current + 1)}
								aria-label="Aumentar quantidade"
							>
								+
							</button>
						</div>

						<Button variant="secondary" size="sm" uppercase>
							Comprar
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductModal;
